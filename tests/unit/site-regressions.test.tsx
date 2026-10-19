import { act, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { HomeContact } from "@/components/home/HomeContact";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { LanguageSelector } from "@/components/site/LanguageSelector";
import { SiteNav } from "@/components/site/SiteNav";

import { renderWithLocale } from "./render";

describe("homepage header", () => {
  it("has the language selector where Contact us was, and keeps Contact us in the menu", () => {
    renderWithLocale(<SiteNav variant="home" />);
    const header = document.querySelector("header.hdr") as HTMLElement;
    const actions = header.querySelector(".compact-actions") as HTMLElement;

    expect(within(header).queryByRole("button", { name: "Contact us" })).toBeNull();
    expect(actions.querySelector(".lang-select")).not.toBeNull();
    expect(within(actions).getByRole("link", { name: "Sign in" }).getAttribute("href")).toBe("https://backoffice.poble.com.au/");

    const menu = document.getElementById("drawer") as HTMLElement;
    const contact = within(menu).getByText("Contact us");
    expect(contact.getAttribute("href")).toBe("#contact");
  });

  it("keeps the section links and translates them", async () => {
    const user = userEvent.setup();
    renderWithLocale(<SiteNav variant="home" />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(within(nav).getAllByRole("link").map((link) => [link.textContent, link.getAttribute("href")])).toEqual([
      ["Products", "/#features"],
      ["Pricing", "/#pricing"],
      ["Customers", "/#customers"],
      ["About", "/#about"],
    ]);

    await user.click(screen.getByRole("button", { name: "Language: English" }));
    await user.click(screen.getByRole("menuitemradio", { name: "日本語" }));

    const translated = screen.getByRole("navigation", { name: "メイン" });
    expect(within(translated).getAllByRole("link").map((link) => [link.textContent, link.getAttribute("href")])).toEqual([
      ["製品", "/#features"],
      ["料金", "/#pricing"],
      ["導入事例", "/#customers"],
      ["会社概要", "/#about"],
    ]);
  });

  it("adds the selector to inner page headers without removing View pricing", () => {
    renderWithLocale(<SiteNav variant="page" />, "ko");
    const header = document.querySelector("header.hdr") as HTMLElement;
    expect(header.querySelector(".hdr-actions .lang-select")).not.toBeNull();
    expect(within(header).getByRole("link", { name: /요금 보기/ }).getAttribute("href")).toBe("/pricing");
  });
});

describe("switching language keeps visitor state", () => {
  it("keeps the selected plan options, quantities and estimate", async () => {
    const user = userEvent.setup();
    renderWithLocale(
      <>
        <LanguageSelector />
        <PricingCalculator />
      </>,
    );
    await user.click(screen.getByRole("switch", { name: "Staff Order" }));
    await user.click(screen.getByRole("button", { name: "Increase Staff Order devices" }));
    await user.click(screen.getByRole("switch", { name: "Uber Eats Integration" }));
    const price = () => document.querySelector(".price-summary .price strong")?.textContent;
    expect(price()).toBe("$110");

    await user.click(screen.getByRole("button", { name: "Language: English" }));
    await user.click(screen.getByRole("menuitemradio", { name: "中文" }));

    expect((screen.getByRole("switch", { name: "员工点单" }) as HTMLInputElement).checked).toBe(true);
    expect((screen.getByRole("switch", { name: "Uber Eats 对接" }) as HTMLInputElement).checked).toBe(true);
    expect((screen.getByRole("spinbutton", { name: "员工点单 设备数量" }) as HTMLInputElement).value).toBe("2");
    expect(price()).toBe("$110");
    expect(document.querySelector(".plan-breakdown")?.textContent).toBe("Poble Basic $60 + 所选功能 $50");
  });

  it("keeps an open FAQ answer open", async () => {
    const user = userEvent.setup();
    renderWithLocale(
      <>
        <LanguageSelector />
        <PricingCalculator />
      </>,
    );
    const faq = screen.getByText("Can I use my own iPad?").closest("details") as HTMLDetailsElement;
    act(() => {
      faq.open = true;
    });
    await user.click(screen.getByRole("button", { name: "Language: English" }));
    await user.click(screen.getByRole("menuitemradio", { name: "日本語" }));
    expect((screen.getByText("手持ちの iPad を使えますか？").closest("details") as HTMLDetailsElement).open).toBe(true);
  });
});

describe("homepage contact flow", () => {
  it("scrolls Contact us to the contact section, where Send Enquiry links to the enquiry page", async () => {
    const user = userEvent.setup();
    const scrolled: Element[] = [];
    Element.prototype.scrollIntoView = function (this: Element) {
      scrolled.push(this);
    };
    renderWithLocale(
      <>
        <PricingCalculator />
        <HomeContact />
      </>,
    );
    const pricing = document.getElementById("pricing") as HTMLElement;
    await user.click(within(pricing).getByRole("button", { name: "Contact us" }));
    expect(scrolled).toEqual([document.getElementById("contact")]);
    expect(location.hash).toBe("#contact");

    const contact = document.getElementById("contact") as HTMLElement;
    expect(within(contact).queryByRole("button", { name: "Contact us" })).toBeNull();
    expect(within(contact).getByRole("link", { name: "Send Enquiry" }).getAttribute("href")).toBe("/enquiry");
    expect(within(contact).queryByRole("button")).toBeNull();
  });
});

describe("pricing quote options", () => {
  it.each(["Extra POS Device", "Table Ordering", "Membership & Loyalty"])(
    "%s asks for a quote instead of changing the estimate or adding devices",
    async (name) => {
      const user = userEvent.setup();
      renderWithLocale(<PricingCalculator />);
      await user.click(screen.getByRole("switch", { name }));
      expect(document.querySelector(".price-summary .price strong")?.textContent).toBe("Contact us");
      expect(screen.queryByRole("spinbutton", { name: `${name} device quantity` })).toBeNull();
    },
  );
});
