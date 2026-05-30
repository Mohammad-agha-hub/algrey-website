import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Types ────────────────────────────────────────────────────────────────────
export interface QuotePayload {
  // Source tracking
  source: "hero" | "enquiry";

  // Core fields (both forms)
  firstName: string; // hero sends full name split; enquiry sends separately
  lastName?: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;

  // Enquiry-only fields
  propertyType?: string;
  urgency?: string;
  details?: string;
}

// ── Validation ───────────────────────────────────────────────────────────────
function validate(data: Partial<QuotePayload>): string | null {
  if (!data.firstName?.trim()) return "First name is required";
  if (!data.email?.trim()) return "Email is required";
  if (!data.phone?.trim()) return "Phone number is required";
  if (!data.postcode?.trim()) return "Postcode is required";
  if (!data.service?.trim()) return "Service is required";
  if (!["hero", "enquiry"].includes(data.source!)) return "Invalid source";

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(data.email)) return "Invalid email address";

  return null;
}

// ── Email HTML ────────────────────────────────────────────────────────────────
function buildEmailHtml(data: QuotePayload): string {
  const fullName = data.lastName
    ? `${data.firstName} ${data.lastName}`
    : data.firstName;

  const sourceLabel =
    data.source === "hero"
      ? " Hero Form (Homepage)"
      : " Enquiry Page (Full Form)";

  const rows: [string, string][] = [
    ["Source", sourceLabel],
    ["Name", fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Postcode", data.postcode],
    ["Service", data.service],
  ];

  if (data.propertyType) rows.push(["Property Type", data.propertyType]);
  if (data.urgency) rows.push(["Urgency", data.urgency]);
  if (data.details) rows.push(["Additional Details", data.details]);

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;background:#f8faff;font-weight:600;color:#0d2257;
                   width:160px;border-bottom:1px solid #e8edf5;white-space:nowrap;">
          ${label}
        </td>
        <td style="padding:10px 14px;color:#374151;border-bottom:1px solid #e8edf5;">
          ${value}
        </td>
      </tr>`,
    )
    .join("");

  const urgencyBadge = data.urgency?.toLowerCase().includes("emergency")
    ? `<div style="margin-bottom:20px;padding:10px 16px;background:#fef2f2;
                     border:1px solid #fecaca;border-radius:8px;color:#dc2626;
                     font-weight:700;font-size:14px;">
           ⚠️ EMERGENCY REQUEST — Respond immediately
         </div>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;font-family:'Inter',Arial,sans-serif;background:#f0f4ff;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:16px;overflow:hidden;
                      box-shadow:0 4px 24px rgba(13,34,87,0.10);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d2257 0%,#1a3a7a 100%);
                       padding:32px 36px;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;
                         letter-spacing:-0.5px;">
                Al Grey's Cleaning
              </h1>
              <p style="margin:6px 0 0;color:#93c5fd;font-size:14px;">
                New Quote Request
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              ${urgencyBadge}
              <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.6;">
                A new quote request has been submitted via the
                <strong>${sourceLabel}</strong>.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="border:1px solid #e8edf5;border-radius:10px;overflow:hidden;
                            border-collapse:separate;border-spacing:0;">
                ${tableRows}
              </table>

              <!-- CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${data.email}"
                   style="display:inline-block;background:#2563eb;color:#ffffff;
                          text-decoration:none;font-weight:700;font-size:14px;
                          letter-spacing:0.08em;text-transform:uppercase;
                          padding:13px 28px;border-radius:8px;">
                  Reply to ${data.firstName} →
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px;background:#f8faff;border-top:1px solid #e8edf5;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">
                This email was sent automatically from your Al Grey's website.
                Submitted at ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Confirmation email to customer ───────────────────────────────────────────
function buildConfirmationHtml(data: QuotePayload): string {
  const fullName = data.lastName
    ? `${data.firstName} ${data.lastName}`
    : data.firstName;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;font-family:'Inter',Arial,sans-serif;background:#f0f4ff;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="560" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:16px;overflow:hidden;
                      box-shadow:0 4px 24px rgba(13,34,87,0.10);">

          <tr>
            <td style="background:linear-gradient(135deg,#0d2257 0%,#1a3a7a 100%);
                       padding:32px 36px;text-align:center;">
             
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;">
                Quote Request Received!
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                Hi <strong>${fullName}</strong>,
              </p>
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                Thanks for reaching out! We've received your quote request for
                <strong>${data.service}</strong> and we'll get back to you
                <strong>within 2 hours</strong> with your free, no-obligation quote.
              </p>
              <div style="background:#f8faff;border:1px solid #e8edf5;border-radius:10px;
                          padding:16px 20px;margin:20px 0;">
                <p style="margin:0;color:#0d2257;font-weight:700;font-size:14px;">
                  Your request summary
                </p>
                <p style="margin:8px 0 0;color:#6b7280;font-size:13px;line-height:1.6;">
                  Service: ${data.service}<br/>
                  Postcode: ${data.postcode}
                  ${data.propertyType ? `<br/>Property: ${data.propertyType}` : ""}
                </p>
              </div>
              <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.6;">
                If you need to speak with us urgently, please call us directly.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 36px;background:#f8faff;border-top:1px solid #e8edf5;">
              <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">
                © Al Grey's Cleaning Services · London & Surrey
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: Partial<QuotePayload> = await req.json();

    // Validate
    const error = validate(body);
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const data = body as QuotePayload;
    const fullName = data.lastName
      ? `${data.firstName} ${data.lastName}`
      : data.firstName;

    // Send both emails in parallel
    const [adminEmail, customerEmail] = await Promise.all([
      // 1. Notify the business
      resend.emails.send({
        from: "Al Grey's Cleaning <onboarding@resend.dev>", // ← update with your verified domain
        to: process.env.BUSINESS_EMAIL ?? "admin@yourdomain.com",
        subject: `New Quote Request — ${data.service} (${data.postcode}) [${data.source === "hero" ? "Homepage" : "Enquiry Page"}]`,
        html: buildEmailHtml(data),
        replyTo: data.email,
      }),

      // 2. Confirm to the customer
      resend.emails.send({
        from: "Al Grey's Cleaning <onboarding@resend.dev>", // ← update with your verified domain
        to: data.email,
        subject: "We've received your quote request — Al Grey's Cleaning",
        html: buildConfirmationHtml(data),
      }),
    ]);

    // Log any Resend errors without failing the request
    if (adminEmail.error) console.error("Admin email error:", adminEmail.error);
    if (customerEmail.error)
      console.error("Customer email error:", customerEmail.error);

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
      ids: {
        admin: adminEmail.data?.id,
        customer: customerEmail.data?.id,
      },
    });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
