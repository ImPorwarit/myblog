import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, sortedPosts, formatDate } from "../../lib/posts";
import ImgSlot from "../../components/ImgSlot";
import ReadingProgress from "../../components/ReadingProgress";
import ArticleRow from "../../components/ArticleRow";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: [post.tag],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const ordered = sortedPosts();
  const idx = ordered.findIndex((p) => p.slug === post.slug);
  const next = ordered[(idx + 1) % ordered.length];

  return (
    <div className="page-enter">
      <ReadingProgress />
      <article className="article-detail">
        <div className="container-tight">
          <Link href="/blog" className="back-link">
            ← Back to all essays
          </Link>
          <header className="article-header">
            <div className="article-header-meta">
              <span>{post.number}</span>
              <span>{post.tag}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} read</span>
            </div>
            <h1>{post.title}</h1>
            <p
              style={{
                fontSize: 19,
                color: "var(--ink-soft)",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: 600,
              }}
            >
              {post.excerpt}
            </p>
          </header>
        </div>

        <div className="container-tight">
          <ImgSlot className="hero-image" label={post.tag} />
        </div>

        <div className="container-tight">
          <div className="prose">
            {post.body.map((block, i) => {
              if (block.kind === "lede")
                return (
                  <p key={i} className="lede">
                    {block.text}
                  </p>
                );
              if (block.kind === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.kind === "pull")
                return (
                  <div key={i} className="pull">
                    &ldquo;{block.text}&rdquo;
                  </div>
                );
              if (block.kind === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>

        <div
          className="container"
          style={{
            marginTop: 96,
            paddingTop: 48,
            borderTop: "1px solid var(--rule-soft)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Read next
          </div>
          <ArticleRow post={next} />
        </div>
      </article>
    </div>
  );
}
