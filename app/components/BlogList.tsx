"use client";

import { useMemo, useState } from "react";
import type { Post } from "../lib/posts";
import ArticleRow from "./ArticleRow";

export default function BlogList({ posts }: { posts: Post[] }) {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.tag)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.tag === active);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 32,
          flexWrap: "wrap",
          marginTop: 32,
        }}
      >
        <p className="muted" style={{ fontSize: 17, maxWidth: 540, margin: 0 }}>
          Essays on building software, design systems, and the web — written
          for the version of me who needed them a year ago.
        </p>
        <div className="filter-bar">
          {tags.map((t) => (
            <button
              key={t}
              className={`chip ${active === t ? "active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 56 }}>
        {filtered.map((p) => (
          <ArticleRow key={p.slug} post={p} />
        ))}
        {filtered.length === 0 && (
          <div className="muted" style={{ padding: 64, textAlign: "center" }}>
            No posts in this category yet.
          </div>
        )}
      </div>
    </>
  );
}
