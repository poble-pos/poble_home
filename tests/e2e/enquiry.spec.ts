import { expect, test } from "@playwright/test";

import { en } from "../../src/i18n/messages/en";

const t = en.enquiry;

test("Send Enquiry opens the enquiry page, which survives a refresh and keeps the language", async ({ page, context, baseURL }) => {
  await context.addCookies([{ name: "poble-locale", value: "ko", url: baseURL! }]);
  await page.goto("/", { waitUntil: "networkidle" });
  await page.locator("#contact").getByRole("link", { name: "문의 보내기" }).click();
  await expect(page).toHaveURL(/\/enquiry$/);
  await expect(page.getByRole("heading", { level: 2 })).toHaveText("어떤 매장을 운영하시나요?");
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { level: 2 })).toHaveText("어떤 매장을 운영하시나요?");
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
});

test("the form fits the viewport in every language and the old panel is gone", async ({ page, context, baseURL }) => {
  for (const locale of ["en", "ko", "zh-CN", "ja"]) {
    await context.addCookies([{ name: "poble-locale", value: locale, url: baseURL! }]);
    await page.goto("/enquiry", { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, locale).toBeLessThanOrEqual(0);
    await page.locator(".choice").first().click();
    await page.locator("button.continue").click();
    await page.locator(".choice").first().click();
    await page.locator("button.continue").click();
    await page.getByRole("button", { name: /^(About|기능 설명|功能介绍|機能の説明)/ }).first().click();
    await expect(page.locator("dialog.feature-dialog[open]")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth), locale).toBeLessThanOrEqual(0);
  }
  await expect(page.locator("#inquiryDialog")).toHaveCount(0);
});

test("language selector on the enquiry page switches the form without losing the step", async ({ page, context, baseURL }) => {
  await context.addCookies([{ name: "poble-locale", value: "en", url: baseURL! }]);
  await page.goto("/enquiry", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: t.options.venue.restaurant }).click();
  await page.locator("header .lang-button").first().click();
  await page.getByRole("menuitemradio", { name: "日本語" }).click();
  await expect(page.getByRole("button", { name: "レストラン" })).toHaveAttribute("aria-pressed", "true");
});
