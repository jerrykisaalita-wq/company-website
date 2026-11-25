import React from "react";
import { motion } from "framer-motion";
import { changelogData } from "../data/changelogData";
import { SubpageHero } from "../components/ui/SubpageHero";

export const ChangelogPage: React.FC = () => {
  return (
    <>
      <SubpageHero
        tag={changelogData.tag}
        tagIcon={changelogData.tagIcon}
        title={changelogData.title}
        subtitle={changelogData.subtitle}
      />

      <section style={{ padding: "20px 0 100px", backgroundColor: "#000000" }}>
        <div
          className="cosmoq-container"
          style={{ display: "flex", flexDirection: "column", gap: "64px" }}
        >
          {changelogData.entries.map((entry, idx) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="changelog-row"
              style={{
                display: "grid",
                gridTemplateColumns: "180px minmax(0, 1fr)",
                gap: "40px",
                alignItems: "start",
                paddingBottom: "56px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Left Version Pill */}
              <div
                className="changelog-version-pill"
                style={{
                  position: "sticky",
                  top: "120px",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  backgroundColor: "#090c13",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: "4px",
                  }}
                >
                  {entry.date}
                </div>
                <div style={{ fontSize: "13px", color: "#9ba9c4" }}>
                  {entry.version}
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="typo-h3" style={{ marginBottom: "14px" }}>
                  {entry.title}
                </h2>
                <p
                  className="typo-body"
                  style={{ margin: "0 0 28px", color: "#9ba9c4" }}
                >
                  {entry.summary}
                </p>

                <div
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    marginBottom: "28px",
                  }}
                >
                  <img
                    src={entry.image}
                    alt={entry.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <h4
                  style={{
                    margin: "0 0 12px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#ffffff",
                  }}
                >
                  Feature list
                </h4>
                <ul
                  style={{
                    margin: "0 0 24px",
                    paddingLeft: "20px",
                    color: "#d1d4e3",
                    lineHeight: 1.7,
                  }}
                >
                  {entry.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                {entry.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="typo-body"
                    style={{ marginBottom: "16px", color: "#9ba9c4" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 809px) {
          .changelog-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .changelog-version-pill {
            position: relative !important;
            top: auto !important;
            width: fit-content;
          }
        }
      `}</style>
    </>
  );
};
