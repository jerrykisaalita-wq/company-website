import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogData } from "../data/blogData";
import { SubpageHero } from "../components/ui/SubpageHero";

export const BlogPage: React.FC = () => {
  const [featured, ...rest] = blogData.posts;

  return (
    <>
      <SubpageHero
        tag={blogData.tag}
        tagIcon={blogData.tagIcon}
        title={blogData.title}
        subtitle={blogData.subtitle}
      />

      <section style={{ padding: "20px 0 100px", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          {/* Featured Post */}
          <Link to={`/blog/${featured.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.2)" }}
              transition={{ duration: 0.35 }}
              className="cosmoq-card"
              style={{ marginBottom: "32px", overflow: "hidden" }}
            >
              <div style={{ maxHeight: "480px", overflow: "hidden" }}>
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="blog-featured-body" style={{ padding: "28px 32px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#9ba9c4",
                    marginBottom: "10px",
                  }}
                >
                  {featured.date} · {featured.readTime}
                </div>
                <h2 className="typo-h3" style={{ marginBottom: "10px" }}>
                  {featured.title}
                </h2>
                <p
                  className="typo-body"
                  style={{ margin: 0, color: "#9ba9c4", maxWidth: "740px" }}
                >
                  {featured.excerpt}
                </p>
              </div>
            </motion.article>
          </Link>

          {/* Grid of Remaining Posts */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
              gap: "24px",
            }}
          >
            {rest.map((post, idx) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.2)" }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="cosmoq-card"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "210px", overflow: "hidden" }}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      flex: 1,
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#9ba9c4" }}>
                      {post.date} · {post.readTime}
                    </span>
                    <h3 className="typo-h4" style={{ fontSize: "20px" }}>
                      {post.title}
                    </h3>
                    <p
                      className="typo-body-sm"
                      style={{ margin: 0, color: "#9ba9c4" }}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .blog-featured-body {
            padding: 20px !important;
          }
        }
      `}</style>
    </>
  );
};
