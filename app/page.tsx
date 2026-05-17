import Link from "next/link";
import { site, projects, notes } from "./lib/site";
import { sortedPosts, formatDate } from "./lib/posts";
import ArticleRow from "./components/ArticleRow";
import ProjectCard from "./components/ProjectCard";
import ImgSlot from "./components/ImgSlot";

export default function Home() {
  const all = sortedPosts();
  const featured = all.find((p) => p.featured) ?? all[0];
  const recent = all.filter((p) => p.slug !== featured.slug).slice(0, 4);
  const portfolioSample = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">{site.issue}</div>
              <h1>
                Notes on building <em>software</em>
                <br />
                — and the work
                <br />
                behind it
              </h1>
            </div>
            <aside className="hero-side">
              <p>
                <strong style={{ color: "var(--ink)" }}>{site.name}</strong> —{" "}
                {site.role.toLowerCase()} who ships fast, writes about the
                craft, and keeps the interesting bits in public.
              </p>
              <p
                className="mono tiny"
                style={{ marginTop: 24, color: "var(--ink-mute)" }}
              >
                {all.length} essays · {projects.length} projects · still writing
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">This issue</div>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                Featured essay
              </h2>
            </div>
          </div>
          <div className="featured">
            <ImgSlot className="featured-img" label={featured.tag} />
            <div className="featured-body">
              <div>
                <div className="featured-meta">
                  <span>{featured.tag}</span>
                  <span>{formatDate(featured.date)}</span>
                  <span>{featured.readTime} read</span>
                </div>
                <h3 className="featured-title">{featured.title}</h3>
                <p
                  className="muted"
                  style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 520 }}
                >
                  {featured.excerpt}
                </p>
              </div>
              <Link
                className="btn"
                href={`/blog/${featured.slug}`}
                style={{ marginTop: 24 }}
              >
                Read essay <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Latest writing</div>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                Keep reading
              </h2>
            </div>
            <Link className="link-more" href="/blog">
              All posts ({all.length}) →
            </Link>
          </div>
          <div>
            {recent.map((p) => (
              <ArticleRow key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                Projects
              </h2>
            </div>
            <Link className="link-more" href="/work">
              All projects →
            </Link>
          </div>
          <div className="portfolio-grid">
            {portfolioSample.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="section">
        <div className="container-tight">
          <div className="eyebrow">Logbook</div>
          <h2 className="section-title" style={{ marginTop: 8 }}>
            What I&apos;m working on
          </h2>
          <ul className="notes-list">
            {notes.map((n, i) => (
              <li key={i}>
                <div className="date">{n.date}</div>
                <div className="text">{n.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
