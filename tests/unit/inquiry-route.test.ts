import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMail = vi.fn();
vi.mock("@/lib/mailer", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/mailer")>();
  return { ...actual, NOTIFY_EMAIL: "sales@example.com", sendMail: (input: unknown) => sendMail(input) };
});

const { POST } = await import("@/app/api/inquiry/route");

const post = (body: unknown) =>
  POST(new Request("http://localhost/api/inquiry", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }));

const ENQUIRY = {
  name: "Jordan Lee",
  mobile: "0412 345 678",
  email: "jordan@example.com",
  shop: "Corner Street Cafe",
  postcode: "2000",
  venueType: "restaurant",
  reason: "replace-pos",
  features: ["poble-pos", "kds", "other"],
  otherRequirements: "주방이 두 개입니다",
  venues: "two-three",
  timing: "one-month",
  locale: "ko",
};

beforeEach(() => {
  sendMail.mockReset();
  sendMail.mockResolvedValue({ mode: "console" });
});

describe("POST /api/inquiry", () => {
  it("emails the customer and sales an English report of the enquiry page answers", async () => {
    const response = await post(ENQUIRY);
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true });
    expect(sendMail).toHaveBeenCalledTimes(2);
    const [customer, sales] = sendMail.mock.calls.map(([input]) => input as { to: string; text: string; replyTo: string });
    expect(customer.to).toBe("jordan@example.com");
    expect(sales.to).toBe("sales@example.com");
    expect(sales.replyTo).toBe("jordan@example.com");
    for (const line of [
      "Name: Jordan Lee",
      "Mobile: 0412 345 678",
      "Venue or business name: Corner Street Cafe",
      "Postcode: 2000",
      "Venue type: Restaurant",
      "Reason for enquiry: Replacing my current POS",
      "Selected features: POBLE POS, KDS, Other requirements",
      "Other requirements: 주방이 두 개입니다",
      "Number of venues: 2–3 venues",
      "Preferred start: Within 1 month",
      "Customer language: Korean",
    ]) {
      expect(sales.text).toContain(line);
    }
    expect(sales.text).not.toContain("Suburb");
    expect(sales.text).not.toContain("Message:");
  });

  it("still accepts the original enquiry fields", async () => {
    const response = await post({ name: "Sam", mobile: "0400 000 000", email: "sam@example.com", shop: "Sam's, 1 Main St", suburb: "Ryde", message: "Hi" });
    expect(response.status).toBe(200);
    const sales = sendMail.mock.calls[1][0] as { text: string };
    expect(sales.text).toContain("Shop Name & Address: Sam's, 1 Main St");
    expect(sales.text).toContain("Suburb: Ryde");
    expect(sales.text).toContain("Message: Hi");
  });

  it.each([
    ["an unknown venue type", { venueType: "nightclub" }],
    ["an unknown feature", { features: ["poble-pos", "drone-delivery"] }],
    ["features that are not a list", { features: "kds" }],
    ["a postcode that is not 4 digits", { postcode: "20000" }],
    ["a missing phone number", { mobile: "" }],
  ])("rejects %s without sending email", async (_label, patch) => {
    const response = await post({ ...ENQUIRY, ...patch });
    expect(response.status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("reports a failure when the email cannot be sent", async () => {
    sendMail.mockRejectedValue(new Error("SMTP down"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const response = await post(ENQUIRY);
    expect(response.status).toBe(500);
    expect(await response.json()).toHaveProperty("error");
  });
});
