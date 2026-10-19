import { expect, test, type BrowserContext, type Page } from "@playwright/test";

import { LOCALES, LOCALE_NAMES, type Locale } from "../../src/i18n/config";
import { DICTIONARIES } from "../../src/i18n/messages";
import { en } from "../../src/i18n/messages/en";

const ROUTES = ["/", "/features", "/features/kds", "/pricing", "/customers", "/hardware"];
const OTHER_LOCALES = LOCALES.filter((locale): locale is Exclude<Locale, "en"> => locale !== "en");

/** Opens a page and waits until it is hydrated and idle, so clicks reach React handlers. */
async function visit(page: Page, path: string) {
  await page.goto(path, { waitUntil: "networkidle" });
}

async function setLocaleCookie(context: BrowserContext, value: string, baseURL: string) {
  await context.addCookies([{ name: "poble-locale", value, url: baseURL }]);
}

/** Console errors that indicate the server and client rendered different markup. */
function watchHydration(page: Page) {
  const problems: string[] = [];
  page.on("console", (message) => {
    const text = message.text();
    // Development builds name the mismatch; production builds report React errors #418, #423 or #425.
    if (message.type() === "error" && /hydrat|did not match|server rendered|#418|#423|#425/i.test(text)) problems.push(text);
  });
  page.on("pageerror", (error) => problems.push(error.message));
  return problems;
}

async function chooseLanguage(page: Page, locale: Locale) {
  const button = page.locator("header .lang-button").first();
  await button.click();
  await page.getByRole("menuitemradio", { name: LOCALE_NAMES[locale] }).click();
}

function leaves(value: unknown, prefix = ""): [string, string][] {
  if (typeof value === "string") return [[prefix, value]];
  if (Array.isArray(value)) return value.flatMap((item, index) => leaves(item, `${prefix}.${index}`));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => leaves(v, prefix ? `${prefix}.${k}` : k));
  return [];
}

/** English strings a locale translates (and does not keep inside its own text). */
function englishOnly(locale: Locale) {
  const translated = leaves(DICTIONARIES[locale]);
  const byKey = new Map(translated);
  return leaves(en)
    .filter(([key, text]) => text.length > 3 && !text.includes("{") && byKey.get(key) !== text && !translated.some(([, v]) => v.includes(text)))
    .map(([, text]) => text);
}

async function readableText(page: Page) {
  return page.evaluate(() => {
    const roots = [...document.querySelectorAll("header.hdr, main, footer, .home-menu, #drawer")];
    const parts = roots.map((root) => (root as HTMLElement).innerText);
    for (const root of roots) {
      root.querySelectorAll("[aria-label],[alt],[placeholder]").forEach((el) => {
        for (const attr of ["aria-label", "alt", "placeholder"]) {
          const value = el.getAttribute(attr);
          if (value) parts.push(value);
        }
      });
    }
    return parts.join("\n");
  });
}

test.describe("default language", () => {
  test("is English without a saved preference", async ({ page }) => {
    const problems = watchHydration(page);
    await visit(page, "/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("header .lang-button")).toHaveAttribute("aria-label", "Language: English");
    await expect(page).toHaveTitle("Poble — The lightweight POS built for Australian hospitality");
    await expect(page.locator("#hero-title")).toContainText("A calmer counter.");
    expect(problems).toEqual([]);
  });

  test("is English for an unsupported saved value", async ({ page, context, baseURL }) => {
    await setLocaleCookie(context, "de", baseURL!);
    await visit(page, "/pricing");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("h1")).toHaveText("Poble Basic. Add what you need.");
  });
});

test.describe("choosing a language", () => {
  for (const locale of OTHER_LOCALES) {
    test(`switches the homepage to ${locale} without a reload and keeps it after refresh`, async ({ page, context }) => {
      const problems = watchHydration(page);
      const m = DICTIONARIES[locale];
      await visit(page, "/");
      await page.evaluate(() => ((window as unknown as { __marker: boolean }).__marker = true));

      await chooseLanguage(page, locale);

      await expect(page.getByRole("menu")).toBeHidden();
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("#hero-title")).toContainText(m.home.hero.line1);
      await expect(page.locator("header .lang-button")).toContainText(LOCALE_NAMES[locale]);
      await expect(page).toHaveTitle(m.meta.home.title);
      // Every language shares the one canonical URL.
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https?:\/\/[^/]+\/?$/);
      // Same document: the switch did not reload the page.
      expect(await page.evaluate(() => (window as unknown as { __marker?: boolean }).__marker)).toBe(true);
      expect((await context.cookies()).find((cookie) => cookie.name === "poble-locale")?.value).toBe(encodeURIComponent(locale));

      await page.reload({ waitUntil: "networkidle" });
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("#hero-title")).toContainText(m.home.hero.line1);
      await expect(page.getByRole("button", { name: m.language.button.replace("{language}", LOCALE_NAMES[locale]) })).toBeVisible();
      expect(problems).toEqual([]);
    });
  }

  test("updates server-rendered pages and their metadata in place", async ({ page }) => {
    await visit(page, "/pricing");
    await chooseLanguage(page, "ja");
    await expect(page.locator("h1")).toHaveText(DICTIONARIES.ja.pricingPage.heading);
    await expect(page).toHaveTitle(`${DICTIONARIES.ja.meta.pricing.title} | Poble`);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", DICTIONARIES.ja.meta.pricing.description);
  });

  test("closes on Escape and on an outside click", async ({ page }) => {
    await visit(page, "/");
    const button = page.locator("header .lang-button");
    await button.click();
    await expect(page.getByRole("menu")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("menu")).toBeHidden();
    await expect(button).toBeFocused();

    await button.click();
    await expect(page.getByRole("menu")).toBeVisible();
    await page.mouse.click(5, 400);
    await expect(page.getByRole("menu")).toBeHidden();
  });

  test("keeps the pricing calculator selection", async ({ page }) => {
    await visit(page, "/#pricing");
    const staff = page.locator('input[type="checkbox"][value="staff"]');
    await staff.check({ force: true });
    await page.locator('input[type="checkbox"][value="uber"]').check({ force: true });
    await expect(page.locator(".price-summary .price strong")).toHaveText("$100");

    await chooseLanguage(page, "ko");
    await expect(page.locator(".price-summary .price-label")).toHaveText(DICTIONARIES.ko.home.pricing.labelEstimate);
    await expect(staff).toBeChecked();
    await expect(page.locator(".price-summary .price strong")).toHaveText("$100");
  });
});

test.describe("persistence across pages", () => {
  test("follows the visitor through direct visits, new tabs and the support pages", async ({ page, context, baseURL, isMobile }) => {
    const problems = watchHydration(page);
    await visit(page, "/features");
    await chooseLanguage(page, "ko");
    await expect(page.locator("h1")).toHaveText(DICTIONARIES.ko.featuresPage.heading);

    await visit(page, "/customers");
    await expect(page.locator("h1")).toHaveText(DICTIONARIES.ko.customersPage.heading);

    // A new tab opened directly on another page.
    const second = await context.newPage();
    await second.goto(`${baseURL}/hardware`, { waitUntil: "networkidle" });
    await expect(second.locator("html")).toHaveAttribute("lang", "ko");
    await expect(second.locator("h1")).toHaveText(DICTIONARIES.ko.hardwarePage.heading);
    await second.close();

    // The standalone support pages read the same preference.
    await visit(page, "/terms");
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
    await expect(page.locator("h1")).toHaveText("이용약관");
    await expect(page.locator(".policy-copy")).toContainText("By using the Service you agree to these Terms.");

    // Choosing there carries back to the app.
    await chooseLanguage(page, "zh-CN");
    await expect(page.locator("h1")).toHaveText("服务条款");
    if (isMobile) await page.locator("#menuBtn").click();
    await page.locator(isMobile ? "#drawer a" : ".nav-links", { hasText: DICTIONARIES["zh-CN"].nav.pricing }).click();
    await expect(page).toHaveURL(/\/pricing$/);
    await expect(page.locator("h1")).toHaveText(DICTIONARIES["zh-CN"].pricingPage.heading);
    expect(problems).toEqual([]);
  });

  test("header links navigate client-side and keep the language", async ({ page, isMobile }) => {
    test.skip(isMobile, "Inner page links are in the drawer on phones");
    await visit(page, "/features");
    await chooseLanguage(page, "ja");
    await page.locator("header .nav-links", { hasText: DICTIONARIES.ja.nav.customers }).click();
    await expect(page).toHaveURL(/\/customers$/);
    await expect(page.locator("h1")).toHaveText(DICTIONARIES.ja.customersPage.heading);
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
  });
});

test.describe("translation coverage", () => {
  for (const locale of OTHER_LOCALES) {
    test(`${locale}: no untranslated English on the public pages`, async ({ page, context, baseURL }) => {
      const problems = watchHydration(page);
      await setLocaleCookie(context, locale, baseURL!);
      const forbidden = englishOnly(locale);
      for (const route of ROUTES) {
        await visit(page, route);
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        const text = await readableText(page);
        expect.soft(forbidden.filter((english) => text.includes(english)), `${route} in ${locale}`).toEqual([]);
      }
      expect(problems).toEqual([]);
    });
  }
});

test.describe("layout", () => {
  for (const locale of LOCALES) {
    for (const width of [320, 768, 1024]) {
      test(`${locale} header fits at ${width}px`, async ({ page, context, baseURL, isMobile }) => {
        test.skip(isMobile, "Viewport set explicitly");
        await setLocaleCookie(context, locale, baseURL!);
        await page.setViewportSize({ width, height: 800 });
        for (const route of ["/", "/pricing", "/terms"]) {
          await visit(page, route);
          const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
          expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(0);

          // The logo is never squeezed by the selector.
          const logo = await page.locator("header.hdr .brand img, header.hdr .compact-brand img").first().boundingBox();
          expect(logo?.width ?? 0, `${route}: logo width`).toBeGreaterThanOrEqual(80);

          // Header controls stay on one row, inside the viewport, without overlapping.
          const boxes = await page.evaluate(() =>
            [...document.querySelectorAll("header.hdr .lang-button, header.hdr .menu-btn, header.hdr .box-cta a, header.hdr .brand, header.hdr .compact-brand")]
              .map((el) => el.getBoundingClientRect())
              .filter((rect) => rect.width > 0)
              .map(({ left, right, top, bottom, height }) => ({ left, right, top, bottom, height })),
          );
          for (const box of boxes) {
            expect(box.left).toBeGreaterThanOrEqual(0);
            expect(box.right).toBeLessThanOrEqual(width);
            expect(box.height).toBeLessThanOrEqual(60);
          }
          for (let i = 0; i < boxes.length; i++) {
            for (let j = i + 1; j < boxes.length; j++) {
              const a = boxes[i];
              const b = boxes[j];
              const overlap = a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1;
              expect(overlap, `${route}: header controls overlap`).toBe(false);
            }
          }

          // The open menu stays inside the viewport.
          await page.locator("header .lang-button").click();
          const menu = await page.getByRole("menu").boundingBox();
          expect(menu).not.toBeNull();
          expect(menu!.x).toBeGreaterThanOrEqual(0);
          expect(menu!.x + menu!.width).toBeLessThanOrEqual(width);
          await page.keyboard.press("Escape");
        }
      });
    }
  }

  test("works with touch on a phone", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Phone only");
    await visit(page, "/");
    await page.locator("header .lang-button").tap();
    await page.getByRole("menuitemradio", { name: "日本語" }).tap();
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
    await expect(page.locator("header .lang-button")).toContainText("JA");
  });
});
