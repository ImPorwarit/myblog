import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../lib/site";
import ImgSlot from "../components/ImgSlot";

export const metadata: Metadata = {
  title: "About",
  description: site.tagline,
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container">
          <div className="about-grid">
            <div>
              <ImgSlot className="about-portrait" label="portrait" />
              <div className="fact-list">
                <div className="fact-key">Name</div>
                <div className="fact-val">{site.name}</div>
                <div className="fact-key">Role</div>
                <div className="fact-val">{site.role}</div>
                <div className="fact-key">Based in</div>
                <div className="fact-val">{site.location}</div>
                <div className="fact-key">Email</div>
                <div className="fact-val mono" style={{ fontSize: 13 }}>
                  {site.email}
                </div>
              </div>
            </div>
            <div className="about-bio">
              <div className="eyebrow">About</div>
              <h2>
                I build software
                <br />
                and write about
                <br />
                <em>the craft</em>
              </h2>
              {site.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>
                If you want to talk shop — systems, design, or what to build
                next —{" "}
                <Link
                  href="/contact"
                  style={{
                    color: "var(--accent)",
                    borderBottom: "1px solid var(--accent)",
                  }}
                >
                  send a message
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Short timeline</div>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                The path
              </h2>
            </div>
          </div>
          <ul className="notes-list" style={{ marginTop: 0 }}>
            {site.timeline.map((t) => (
              <li key={t.year}>
                <div className="date">{t.year}</div>
                <div className="text">{t.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
