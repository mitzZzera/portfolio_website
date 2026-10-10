"use client";

import useContactForm, { contactEndpoint } from "./useContactForm";

export default function InlineContactForm() {
  const { status, error, submit, reset } = useContactForm();
  return status === "sent" ? <div className="inline-success" role="status"><b>Your message has been sent.</b><span>Thanks for getting in touch. I'll reply to the email you provided.</span><button type="button" onClick={reset}>Write another</button></div> : (
    <form className="inline-contact-form" action={contactEndpoint} method="POST" onSubmit={submit} aria-busy={status === "sending"}>
      <input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="Your email" aria-label="Your email" readOnly={status === "sending"} />
      <input name="headline" required maxLength={100} placeholder="Headline" aria-label="Message headline" readOnly={status === "sending"} />
      <textarea name="message" required maxLength={1000} rows={5} placeholder="What do you need help with?" aria-label="Message description" readOnly={status === "sending"} />
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"} <span>→</span></button>
    </form>
  );
}
