/**
 * Enquiry delivery.
 *
 * The form is intentionally not connected until ENQUIRY_WEBHOOK_URL is set.
 * Point that variable at a form service (Resend inbound, Formspree, or a clinic inbox webhook)
 * that accepts a JSON POST. This module returns ok: true only when that endpoint accepts the message.
 * Do not fake a successful submission.
 */

export type EnquiryInput = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  privacy?: unknown;
  company?: unknown;
};

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "privacy" | "form", string>>;

export type EnquiryResult =
  | { ok: true }
  | { ok: false; code: "invalid"; fieldErrors: FieldErrors }
  | { ok: false; code: "not_configured" }
  | { ok: false; code: "delivery_failed" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export function validateEnquiry(input: EnquiryInput): { ok: true; value: Enquiry } | { ok: false; fieldErrors: FieldErrors } {
  const fieldErrors: FieldErrors = {};
  const name = asString(input.name).trim().replace(/\s+/g, " ");
  const email = asString(input.email).trim();
  const phone = asString(input.phone).trim();
  const message = asString(input.message).trim();
  const privacy = input.privacy === true || input.privacy === "true" || input.privacy === "on";
  const company = asString(input.company).trim();

  if (company) {
    fieldErrors.form = "The message could not be sent.";
  }
  if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!emailPattern.test(email) || email.length > 120) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (phone && !/^[0-9+().\-\s]{7,20}$/.test(phone)) {
    fieldErrors.phone = "Check the phone number, or leave it blank.";
  }
  if (message.length < 10 || message.length > 1000) {
    fieldErrors.message = "Write a short note, at least a sentence. Do not include detailed medical information.";
  }
  if (!privacy) {
    fieldErrors.privacy = "Please acknowledge the privacy notice before sending.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return { ok: true, value: { name, email, phone, message } };
}

export async function deliverEnquiry(enquiry: Enquiry): Promise<EnquiryResult> {
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) {
    return { ok: false, code: "not_configured" };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...enquiry,
        source: "kafagway-website",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      return { ok: false, code: "delivery_failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, code: "delivery_failed" };
  }
}

export const enquiryMessages = {
  not_configured:
    "This form is not connected to the clinic inbox yet, so the message was not sent. Please call, email, or use Facebook.",
  delivery_failed: "The message could not be sent. Please call or email the clinic.",
  sent: "Your message was sent. If you do not hear back, please call the clinic.",
} as const;
