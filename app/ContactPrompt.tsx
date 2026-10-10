"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import styles from "./ContactPrompt.module.css";

type ContactPromptProps = {
  children: ReactNode;
  className?: string;
};

export default function ContactPrompt({ children, className = "" }: ContactPromptProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [complete, setComplete] = useState(false);

  function openDialog() {
    setComplete(false);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const headline = String(form.get("headline") ?? "Portfolio enquiry");
    const description = String(form.get("description") ?? "");
    window.location.href = `mailto:contact@dimitar-shopov.dev?subject=${encodeURIComponent(headline)}&body=${encodeURIComponent(`${description}\n\nSent from dimitar-shopov.dev`)}`;
    setComplete(true);
  }

  return (
    <>
      <button type="button" className={`${styles.trigger} ${className}`} onClick={openDialog}>{children}</button>
      <dialog ref={dialogRef} className={styles.dialog} onClick={(event) => event.target === dialogRef.current && closeDialog()}>
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={closeDialog} aria-label="Close message form">×</button>
          <p className={styles.kicker}><span /> Start a conversation</p>
          <h2>What can I help you <em>solve?</em></h2>
          <p className={styles.intro}>Share a quick overview of what you have in mind. Your email app will open with a ready-to-send message.</p>
          {complete ? (
            <div className={styles.success} role="status"><span>✓</span><div><strong>Your email app should be ready.</strong><p>Check the pre-filled message and press send to reach contact@dimitar-shopov.dev.</p></div><button type="button" onClick={closeDialog}>Done</button></div>
          ) : (
            <form onSubmit={submit} className={styles.form}>
              <label>Headline<input name="headline" required maxLength={100} placeholder="A short summary of your idea" autoFocus /></label>
              <label>Description<textarea name="description" required maxLength={1000} rows={6} placeholder="Tell me about the problem, what you need, and anything else that would be helpful to know." /></label>
              <div className={styles.actions}><span>Opens your email app.</span><button type="submit">Open email <b>→</b></button></div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
