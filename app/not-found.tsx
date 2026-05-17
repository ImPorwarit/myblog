import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="eyebrow">Error 404</div>
        <h1>
          This page
          <br />
          <em>wandered off</em>
        </h1>
        <p
          className="muted"
          style={{ fontSize: 17, maxWidth: 460, margin: "24px 0 32px" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <Link className="btn" href="/">
          Back home →
        </Link>
      </div>
    </section>
  );
}
