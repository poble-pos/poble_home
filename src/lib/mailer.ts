import nodemailer, { type Transporter } from "nodemailer";

/**
 * @file mailer.ts
 * @description Email transport for inquiry notifications.
 *
 * If real SMTP credentials are provided via env vars, mail is delivered
 * through them. Otherwise the transport falls back to a safe DEV mode that
 * NEVER delivers to real inboxes — it either uses an Ethereal preview
 * account (returns a preview URL) or, if offline, just logs to the console.
 *
 * Configure real sending in .env.local:
 *   SMTP_HOST=smtp.yourprovider.com
 *   SMTP_PORT=587
 *   SMTP_USER=your-login
 *   SMTP_PASS=your-password
 *   MAIL_FROM="Poble <sales@poble.com.au>"
 *   INQUIRY_NOTIFY_EMAIL=inho.kim@posnet.com.au
 */

export type MailMode = "smtp" | "ethereal" | "console";

interface CachedTransport {
  transporter: Transporter | null;
  mode: MailMode;
}

let cached: CachedTransport | null = null;

export const MAIL_FROM =
  process.env.MAIL_FROM || "Poble <sales@poble.com.au>";

export const NOTIFY_EMAIL =
  process.env.INQUIRY_NOTIFY_EMAIL || "inho.kim@posnet.com.au";

async function getTransport(): Promise<CachedTransport> {
  if (cached) return cached;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  // 1) Real SMTP — used only when the operator has configured credentials.
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    const port = Number(SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    cached = { transporter, mode: "smtp" };
    return cached;
  }

  // 2) DEV fallback — Ethereal captures mail but never delivers it.
  try {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
    cached = { transporter, mode: "ethereal" };
    return cached;
  } catch {
    // 3) Offline fallback — no network for Ethereal. Log only.
    cached = { transporter: null, mode: "console" };
    return cached;
  }
}

export interface SendResult {
  mode: MailMode;
  previewUrl?: string | null;
}

interface MailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export async function sendMail(input: MailInput): Promise<SendResult> {
  const { transporter, mode } = await getTransport();

  if (!transporter) {
    // Console mode: no delivery, just record what would have been sent.
    console.info("[mailer:console] Would send email:", {
      to: input.to,
      subject: input.subject,
      replyTo: input.replyTo,
    });
    return { mode };
  }

  const info = await transporter.sendMail({
    from: MAIL_FROM,
    to: input.to,
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text,
    html: input.html,
  });

  const previewUrl =
    mode === "ethereal" ? nodemailer.getTestMessageUrl(info) : null;

  if (previewUrl) {
    console.info(`[mailer:ethereal] Preview (${input.to}): ${previewUrl}`);
  }

  return { mode, previewUrl };
}
