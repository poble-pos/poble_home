import { NextResponse } from "next/server";

import { detailTableHtml, escapeHtml, sendMail } from "@/lib/mailer";

/**
 * POST /api/partnership
 * Receives a "Partner with Poble" proposal and emails it to the partnerships inbox,
 * with the submitter as reply-to. A filled honeypot field is treated as spam and
 * still answers success, so bots get no signal.
 */

interface PartnershipBody {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
}

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PARTNERSHIP_EMAIL = process.env.PARTNERSHIP_NOTIFY_EMAIL || "support@posnet.com.au";

export async function POST(request: Request) {
  let body: PartnershipBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const message = (body.message || "").trim();

  if (!name || !phone || !email || !company || !message) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > 4000 || name.length > 120 || company.length > 200) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Company", company],
    ["Proposal", message],
  ];

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
    <h2 style="font-size:18px;margin:0 0 12px">New partnership proposal — ${escapeHtml(company)}</h2>
    ${detailTableHtml(rows)}
  </div>`;

  const text =
    `New partnership proposal — ${company}\n\n` + rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await sendMail({
      to: PARTNERSHIP_EMAIL,
      subject: `Partnership proposal — ${company}`,
      html,
      text,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send partnership email:", error);
    return NextResponse.json(
      { error: "We couldn't send your proposal. Please try again or email us." },
      { status: 500 },
    );
  }
}
