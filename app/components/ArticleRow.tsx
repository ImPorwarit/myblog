import Link from "next/link";
import { formatDate, type Post } from "../lib/posts";

export default function ArticleRow({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="article-row">
      <div className="article-num">{post.number}</div>
      <div>
        <div className="article-title">{post.title}</div>
        <div className="article-excerpt">{post.excerpt}</div>
      </div>
      <div className="article-meta">
        <div>{formatDate(post.date)}</div>
        <div style={{ marginTop: 4 }}>{post.tag}</div>
      </div>
      <div className="article-read">
        read
        <br />
        {post.readTime}
      </div>
    </Link>
  );
}
