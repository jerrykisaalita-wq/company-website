import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { blogData } from "../data/blogData";

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogData.posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article
      style={{
        paddingTop: "140px",
        paddingBottom: "90px",
        backgroundColor: "#000000",
      }}
    >
      <div className="cosmoq-container" style={{ maxWidth: "860px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            color: "#9ba9c4",
            marginBottom: "18px",
          }}
        >
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="typo-h2" style={{ marginBottom: "24px" }}>
          {post.title}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <img
            src={post.authorAvatar}
            alt={post.author}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span style={{ fontSize: "15px", color: "#ffffff" }}>
            {post.author}
          </span>
        </div>

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginBottom: "40px",
          }}
        >
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Intro */}
        <h3 className="typo-h4" style={{ marginBottom: "14px" }}>
          Introduction
        </h3>
        {post.intro.map((p, i) => (
          <p
            key={i}
            className="typo-body"
            style={{ marginBottom: "18px", color: "#d1d4e3" }}
          >
            {p}
          </p>
        ))}

        {/* Body Sections */}
        {post.sections.map((sec) => (
          <div key={sec.heading} style={{ marginTop: "32px" }}>
            <h4 className="typo-h4" style={{ marginBottom: "12px" }}>
              {sec.heading}
            </h4>
            {sec.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="typo-body"
                style={{ marginBottom: "14px", color: "#d1d4e3" }}
              >
                {p}
              </p>
            ))}
            {sec.bullets && (
              <ul
                style={{
                  margin: "12px 0 16px",
                  paddingLeft: "22px",
                  color: "#9ba9c4",
                  lineHeight: 1.7,
                }}
              >
                {sec.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {sec.closing && (
              <p className="typo-body" style={{ color: "#d1d4e3" }}>
                {sec.closing}
              </p>
            )}
          </div>
        ))}

        {/* Related Blogs */}
        <div
          style={{
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 className="typo-h3" style={{ marginBottom: "24px" }}>
            More Blogs for You
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "20px",
            }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="cosmoq-card"
                style={{ padding: "16px", display: "block" }}
              >
                <img
                  src={r.coverImage}
                  alt={r.title}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "14px",
                  }}
                />
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: "6px",
                  }}
                >
                  {r.title}
                </div>
                <div style={{ fontSize: "12px", color: "#9ba9c4" }}>
                  {r.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
