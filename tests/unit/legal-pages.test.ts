import { readFileSync } from "node:fs";
import path from "node:path";

import { JSDOM, VirtualConsole } from "jsdom";
import { describe, expect, it } from "vitest";

import { LOCALES } from "@/i18n/config";
import { DICTIONARIES } from "@/i18n/messages";

const LEGAL = path.resolve(__dirname, "../../public/legal");
const read = (file: string) => readFileSync(path.join(LEGAL, file), "utf8");

type LegalWindow = Window & { PobleI18n: { locale: string; t: (key: string) => string; messages: Record<string, Record<string, string>> } };

/** Loads a support page with its scripts, as a browser would, with an optional saved language. */
function loadPage(page: "terms" | "privacy" | "cookies" | "manual", cookie?: string, virtualConsole?: VirtualConsole) {
  const dom = new JSDOM(read(`${page}.html`), {
    url: `http://localhost/${page}`,
    runScripts: "outside-only",
    pretendToBeVisual: true,
    ...(virtualConsole ? { virtualConsole } : {}),
  });
  const { window } = dom;
  if (cookie !== undefined) window.document.cookie = `poble-locale=${cookie}; path=/`;
  // Scripts run in page order; dialog methods are not part of jsdom.
  window.HTMLDialogElement.prototype.showModal = function () {};
  const scripts = ["i18n.js", "site.js", "contact.js", ...(page === "manual" ? ["manual.js"] : [])];
  window.matchMedia = (() => ({ matches: false, addEventListener() {}, removeEventListener() {} })) as unknown as Window["matchMedia"];
  for (const script of scripts) window.eval(read(script));
  return window as unknown as LegalWindow & typeof globalThis;
}

describe("support page dictionary", () => {
  const { messages } = loadPage("terms").PobleI18n;

  it("has the same keys in every language", () => {
    const english = Object.keys(messages.en).sort();
    for (const locale of LOCALES) expect(Object.keys(messages[locale]).sort()).toEqual(english);
  });

  it("uses the same words as the main site for shared labels", () => {
    for (const locale of LOCALES) {
      const m = DICTIONARIES[locale];
      const legal = messages[locale];
      expect(legal["nav.products"]).toBe(m.nav.products);
      expect(legal["nav.pricing"]).toBe(m.nav.pricing);
      expect(legal["nav.customers"]).toBe(m.nav.customers);
      expect(legal["nav.about"]).toBe(m.nav.about);
      expect(legal["footer.copyright"]).toBe(m.footer.copyright);
      expect(legal["language.menu"]).toBe(m.language.menu);
      expect(legal["inquiry.submit"]).toBe(m.inquiry.submit);
      expect(legal["inquiry.error"]).toBe(m.inquiry.error);
    }
  });
});

describe("support pages", () => {
  it("replace the header Contact us link with the language selector", () => {
    for (const page of ["terms", "privacy", "cookies", "manual"] as const) {
      const { document } = loadPage(page);
      const header = document.querySelector("header.hdr")!;
      expect(header.querySelector("[data-contact]")).toBeNull();
      expect(header.querySelector(".lang-select .lang-button")?.getAttribute("aria-label")).toBe("Language: English");
      expect(header.querySelectorAll('[role="menuitemradio"]')).toHaveLength(4);
    }
  });

  it("stay English without a saved language", () => {
    const window = loadPage("terms");
    expect(window.document.documentElement.lang).toBe("en");
    expect(window.document.querySelector("h1")?.textContent).toBe("Terms of Service");
    expect(window.document.title).toBe("Terms of Service — Poble");
    expect(window.document.querySelector(".english-only")).toBeNull();
  });

  it("fall back to English for an unsupported saved value", () => {
    const window = loadPage("privacy", "klingon");
    expect(window.PobleI18n.locale).toBe("en");
    expect(window.document.documentElement.lang).toBe("en");
  });

  it("translate the page chrome and keep the policy text in English with a notice", () => {
    const window = loadPage("terms", "ja");
    const { document } = window;
    expect(document.documentElement.lang).toBe("ja");
    expect(document.documentElement.classList.contains("i18n-pending")).toBe(false);
    expect(document.title).toBe("利用規約 — Poble");
    expect(document.querySelector("h1")?.textContent).toBe("利用規約");
    expect(document.querySelector(".nav-links")?.textContent).toBe("製品");
    expect(document.querySelector(".lang-button")?.getAttribute("aria-label")).toBe("言語：日本語");
    expect(document.querySelector('[role="menuitemradio"][lang="ja"]')?.getAttribute("aria-checked")).toBe("true");
    expect(document.querySelector("time")?.getAttribute("datetime")).toBe("2026-02-01");
    expect(document.querySelector("time")?.textContent).toBe("2026年2月1日");
    expect(document.querySelector(".english-only")?.textContent).toContain("英語");
    const policy = document.querySelector(".policy-copy")!;
    expect(policy.getAttribute("lang")).toBe("en");
    expect(policy.textContent).toContain("By using the Service you agree to these Terms.");
    expect(document.querySelector("footer")?.textContent).toContain("利用規約");
  });

  it("translate the manual topics and keep search working", () => {
    const window = loadPage("manual", "ko");
    const { document } = window;
    expect(document.querySelector("h1")?.textContent).toBe("사용자 매뉴얼.");
    expect(document.querySelector("#getting-started h2")?.textContent).toBe("시작하기");
    expect(document.querySelectorAll(".manual-article")).toHaveLength(7);
    expect(document.querySelector('[data-manual-topics] a[href="#integrations"]')?.textContent).toBe("연동");
    expect((document.getElementById("manualSearch") as HTMLInputElement).placeholder).toBe("프린터, 결제, 주문 등을 검색해 보세요");

    const input = document.getElementById("manualSearch") as HTMLInputElement;
    input.value = "프린터";
    input.dispatchEvent(new window.Event("input"));
    expect(document.getElementById("searchStatus")?.textContent).toMatch(/^\d+개 주제를 찾았습니다\.$/);
    expect([...document.querySelectorAll<HTMLElement>(".manual-article")].filter((a) => !a.hidden).length).toBeGreaterThan(0);
  });

  it("link Contact us to the enquiry page instead of the old dialog", () => {
    const { document } = loadPage("manual", "zh-CN");
    const link = document.querySelector(".support-help a")!;
    expect(link.getAttribute("href")).toBe("/enquiry");
    expect(link.textContent).toBe("联系我们");
    expect(document.getElementById("inquiryDialog")).toBeNull();
    expect(document.querySelector("[data-contact]")).toBeNull();
  });

  it("translate the menu button label", () => {
    const window = loadPage("cookies", "ko");
    const button = window.document.getElementById("menuBtn")!;
    expect(button.getAttribute("aria-label")).toBe("메뉴 열기");
    button.click();
    expect(button.getAttribute("aria-label")).toBe("메뉴 닫기");
  });

  it("save the chosen language and reload", () => {
    // jsdom reports a reload as an unimplemented navigation.
    const virtualConsole = new VirtualConsole();
    const navigations: string[] = [];
    virtualConsole.on("jsdomError", (error) => navigations.push(error.message));
    const window = loadPage("terms", undefined, virtualConsole);
    const button = window.document.querySelector<HTMLButtonElement>(".lang-button")!;
    button.click();
    expect(window.document.querySelector(".lang-menu")?.hasAttribute("hidden")).toBe(false);
    window.document.querySelector<HTMLButtonElement>('[data-locale="zh-CN"]')!.click();
    expect(window.document.cookie).toContain("poble-locale=zh-CN");
    expect(window.document.querySelector(".lang-menu")?.hasAttribute("hidden")).toBe(true);
    expect(navigations.some((message) => message.includes("navigation"))).toBe(true);
  });
});
