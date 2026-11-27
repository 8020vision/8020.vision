import { NextResponse } from "next/server";

const MAX = 5000;

function clean(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, MAX) : "";
}

/**
 * Receives the Contact form.
 * Set CONTACT_WEBHOOK_URL (Slack, Zapier, Make, Formspree, etc.) to forward each message as JSON.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled: pretend it worked.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const message = {
    name: clean(body.name),
    email: clean(body.email),
    topic: clean(body.topic),
    message: clean(body.message),
    budget: clean(body.budget),
    timeline: clean(body.timeline),
  };

  if (!message.name || !message.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)) {
    return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info("[contact] CONTACT_WEBHOOK_URL is not set. Message:", message);

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Contact form is not configured" }, { status: 503 });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...message,
      text: `New enquiry from ${message.name} <${message.email}> · ${message.topic}\n\n${message.message}\n\nBudget: ${message.budget || "n/a"} · Timeline: ${message.timeline || "n/a"}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Could not deliver the message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
