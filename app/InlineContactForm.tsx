"use client";

import { FormEvent, useState } from "react";

export default function InlineContactForm() {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const headline = String(form.get("headline") ?? "Portfolio enquiry");
    const description = String(form.get("description") ?? "");
    window.location.href = `mailto:contact@dimitar-shopov.dev?subject=${encodeURIComponent(headline)}&body=${encodeURIComponent(`${description}\n\nSent from dimitar-shopov.dev`)}`;
    setReady(true);
  }
  return ready ? <div className="inline-success" role="status"><b>Your email app should be ready.</b><span>Check the pre-filled message and press send to reach contact@dimitar-shopov.dev.</span><button onClick={() => setReady(false)}>Write another</button></div> : (
    <form className="inline-contact-form" onSubmit={submit}>
      <input name="headline" required maxLength={100} placeholder="Headline" aria-label="Message headline" />
      <textarea name="description" required maxLength={1000} rows={5} placeholder="What do you need help with?" aria-label="Message description" />
      <button type="submit">Open email <span>→</span></button>
    </form>
  );
}
