import Link from "next/link";
import type { Project } from "../lib/site";
import ImgSlot from "./ImgSlot";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="proj-card">
      <ImgSlot
        className="proj-card-img"
        label={`${project.title} · ${project.year}`}
      />
      <div>
        <div className="proj-card-head">
          <div className="proj-name">{project.title}</div>
          <div className="proj-tag">
            {project.tag} · {project.year}
          </div>
        </div>
        <p className="proj-blurb" style={{ marginTop: 10 }}>
          {project.blurb}
        </p>
        <div className="stack-row" style={{ marginTop: 16 }}>
          {project.stack.map((s) => (
            <span key={s} className="stack-chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
