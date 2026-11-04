import { deliverEnquiry, validateEnquiry } from "@/lib/enquiry";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, code: "invalid", fieldErrors: { form: "The message could not be read." } },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { ok: false, code: "invalid", fieldErrors: { form: "The message could not be read." } },
      { status: 400 },
    );
  }

  const validated = validateEnquiry(body);
  if (!validated.ok) {
    return Response.json({ ok: false, code: "invalid", fieldErrors: validated.fieldErrors }, { status: 422 });
  }

  const result = await deliverEnquiry(validated.value);
  if (result.ok) {
    return Response.json(result);
  }
  const status = result.code === "not_configured" ? 503 : 502;
  return Response.json(result, { status });
}
