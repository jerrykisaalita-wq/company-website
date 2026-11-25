import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { legalData } from "../data/legalData";
import { SubpageHero } from "../components/ui/SubpageHero";

export const LegalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? legalData[slug] : undefined;

  if (!doc) {
    return <Navigate to="/privacy-policy/privacy-policy" replace />;
  }

  return (
    <>
      <SubpageHero
        tag={doc.tag}
        tagIcon="/assets/GzZ7ms2j5l77qoWJRyXb8SoGZ0s.svg"
        title={doc.title}
        subtitle={doc.subtitle}
      />

      <section style={{ padding: "20px 0 100px", backgroundColor: "#000000" }}>
        <div className="cosmoq-container" style={{ maxWidth: "860px" }}>
          <div className="cosmoq-card legal-doc-card" style={{ padding: "40px" }}>
            <div
              style={{
                fontSize: "14px",
                color: "#9ba9c4",
                marginBottom: "18px",
              }}
            >
              {doc.effectiveDate}
            </div>
            <p
              className="typo-body"
              style={{ marginBottom: "32px", color: "#e6eaf5" }}
            >
              {doc.preamble}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {doc.sections.map((sec) => (
                <div key={sec.title}>
                  <h2
                    className="typo-h4"
                    style={{ marginBottom: "10px", fontSize: "20px" }}
                  >
                    {sec.title}
                  </h2>
                  {sec.intro && (
                    <p
                      className="typo-body-sm"
                      style={{ marginBottom: "10px", color: "#9ba9c4" }}
                    >
                      {sec.intro}
                    </p>
                  )}
                  {sec.bullets && (
                    <ul
                      style={{
                        margin: "8px 0 12px",
                        paddingLeft: "20px",
                        color: "#d1d4e3",
                        fontSize: "14px",
                        lineHeight: 1.7,
                      }}
                    >
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {sec.outro && (
                    <p
                      className="typo-body-sm"
                      style={{ margin: 0, color: "#9ba9c4" }}
                    >
                      {sec.outro}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .legal-doc-card {
            padding: 22px !important;
          }
        }
      `}</style>
    </>
  );
};
