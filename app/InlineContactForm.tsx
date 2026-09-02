"use client";

import { FormEvent, useState } from "react";

export default function InlineContactForm() {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setReady(true); }
  return ready ? <div className="inline-success" role="status"><b>Message ready.</b><span>Email sending will be connected later, so nothing has been sent yet.</span><button onClick={() => setReady(false)}>Write another</button></div> : (
    <form className="inline-contact-form" onSubmit={submit}>
      <input name="headline" required maxLength={100} placeholder="Headline" aria-label="Message headline" />
      <textarea name="description" required maxLength={1000} rows={5} placeholder="What do you need help with?" aria-label="Message description" />
      <button type="submit">Let’s solve something <span>→</span></button>
    </form>
  );
}
