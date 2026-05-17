import type { Metadata } from "next";
import { sortedPosts } from "../lib/posts";
import BlogList from "../components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays on building software, design systems, and the web.",
};

export default function BlogPage() {
  const posts = sortedPosts();

  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">The archive</div>
          <h1>
            Every <em>essay</em>
            <br />
            I&apos;ve written
          </h1>
          <BlogList posts={posts} />
        </div>
      </section>
    </div>
  );
}
