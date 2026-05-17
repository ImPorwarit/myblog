import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../lib/site";
import ImgSlot from "../../components/ImgSlot";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.blurb,
    openGraph: {
      title: project.title,
      description: project.blurb,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="page-enter">
      <section className="proj-detail-hero">
        <div className="container">
          <Link href="/work" className="back-link">
            ← Back to all work
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: 12,
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="eyebrow">
                {project.tag} · {project.year}
              </div>
              <h1
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(48px, 6.5vw, 88px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  margin: "16px 0 0",
                  fontWeight: 500,
                }}
              >
                {project.title}
              </h1>
            </div>
            <div
              className="mono tiny muted"
              style={{ textAlign: "right" }}
            >
              #{project.number} / {String(projects.length).padStart(2, "0")}
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: 24,
              lineHeight: 1.4,
              color: "var(--ink-soft)",
              margin: "32px 0 0",
              maxWidth: 720,
              fontStyle: "italic",
            }}
          >
            {project.blurb}
          </p>
          <ImgSlot
            label={`${project.title} — overview`}
            style={{ aspectRatio: "16 / 9", marginTop: 48 }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="proj-detail-grid">
            <aside>
              <div
                className="fact-list"
                style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}
              >
                <div className="fact-key">Role</div>
                <div className="fact-val">{project.role}</div>
                <div className="fact-key">Timeline</div>
                <div className="fact-val">{project.timeline}</div>
                <div className="fact-key">Category</div>
                <div className="fact-val">{project.tag}</div>
                <div className="fact-key">Year</div>
                <div className="fact-val">{project.year}</div>
                <div className="fact-key">Stack</div>
                <div className="fact-val">
                  <div className="stack-row">
                    {project.stack.map((s) => (
                      <span key={s} className="stack-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                {(project.link || project.repo) && (
                  <>
                    <div className="fact-key">Links</div>
                    <div className="fact-val">
                      <div style={{ display: "flex", gap: 16 }}>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--accent)" }}
                          >
                            Live →
                          </a>
                        )}
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </aside>
            <div className="proj-detail-body">
              <h3>About the project</h3>
              <p>{project.detail}</p>
              <h3>What I learned</h3>
              <ul>
                {project.learnings.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Next</div>
          <Link
            href={`/work/${next.slug}`}
            className="proj-card"
            style={{
              marginTop: 24,
              gridTemplateColumns: "1fr 1fr",
              display: "grid",
              gap: 32,
              alignItems: "center",
            }}
          >
            <ImgSlot
              className="proj-card-img"
              label={next.title}
              style={{ aspectRatio: "16 / 9" }}
            />
            <div>
              <div className="proj-tag">
                {next.tag} · {next.year}
              </div>
              <div
                className="proj-name"
                style={{ fontSize: 40, marginTop: 8 }}
              >
                {next.title}
              </div>
              <p className="proj-blurb" style={{ marginTop: 12 }}>
                {next.blurb}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
