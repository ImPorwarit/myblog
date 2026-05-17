import Link from "next/link";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-mark" style={{ fontSize: 20 }}>
              {site.brand}
              <span className="brand-dot" />
            </div>
            <p className="footer-blurb" style={{ marginTop: 16 }}>
              {site.tagline}
            </p>
          </div>

          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Elsewhere</h4>
            <ul>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Built with Next.js · {site.issue}</span>
        </div>
      </div>
    </footer>
  );
}
