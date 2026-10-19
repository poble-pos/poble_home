import { act, screen, within } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { HomeHero } from "@/components/home/HomeHero";
import { ContactButton } from "@/components/site/ContactButton";
import { LanguageSelector } from "@/components/site/LanguageSelector";
import { LOCALES, type Locale } from "@/i18n/config";
import { DICTIONARIES } from "@/i18n/messages";
import { en } from "@/i18n/messages/en";

import { renderWithLocale } from "./render";
import { routerPush } from "./router-mock";

const t = en.enquiry;

// jsdom has no modal dialogs; open and close them the way a browser would.
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement) {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function (this: HTMLDialogElement) {
    this.open = false;
    this.dispatchEvent(new Event("close"));
  };
});

afterEach(() => {
  vi.unstubAllGlobals();
});

function stubFetch(...responses: Array<{ ok: boolean; body: object } | "pending">) {
  const calls: unknown[] = [];
  const fetch = vi.fn((_url: string, init: RequestInit) => {
    calls.push(JSON.parse(String(init.body)));
    const next = responses.shift() ?? { ok: true, body: { success: true } };
    if (next === "pending") return new Promise<Response>(() => {});
    return Promise.resolve({ ok: next.ok, json: () => Promise.resolve(next.body) } as Response);
  });
  vi.stubGlobal("fetch", fetch);
  return { fetch, calls };
}

const question = () => screen.getByRole("heading", { level: 2 }).textContent;
const errorText = () => document.getElementById("enquiry-error")?.textContent;
const continueButton = () => screen.getByRole("button", { name: new RegExp(`^(${t.continue}|${t.review})$`) });

/** Answers every step with the English labels, ending on the review. */
async function completeForm(user: UserEvent, labels = t) {
  const next = () => user.click(screen.getByRole("button", { name: new RegExp(`^(${labels.continue}|${labels.review})$`) }));
  await user.click(screen.getByRole("button", { name: labels.options.venue.restaurant }));
  await next();
  await user.click(screen.getByRole("button", { name: labels.options.reason["replace-pos"] }));
  await next();
  await user.click(screen.getByRole("button", { name: labels.features.kds }));
  await user.click(screen.getByRole("button", { name: labels.features.other }));
  await user.type(screen.getByRole("textbox", { name: labels.otherLabel }), "Two kitchens");
  await next();
  await user.click(screen.getByRole("button", { name: labels.options.venues["two-three"] }));
  await next();
  await user.click(screen.getByRole("button", { name: labels.options.timing["one-month"] }));
  await next();
  await user.type(screen.getByRole("textbox", { name: labels.fields.company.label }), "Corner Street Cafe");
  await user.type(screen.getByRole("textbox", { name: labels.fields.postcode.label }), "2000");
  await next();
  await user.type(screen.getByRole("textbox", { name: labels.fields.name.label }), "Jordan Lee");
  await user.type(screen.getByRole("textbox", { name: labels.fields.email.label }), "jordan@example.com");
  await user.type(screen.getByRole("textbox", { name: labels.fields.phone.label }), "0412 345 678");
  await next();
}

describe("enquiry form", () => {
  it("starts in English with the export's first question, intro and progress", () => {
    renderWithLocale(<EnquiryForm />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Your venue.Your Poble setup.");
    expect(question()).toBe("What kind of venue do you run?");
    expect(screen.getByText("Step 1 of 7")).toBeTruthy();
    expect(screen.getByText("0% complete")).toBeTruthy();
    expect((screen.getByRole("button", { name: "Previous question" }) as HTMLButtonElement).disabled).toBe(true);
    expect(within(screen.getByRole("group")).getAllByRole("button").map((b) => b.textContent)).toEqual(Object.values(t.options.venue));
  });

  it("asks for an answer before moving on and selects one option at a time", async () => {
    const user = userEvent.setup();
    renderWithLocale(<EnquiryForm />);
    await user.click(continueButton());
    expect(errorText()).toBe("Please select an option to continue.");
    expect(question()).toBe(t.questions.venue);

    await user.click(screen.getByRole("button", { name: "Bar or pub" }));
    await user.click(screen.getByRole("button", { name: "Food truck" }));
    expect(screen.getByRole("button", { name: "Bar or pub" }).getAttribute("aria-pressed")).toBe("false");
    expect(screen.getByRole("button", { name: "Food truck" }).getAttribute("aria-pressed")).toBe("true");
    expect(errorText()).toBe("");
    await user.click(continueButton());
    expect(question()).toBe(t.questions.reason);
    expect(document.activeElement).toBe(screen.getByRole("heading", { level: 2 }));
    expect(screen.getByText("Step 2 of 7")).toBeTruthy();
  });

  it("keeps POBLE POS selected, groups popular tools by venue and requires text for other requirements", async () => {
    const user = userEvent.setup();
    renderWithLocale(<EnquiryForm />);
    await user.click(screen.getByRole("button", { name: "Restaurant" }));
    await user.click(continueButton());
    await user.click(screen.getByRole("button", { name: "Exploring my options" }));
    await user.click(continueButton());

    expect([...document.querySelectorAll(".group-label")].map((n) => n.textContent)).toEqual([
      "Your starting point",
      "Popular for your venue",
      "More tools for your venue",
    ]);
    const base = screen.getByRole("button", { name: /^POBLE POS/ });
    expect(base.getAttribute("aria-pressed")).toBe("true");
    await user.click(base);
    expect(base.getAttribute("aria-pressed")).toBe("true");

    await user.click(screen.getByRole("button", { name: "Other requirements" }));
    await user.click(continueButton());
    expect(errorText()).toBe("Please describe your other requirements.");
    const other = screen.getByRole("textbox", { name: t.otherLabel });
    expect(other.getAttribute("aria-invalid")).toBe("true");
    expect(document.activeElement).toBe(other);
  });

  it("explains a feature in a dialog that closes again", async () => {
    const user = userEvent.setup();
    renderWithLocale(<EnquiryForm />);
    await user.click(screen.getByRole("button", { name: "Cafe or bakery" }));
    await user.click(continueButton());
    await user.click(screen.getByRole("button", { name: "Opening a new venue" }));
    await user.click(continueButton());

    await user.click(screen.getByRole("button", { name: "About KDS" }));
    const dialog = document.querySelector("dialog.feature-dialog") as HTMLDialogElement;
    expect(dialog.open).toBe(true);
    expect(within(dialog).getByRole("heading", { level: 2 }).textContent).toBe("KDS");
    expect(dialog.textContent).toContain("A calm pass, even at capacity.");
    expect(dialog.querySelectorAll("li")).toHaveLength(3);
    await user.click(within(dialog).getByRole("button", { name: "Close feature details" }));
    expect(dialog.open).toBe(false);
  });

  it("validates the venue and contact fields with the export's rules", async () => {
    const user = userEvent.setup();
    renderWithLocale(<EnquiryForm />);
    for (const answer of ["Restaurant", "Replacing my current POS"]) {
      await user.click(screen.getByRole("button", { name: answer }));
      await user.click(continueButton());
    }
    await user.click(continueButton());
    for (const answer of ["1 venue", "As soon as possible"]) {
      await user.click(screen.getByRole("button", { name: answer }));
      await user.click(continueButton());
    }

    await user.click(continueButton());
    expect(errorText()).toBe("Please enter your venue or business name.");
    await user.type(screen.getByRole("textbox", { name: "Venue or business name" }), "Corner Street Cafe");
    await user.type(screen.getByRole("textbox", { name: "Australian postcode" }), "200{Enter}");
    expect(errorText()).toBe("Please enter a 4-digit postcode.");
    expect(screen.getByRole("textbox", { name: "Australian postcode" }).getAttribute("aria-invalid")).toBe("true");
    await user.type(screen.getByRole("textbox", { name: "Australian postcode" }), "0{Enter}");

    expect(question()).toBe(t.questions.contact);
    await user.type(screen.getByRole("textbox", { name: "Full name" }), "Jordan");
    await user.type(screen.getByRole("textbox", { name: "Email address" }), "jordan@");
    await user.type(screen.getByRole("textbox", { name: "Phone number" }), "12ab");
    await user.click(continueButton());
    expect(errorText()).toBe("Please enter a valid email address.");
    await user.type(screen.getByRole("textbox", { name: "Email address" }), "example.com");
    await user.click(continueButton());
    expect(errorText()).toBe("Please enter a valid phone number.");
    for (const name of ["Full name", "Email address", "Phone number"]) {
      expect(screen.getByRole("textbox", { name }).getAttribute("autocomplete")).toBeTruthy();
    }
  });

  it("goes back without losing answers", async () => {
    const user = userEvent.setup();
    renderWithLocale(<EnquiryForm />);
    await user.click(screen.getByRole("button", { name: "Bar or pub" }));
    await user.click(continueButton());
    await user.click(screen.getByRole("button", { name: "Previous question" }));
    expect(question()).toBe(t.questions.venue);
    expect(screen.getByRole("button", { name: "Bar or pub" }).getAttribute("aria-pressed")).toBe("true");
  });

  it("reviews the answers and sends them with the existing enquiry fields", async () => {
    const user = userEvent.setup();
    const { calls } = stubFetch({ ok: true, body: { success: true } });
    renderWithLocale(<EnquiryForm />);
    await completeForm(user);

    expect(question()).toBe("Your Poble setup, at a glance.");
    expect(screen.getByText("Review your Poble enquiry")).toBeTruthy();
    expect(screen.getByText("100% complete")).toBeTruthy();
    const review = document.querySelector("dl.review") as HTMLElement;
    const rows = [...review.querySelectorAll("div")].map((row) => [row.querySelector("dt")?.textContent, row.querySelector("dd")?.textContent]);
    expect(rows).toEqual([
      [t.questions.venue, "Restaurant"],
      [t.questions.reason, "Replacing my current POS"],
      [t.questions.features, "POBLE POS, KDS, Other requirements"],
      ["Other requirements", "Two kitchens"],
      [t.questions.venues, "2–3 venues"],
      [t.questions.timing, "Within 1 month"],
      ["Venue or business name", "Corner Street Cafe"],
      ["Australian postcode", "2000"],
      ["Full name", "Jordan Lee"],
      ["Email address", "jordan@example.com"],
      ["Phone number", "0412 345 678"],
    ]);

    await user.click(screen.getByRole("button", { name: "Send Enquiry" }));
    expect(calls).toEqual([
      {
        name: "Jordan Lee",
        mobile: "0412 345 678",
        email: "jordan@example.com",
        shop: "Corner Street Cafe",
        postcode: "2000",
        venueType: "restaurant",
        reason: "replace-pos",
        features: ["poble-pos", "kds", "other"],
        otherRequirements: "Two kitchens",
        venues: "two-three",
        timing: "one-month",
        locale: "en",
      },
    ]);
    expect(await screen.findByRole("heading", { name: en.inquiry.successTitle })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Back to home" }).getAttribute("href")).toBe("/");
  });

  it("sends once while a request is in flight", async () => {
    const user = userEvent.setup();
    const { fetch } = stubFetch("pending");
    renderWithLocale(<EnquiryForm />);
    await completeForm(user);
    const send = screen.getByRole("button", { name: "Send Enquiry" });
    await user.click(send);
    const sending = screen.getByRole("button", { name: en.common.sending }) as HTMLButtonElement;
    expect(sending.disabled).toBe(true);
    await user.click(sending);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect((screen.getByRole("button", { name: "Edit answers" }) as HTMLButtonElement).disabled).toBe(true);
  });

  it("keeps every answer and offers a retry when sending fails", async () => {
    const user = userEvent.setup();
    const { fetch } = stubFetch({ ok: false, body: { error: "We couldn't send your enquiry." } }, { ok: true, body: { success: true } });
    renderWithLocale(<EnquiryForm />);
    await completeForm(user);
    await user.click(screen.getByRole("button", { name: "Send Enquiry" }));

    const alert = await screen.findByRole("alert");
    expect(alert.textContent).toContain(en.inquiry.error);
    expect(within(alert).getByRole("link", { name: "sales@poble.com.au" }).getAttribute("href")).toBe("mailto:sales@poble.com.au");
    expect(screen.queryByText(en.inquiry.successTitle)).toBeNull();
    expect(document.querySelector("dl.review")?.textContent).toContain("jordan@example.com");

    await user.click(screen.getByRole("button", { name: "Send Enquiry" }));
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(await screen.findByRole("heading", { name: en.inquiry.successTitle })).toBeTruthy();
  });
});

describe("enquiry form languages", () => {
  it("switches language with the site selector and keeps answers, typed text and errors", async () => {
    const user = userEvent.setup();
    renderWithLocale(
      <>
        <LanguageSelector />
        <EnquiryForm />
      </>,
    );
    for (const answer of ["Restaurant", "Opening a new venue"]) {
      await user.click(screen.getByRole("button", { name: answer }));
      await user.click(continueButton());
    }
    await user.click(screen.getByRole("button", { name: "Other requirements" }));
    await user.type(screen.getByRole("textbox", { name: t.otherLabel }), "Need help");
    await user.click(continueButton());
    await user.click(continueButton());
    expect(errorText()).toBe(t.errors.selectOne);

    await user.click(screen.getByRole("button", { name: "Language: English" }));
    await user.click(screen.getByRole("menuitemradio", { name: "한국어" }));

    const ko = DICTIONARIES.ko.enquiry;
    expect(question()).toBe(ko.questions.venues);
    expect(errorText()).toBe(ko.errors.selectOne);
    expect(screen.getByText("4 / 7 단계")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: ko.previous }));
    expect((screen.getByRole("textbox", { name: ko.otherLabel }) as HTMLTextAreaElement).value).toBe("Need help");
    expect(screen.getByRole("button", { name: ko.features["other"] }).getAttribute("aria-pressed")).toBe("true");
  });

  /** English text a language translates, so it must not appear anywhere in that language. */
  function englishOnly(locale: Exclude<Locale, "en">) {
    const own = Object.values(flatten(DICTIONARIES[locale].enquiry));
    return Object.entries(flatten(en.enquiry))
      .filter(([key, text]) => text.length > 3 && !text.includes("{") && flatten(DICTIONARIES[locale].enquiry)[key] !== text && !own.some((v) => v.includes(text)))
      .map(([, text]) => text);
  }
  function flatten(value: unknown, prefix = ""): Record<string, string> {
    if (typeof value === "string") return { [prefix]: value };
    if (value && typeof value === "object") {
      return Object.assign({}, ...Object.entries(value).map(([k, v]) => flatten(v, prefix ? `${prefix}.${k}` : k)));
    }
    return {};
  }
  const readable = (root: HTMLElement) =>
    [root.textContent, ...[...root.querySelectorAll("[aria-label],[placeholder]")].flatMap((el) => [el.getAttribute("aria-label"), el.getAttribute("placeholder")])].join("\n");

  it.each(LOCALES.filter((locale): locale is Exclude<Locale, "en"> => locale !== "en"))(
    "shows every step, the feature details and the review in %s without English",
    async (locale) => {
      const user = userEvent.setup();
      stubFetch();
      const labels = DICTIONARIES[locale].enquiry;
      const { container } = renderWithLocale(<EnquiryForm />, locale);
      const forbidden = englishOnly(locale);
      const seen: string[] = [];
      const capture = () => seen.push(readable(container));

      capture();
      await user.click(screen.getByRole("button", { name: labels.continue }));
      capture();
      await user.click(screen.getByRole("button", { name: labels.options.venue.restaurant }));
      await user.click(screen.getByRole("button", { name: labels.continue }));
      await user.click(screen.getByRole("button", { name: labels.options.reason.exploring }));
      await user.click(screen.getByRole("button", { name: labels.continue }));
      for (const id of Object.keys(labels.features) as (keyof typeof labels.features)[]) {
        await user.click(screen.getByRole("button", { name: labels.about.replace("{name}", labels.features[id]) }));
        capture();
        await user.click(screen.getByRole("button", { name: labels.closeDetails }));
      }
      await user.click(screen.getByRole("button", { name: labels.features.other }));
      await user.click(screen.getByRole("button", { name: labels.continue }));
      capture();
      act(() => {
        (document.activeElement as HTMLElement)?.blur();
      });
      await user.type(screen.getByRole("textbox", { name: labels.otherLabel }), "x");
      await user.click(screen.getByRole("button", { name: labels.continue }));
      for (const answer of [labels.options.venues.one, labels.options.timing.asap]) {
        await user.click(screen.getByRole("button", { name: answer }));
        await user.click(screen.getByRole("button", { name: labels.continue }));
      }
      await user.click(screen.getByRole("button", { name: labels.continue }));
      capture();
      await user.type(screen.getByRole("textbox", { name: labels.fields.company.label }), "Cafe");
      await user.type(screen.getByRole("textbox", { name: labels.fields.postcode.label }), "20");
      await user.click(screen.getByRole("button", { name: labels.continue }));
      capture();
      await user.type(screen.getByRole("textbox", { name: labels.fields.postcode.label }), "00");
      await user.click(screen.getByRole("button", { name: labels.continue }));
      await user.type(screen.getByRole("textbox", { name: labels.fields.name.label }), "Jo");
      await user.type(screen.getByRole("textbox", { name: labels.fields.email.label }), "jo@");
      await user.click(screen.getByRole("button", { name: labels.review }));
      capture();
      await user.type(screen.getByRole("textbox", { name: labels.fields.email.label }), "example.com");
      await user.type(screen.getByRole("textbox", { name: labels.fields.phone.label }), "1");
      await user.click(screen.getByRole("button", { name: labels.review }));
      capture();
      await user.clear(screen.getByRole("textbox", { name: labels.fields.phone.label }));
      await user.type(screen.getByRole("textbox", { name: labels.fields.phone.label }), "0412345678");
      await user.click(screen.getByRole("button", { name: labels.review }));
      expect(question()).toBe(labels.reviewHeading);
      capture();

      const text = seen.join("\n");
      expect(forbidden.filter((english) => text.includes(english))).toEqual([]);
      expect(text).not.toMatch(/\benquiry\.[a-z]/);
    },
  );
});

describe("enquiry entry points", () => {
  it("sends Contact us to the enquiry page where there is no contact section", async () => {
    const user = userEvent.setup();
    renderWithLocale(<ContactButton className="btn">Contact us</ContactButton>);
    await user.click(screen.getByRole("button", { name: "Contact us" }));
    expect(routerPush).toHaveBeenCalledWith("/enquiry");
  });

  it("keeps the homepage hero Contact us on the contact section", async () => {
    const user = userEvent.setup();
    const scrolled: Element[] = [];
    Element.prototype.scrollIntoView = function (this: Element) {
      scrolled.push(this);
    };
    renderWithLocale(
      <>
        <HomeHero />
        <section id="contact" />
      </>,
    );
    await user.click(screen.getAllByRole("button", { name: "Contact us" })[0]);
    expect(scrolled).toEqual([document.getElementById("contact")]);
    expect(routerPush).not.toHaveBeenCalled();
  });
});
