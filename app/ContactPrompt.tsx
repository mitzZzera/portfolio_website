"use client";

import { ReactNode, useRef } from "react";
import useContactForm, { contactEndpoint } from "./useContactForm";
import styles from "./ContactPrompt.module.css";

type ContactPromptProps = {
  children: ReactNode;
  className?: string;
};

export default function ContactPrompt({ children, className = "" }: ContactPromptProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { status, error, submit, reset } = useContactForm();

  function openDialog() {
    if (status !== "sending") reset();
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button type="button" className={`${styles.trigger} ${className}`} onClick={openDialog}>{children}</button>
      <dialog ref={dialogRef} className={styles.dialog} onClick={(event) => event.target === dialogRef.current && closeDialog()}>
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={closeDialog} aria-label="Close message form">×</button>
          <p className={styles.kicker}><span /> Start a conversation</p>
          <h2>What can I help you <em>solve?</em></h2>
          <p className={styles.intro}>Share a quick overview of what you have in mind. Leave your email so I can get back to you.</p>
          {status === "sent" ? (
            <div className={styles.success} role="status"><span>✓</span><div><strong>Your message has been sent.</strong><p>Thanks for getting in touch. I'll reply to the email you provided.</p></div><button type="button" onClick={closeDialog}>Done</button></div>
          ) : (
            <form action={contactEndpoint} method="POST" onSubmit={submit} className={styles.form} aria-busy={status === "sending"}>
              <label>Your email<input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" autoFocus readOnly={status === "sending"} /></label>
              <label>Headline<input name="headline" required maxLength={100} placeholder="A short summary of your idea" readOnly={status === "sending"} /></label>
              <label>Description<textarea name="message" required maxLength={1000} rows={6} placeholder="Tell me about the problem, what you need, and anything else that would be helpful to know." readOnly={status === "sending"} /></label>
              {error && <p role="alert">{error}</p>}
              <div className={styles.actions}><span>Sent directly to my inbox.</span><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"} <b>→</b></button></div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
