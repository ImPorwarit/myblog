import type { Metadata } from "next";
import { site, projects } from "../lib/site";
import ProjectCard from "../components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Products and tools I've designed, built, and shipped.",
};

export default function WorkPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Selected work</div>
              <h1>
                Things I&apos;ve
                <br />
                <em>built</em> · 2023—2026
              </h1>
            </div>
            <aside className="hero-side">
              <p>
                I&apos;ve worked as a software engineer for eight years —
                through startups, a larger platform team, and now mostly
                independent.
              </p>
              <p>
                Here are{" "}
                <strong style={{ color: "var(--ink)" }}>
                  {projects.length} projects
                </strong>{" "}
                I&apos;m proud of and learned the most from. Reach me at{" "}
                <span className="mono">{site.email}</span>.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {sorted.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
