"use client";

import { FormEvent, useRef, useState } from "react";

export const contactEndpoint = "https://formspree.io/f/maeqjbza";

export default function useContactForm() {
  const pending = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  function reset() {
    setStatus("idle");
    setError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    pending.current = true;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.errors?.map((item: { message: string }) => item.message).join(" ") || "Your message couldn't be sent. Please try again or email contact@dimitar-shopov.dev.");
      }
      form.reset();
      setStatus("sent");
    } catch (cause) {
      setError(cause instanceof Error && cause.name === "Error" ? cause.message : "Unable to connect. Please try again or email contact@dimitar-shopov.dev.");
      setStatus("idle");
    } finally {
      pending.current = false;
    }
  }

  return { status, error, submit, reset };
}
