"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import { SubmitButton } from "@/components/button";

export const TOPICS = ["Design", "Software", "Events", "Booking", "Something else"] as const;

// TODO: confirm ranges with the studio. These are first-pass options.
const BUDGETS = ["Under $10k", "$10k to $25k", "$25k to $50k", "$50k and up", "Not sure yet"];
const TIMELINES = ["As soon as possible", "Within 1 to 3 months", "In 3 to 6 months", "Flexible"];

const field =
  "t-ui w-full rounded-[14px] border border-bone bg-transparent px-5 text-bone placeholder:text-bone/70 focus:border-lilac focus:outline-none focus:ring-1 focus:ring-lilac";

function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label className="t-label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function Select({ id, name, options }: { id: string; name: string; options: string[] }) {
  return (
    <div className="relative">
      <select
        className={clsx(field, "h-14 appearance-none pr-10")}
        defaultValue=""
        id={id}
        name={name}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} className="bg-graphite" value={o}>
            {o}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        className="t-ui pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
      >
        ↓
      </span>
    </div>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

/** "Form" and "Success state" from the Contact frame. `?topic=booking` preselects a topic. */
export function ContactForm({ className }: { className?: string }) {
  const params = useSearchParams();
  const fromQuery = TOPICS.find((t) => t.toLowerCase() === params.get("topic")?.toLowerCase());
  const [topic, setTopic] = useState<string>(fromQuery ?? TOPICS[0]);
  const [status, setStatus] = useState<Status>("idle");

  if (status === "sent") {
    return (
      <div
        aria-live="polite"
        className={clsx("flex flex-col gap-4 rounded-3xl bg-ultraviolet p-7 md:p-12", className)}
      >
        <h2 className="t-headline">Got it.</h2>
        <p className="t-body-l">We will read it properly and reply within [two working days].</p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, topic }),
      });

      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className={clsx(
        "flex flex-col gap-6 rounded-3xl bg-graphite p-6 md:gap-7 md:p-12",
        className,
      )}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        <div className="flex flex-1 flex-col gap-[10px]">
          <Label htmlFor="contact-name">Name</Label>
          <input
            required
            autoComplete="name"
            className={clsx(field, "h-14")}
            id="contact-name"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <Label htmlFor="contact-email">Email</Label>
          <input
            required
            autoComplete="email"
            className={clsx(field, "h-14")}
            id="contact-email"
            name="email"
            placeholder="you@company.com"
            type="email"
          />
        </div>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="t-label mb-3">What is this about?</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label
              key={t}
              className={clsx(
                "t-ui cursor-pointer rounded-full px-4 py-[10px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lilac",
                topic === t
                  ? "bg-bone text-obsidian"
                  : "border border-bone text-bone hover:bg-bone/10",
              )}
            >
              <input
                checked={topic === t}
                className="sr-only"
                name="topic"
                type="radio"
                value={t}
                onChange={() => setTopic(t)}
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-[10px]">
        <Label htmlFor="contact-message">What are you working on?</Label>
        <textarea
          required
          className={clsx(field, "min-h-[140px] resize-y py-4")}
          id="contact-message"
          name="message"
          placeholder="A few sentences is plenty."
        />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        <div className="flex flex-1 flex-col gap-[10px]">
          <Label htmlFor="contact-budget">Budget range (optional)</Label>
          <Select id="contact-budget" name="budget" options={BUDGETS} />
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <Label htmlFor="contact-timeline">Timeline (optional)</Label>
          <Select id="contact-timeline" name="timeline" options={TIMELINES} />
        </div>
      </div>

      {/* Honeypot: hidden from people, often filled by bots. */}
      <input aria-hidden autoComplete="off" className="hidden" name="company" tabIndex={-1} />

      <div className="flex flex-col gap-4">
        <SubmitButton className="w-full md:w-auto md:self-start" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send ↗"}
        </SubmitButton>
        {status === "error" && (
          <p aria-live="polite" className="t-body text-lilac">
            That did not go through. Please try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}
