import { NextResponse } from "next/server";

import { NOTIFY_EMAIL, sendMail } from "@/lib/mailer";

/**
 * POST /api/inquiry
 * Receives a venue enquiry from the "Send inquiry" form, then sends:
 *   1) a receipt/confirmation email to the customer, and
 *   2) a copy of the enquiry to the sales inbox (INQUIRY_NOTIFY_EMAIL).
 */

interface InquiryBody {
  name?: string;
  mobile?: string;
  email?: string;
  shop?: string;
  suburb?: string;
  message?: string;
}

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: InquiryBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const mobile = (body.mobile || "").trim();
  const email = (body.email || "").trim();
  const shop = (body.shop || "").trim();
  const suburb = (body.suburb || "").trim();
  const message = (body.message || "").trim();

  if (!name || !mobile || !email || !shop) {
    return NextResponse.json(
      { error: "Please fill in your name, mobile, email and shop details." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Guard against oversized payloads.
  if (message.length > 4000 || name.length > 200 || shop.length > 500) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Mobile", mobile],
    ["Email", email],
    ["Shop Name & Address", shop],
    ["Suburb", suburb || "—"],
    ["Message", message || "—"],
  ];

  const tableHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b6b6b;white-space:nowrap;vertical-align:top">${esc(
          k,
        )}</td><td style="padding:6px 0;color:#111">${esc(v)}</td></tr>`,
    )
    .join("");

  // --- 1) Customer receipt -------------------------------------------------
  const customerHtml = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
    <h2 style="font-size:20px;margin:0 0 4px">Thanks, ${esc(name)} — we've got your enquiry.</h2>
    <p style="color:#555;line-height:1.6;margin:8px 0 20px">
      A Poble sales specialist will be in touch shortly to help set up your venue.
      For anything urgent, call us on <strong>1300 966 963</strong>
      (Weekdays 9am–8pm · Weekends 10am–8pm).
    </p>
    <p style="color:#6b6b6b;font-size:13px;margin:0 0 6px">Here's a copy of what you sent:</p>
    <table style="font-size:14px;border-collapse:collapse">${tableHtml}</table>
    <p style="color:#999;font-size:12px;margin-top:24px">
      — The Poble Team · sales@poble.com.au
    </p>
  </div>`;

  const customerText =
    `Thanks, ${name} — we've got your enquiry.\n\n` +
    `A Poble sales specialist will be in touch shortly.\n` +
    `Urgent? Call 1300 966 963 (Weekdays 9am-8pm, Weekends 10am-8pm).\n\n` +
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\n— The Poble Team`;

  // --- 2) Sales notification ----------------------------------------------
  const ownerHtml = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
    <h2 style="font-size:18px;margin:0 0 12px">New venue enquiry — ${esc(name)}</h2>
    <table style="font-size:14px;border-collapse:collapse">${tableHtml}</table>
    <p style="color:#999;font-size:12px;margin-top:20px">Received ${esc(submittedAt)} · Reply directly to this email to reach the customer.</p>
  </div>`;

  const ownerText =
    `New venue enquiry — ${name}\n\n` +
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nReceived ${submittedAt}`;

  try {
    const [customerResult] = await Promise.all([
      sendMail({
        to: email,
        subject: "We've received your enquiry — Poble",
        html: customerHtml,
        text: customerText,
        replyTo: NOTIFY_EMAIL,
      }),
      sendMail({
        to: NOTIFY_EMAIL,
        subject: `New venue enquiry — ${name}`,
        html: ownerHtml,
        text: ownerText,
        replyTo: email,
      }),
    ]);

    return NextResponse.json({
      success: true,
      mode: customerResult.mode,
      // Preview URLs only exist in DEV (Ethereal) mode; harmless in prod.
      previewUrl: customerResult.previewUrl ?? null,
    });
  } catch (error) {
    console.error("Failed to send inquiry email:", error);
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please try again or call us." },
      { status: 500 },
    );
  }
}
