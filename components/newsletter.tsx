"use client";

import { useState } from "react";

/**
 * Footer newsletter field.
 * TODO: connect to a mailing list provider. Submitting only shows a confirmation for now.
 */
export function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="t-ui text-lilac">You are on the list.</p>;
  }

  return (
    <form
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <div className="flex h-12 w-full items-center justify-between rounded-full border border-bone px-5 sm:w-[300px]">
        <input
          required
          autoComplete="email"
          className="t-ui w-full bg-transparent text-bone placeholder:text-bone focus:outline-none"
          id="newsletter-email"
          name="email"
          placeholder="Email address"
          type="email"
        />
        <button className="t-ui shrink-0 text-bone sm:hidden" type="submit">
          Subscribe →
        </button>
      </div>
      <button
        className="t-ui hidden rounded-full border border-bone px-6 py-[15px] text-bone transition-colors hover:bg-bone hover:text-obsidian sm:inline-flex"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
}
