import { act, fireEvent, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { LanguageSelector } from "@/components/site/LanguageSelector";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LOCALE_NAMES, LOCALES } from "@/i18n/config";

import { renderWithLocale } from "./render";
import { routerRefresh } from "./router-mock";

function setup(locale: Parameters<typeof renderWithLocale>[1] = "en") {
  const user = userEvent.setup();
  renderWithLocale(
    <>
      <LanguageSelector />
      <SiteFooter />
      <button type="button">Elsewhere</button>
    </>,
    locale,
  );
  return { user, button: screen.getByRole("button", { name: /^(Language|언어|语言|言語)/ }) };
}

describe("LanguageSelector", () => {
  it("shows English by default with the menu closed", () => {
    const { button } = setup();
    expect(button).toHaveProperty("textContent", expect.stringContaining("English"));
    expect(button.getAttribute("aria-label")).toBe("Language: English");
    expect(button.getAttribute("aria-haspopup")).toBe("menu");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("lists the four languages in their own names and checks the current one", async () => {
    const { user, button } = setup();
    await user.click(button);
    const menu = screen.getByRole("menu", { name: "Choose a language" });
    const items = within(menu).getAllByRole("menuitemradio");
    expect(items.map((item) => item.textContent)).toEqual(["English", "한국어", "中文", "日本語"]);
    expect(items.map((item) => item.getAttribute("aria-checked"))).toEqual(["true", "false", "false", "false"]);
    expect(items.map((item) => item.getAttribute("lang"))).toEqual(["en", "ko", "zh-CN", "ja"]);
    expect(document.activeElement).toBe(items[0]);
  });

  it.each(LOCALES.filter((locale) => locale !== "en"))("switches the site to %s, saves it and closes the menu", async (locale) => {
    const { user, button } = setup();
    expect(screen.getByText("© 2026 Poble. Management solution by ECNESOFT.")).toBeTruthy();

    await user.click(button);
    await user.click(screen.getByRole("menuitemradio", { name: LOCALE_NAMES[locale] }));

    expect(screen.queryByRole("menu")).toBeNull();
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(button);
    expect(button.textContent).toContain(LOCALE_NAMES[locale]);
    expect(document.documentElement.lang).toBe(locale);
    expect(document.cookie).toContain(`poble-locale=${encodeURIComponent(locale)}`);
    expect(routerRefresh).toHaveBeenCalledTimes(1);
    // Content outside the selector follows the new language.
    expect(screen.queryByText("© 2026 Poble. Management solution by ECNESOFT.")).toBeNull();

    await user.click(button);
    expect(screen.getByRole("menuitemradio", { name: LOCALE_NAMES[locale] }).getAttribute("aria-checked")).toBe("true");
  });

  it("does nothing when the current language is chosen again", async () => {
    const { user, button } = setup("ja");
    await user.click(button);
    await user.click(screen.getByRole("menuitemradio", { name: "日本語" }));
    expect(screen.queryByRole("menu")).toBeNull();
    expect(routerRefresh).not.toHaveBeenCalled();
  });

  it("closes on Escape and returns focus to the button", async () => {
    const { user, button } = setup();
    await user.click(button);
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).toBeNull();
    expect(document.activeElement).toBe(button);
  });

  it("closes when clicking outside", async () => {
    const { user, button } = setup();
    await user.click(button);
    expect(screen.getByRole("menu")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Elsewhere" }));
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("supports arrow keys, Home and End, and selects with Enter", async () => {
    const { user, button } = setup();
    button.focus();
    await user.keyboard("{ArrowDown}");
    const items = screen.getAllByRole("menuitemradio");
    expect(document.activeElement).toBe(items[0]);
    await user.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(items[1]);
    await user.keyboard("{End}");
    expect(document.activeElement).toBe(items[3]);
    await user.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(items[0]);
    await user.keyboard("{ArrowUp}");
    expect(document.activeElement).toBe(items[3]);
    await user.keyboard("{Home}{ArrowDown}{Enter}");
    expect(screen.queryByRole("menu")).toBeNull();
    expect(button.getAttribute("aria-label")).toBe("언어: 한국어");
  });

  it("closes when focus tabs away", async () => {
    const { user, button } = setup();
    await user.click(button);
    await user.tab();
    expect(screen.queryByRole("menu")).toBeNull();
  });

  it("starts in the server-rendered language", () => {
    const { button } = setup("zh-CN");
    expect(button.getAttribute("aria-label")).toBe("语言：中文");
    expect(screen.getByText("© 2026 Poble。ECNESOFT 门店管理解决方案。")).toBeTruthy();
  });

  it("still switches the page when cookies cannot be written", async () => {
    Object.defineProperty(document, "cookie", {
      configurable: true,
      get: () => "",
      set: () => {
        throw new Error("blocked");
      },
    });
    try {
      const { user, button } = setup();
      await user.click(button);
      await user.click(screen.getByRole("menuitemradio", { name: "日本語" }));
      expect(button.getAttribute("aria-label")).toBe("言語：日本語");
    } finally {
      // Removing the own property restores the real cookie accessor on Document.prototype.
      delete (document as unknown as Record<string, unknown>).cookie;
    }
  });

  it("ignores pointer events inside the selector", () => {
    const { button } = setup();
    act(() => button.click());
    fireEvent.pointerDown(screen.getByRole("menu"));
    expect(screen.getByRole("menu")).toBeTruthy();
  });
});
