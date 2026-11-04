"use client";

import { useId, useState } from "react";
import { ArrowSubmit } from "@/components/ui/ArrowButton";
import { clinic } from "@/content/clinic";
import { contactCopy } from "@/content/copy";
import { enquiryMessages, type FieldErrors } from "@/lib/enquiry";

type Status = "idle" | "submitting" | "sent" | "not_configured" | "delivery_failed";

export function EnquiryForm() {
  const baseId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      privacy: data.get("privacy"),
      company: data.get("company"),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok: boolean;
        code?: Status | "invalid";
        fieldErrors?: FieldErrors;
      };
      if (result.code === "invalid") {
        setErrors(result.fieldErrors ?? {});
        setStatus("idle");
        return;
      }
      if (result.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (result.code === "not_configured" || result.code === "delivery_failed") {
        setStatus(result.code);
        return;
      }
      setStatus("delivery_failed");
    } catch {
      setStatus("delivery_failed");
    }
  }

  const statusMessage =
    status === "sent"
      ? enquiryMessages.sent
      : status === "not_configured"
        ? enquiryMessages.not_configured
        : status === "delivery_failed"
          ? enquiryMessages.delivery_failed
          : errors.form;

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={`${baseId}-note`} className="max-w-xl">
      <p id={`${baseId}-note`} className="text-sm text-brown">
        {contactCopy.formNote}
      </p>
      <div className="sr-only" aria-hidden>
        <label htmlFor={`${baseId}-company`}>Company</label>
        <input id={`${baseId}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="mt-6">
        <label className="eyebrow text-brown" htmlFor={`${baseId}-name`}>
          Name
        </label>
        <input id={`${baseId}-name`} name="name" autoComplete="name" required className="field" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${baseId}-name-error` : undefined} />
        {errors.name ? (
          <p id={`${baseId}-name-error`} className="mt-2 text-sm text-red">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="mt-6">
        <label className="eyebrow text-brown" htmlFor={`${baseId}-email`}>
          Email
        </label>
        <input id={`${baseId}-email`} name="email" type="email" autoComplete="email" required className="field" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${baseId}-email-error` : undefined} />
        {errors.email ? (
          <p id={`${baseId}-email-error`} className="mt-2 text-sm text-red">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="mt-6">
        <label className="eyebrow text-brown" htmlFor={`${baseId}-phone`}>
          Phone <span className="tracking-normal normal-case">(optional)</span>
        </label>
        <input id={`${baseId}-phone`} name="phone" type="tel" autoComplete="tel" className="field" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? `${baseId}-phone-error` : undefined} />
        {errors.phone ? (
          <p id={`${baseId}-phone-error`} className="mt-2 text-sm text-red">
            {errors.phone}
          </p>
        ) : null}
      </div>
      <div className="mt-6">
        <label className="eyebrow text-brown" htmlFor={`${baseId}-message`}>
          General enquiry
        </label>
        <textarea id={`${baseId}-message`} name="message" required className="field" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${baseId}-message-error` : undefined} />
        {errors.message ? (
          <p id={`${baseId}-message-error`} className="mt-2 text-sm text-red">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm leading-relaxed" htmlFor={`${baseId}-privacy`}>
          <input id={`${baseId}-privacy`} name="privacy" type="checkbox" className="mt-1 h-4 w-4 accent-red" required aria-invalid={Boolean(errors.privacy)} />
          <span>
            I understand this is a general enquiry and that a full privacy policy is still pending.{" "}
            <a href="/privacy" className="underline decoration-red underline-offset-4">
              Read the notice
            </a>
            .
          </span>
        </label>
        {errors.privacy ? <p className="mt-2 text-sm text-red">{errors.privacy}</p> : null}
      </div>
      <div className="mt-8">
        <ArrowSubmit disabled={status === "submitting"}>{status === "submitting" ? "Sending" : "Submit"}</ArrowSubmit>
      </div>
      <div aria-live="polite" className="mt-6 min-h-12 text-sm leading-relaxed">
        {statusMessage ? <p>{statusMessage}</p> : null}
        {status === "not_configured" || status === "delivery_failed" ? (
          <p className="mt-2">
            <a className="underline decoration-red underline-offset-4" href={`tel:${clinic.phone.tel}`}>
              {clinic.phone.display}
            </a>
            {" · "}
            <a className="underline decoration-red underline-offset-4" href={`mailto:${clinic.email}`}>
              {clinic.email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
