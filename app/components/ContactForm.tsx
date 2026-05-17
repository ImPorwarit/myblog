"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        style={{
          marginTop: 32,
          padding: 32,
          border: "1px solid var(--accent)",
          borderRadius: 8,
          background: "var(--accent-soft)",
        }}
      >
        <div className="eyebrow" style={{ color: "var(--accent)" }}>
          ✓ Message sent
        </div>
        <p
          style={{
            margin: "12px 0 0",
            fontFamily: "var(--serif)",
            fontSize: 20,
          }}
        >
          Thanks, {form.name} — I&apos;ll reply within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form className="field-group" onSubmit={submit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
        />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="What's this about?"
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me a bit about it…"
          rows={5}
        />
      </div>
      <button className="btn" type="submit" style={{ marginTop: 12 }}>
        Send message →
      </button>
    </form>
  );
}
