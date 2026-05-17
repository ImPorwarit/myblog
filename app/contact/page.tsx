import type { Metadata } from "next";
import { site } from "../lib/site";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>
            Say <em>hello</em>
            <br />
            anytime
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Send a message</div>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                  marginTop: 16,
                }}
              >
                For project work, speaking, or just to compare notes — use the
                form or email me directly. I read everything.
              </p>
              <ContactForm />
            </div>

            <aside>
              <div className="eyebrow">Other ways</div>
              <div
                className="fact-list"
                style={{ marginTop: 16, paddingTop: 0, borderTop: "none" }}
              >
                <div className="fact-key">Email</div>
                <div className="fact-val mono" style={{ fontSize: 14 }}>
                  {site.email}
                </div>
                <div className="fact-key">Based in</div>
                <div className="fact-val">{site.location}</div>
                {site.socials.map((s) => (
                  <div key={s.label} style={{ display: "contents" }}>
                    <div className="fact-key">{s.label}</div>
                    <div className="fact-val mono" style={{ fontSize: 14 }}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.handle}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 48,
                  padding: 32,
                  border: "1px solid var(--rule)",
                  borderRadius: 4,
                }}
              >
                <div className="eyebrow">Availability</div>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 22,
                    lineHeight: 1.3,
                    margin: "12px 0 16px",
                  }}
                >
                  {site.availability.label}
                </p>
                <p className="muted" style={{ fontSize: 14, margin: 0 }}>
                  {site.availability.note}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
