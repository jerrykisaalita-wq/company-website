import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";
import { SubpageHero } from "../components/ui/SubpageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ScrollColorText } from "../components/ui/ScrollColorText";
import { GlowButton } from "../components/ui/GlowButton";
import { FounderDoodle } from "../components/about/FounderDoodle";
import { StudioShowcaseSection } from "../components/about/StudioShowcaseSection";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SubpageHero
        tag={aboutData.tag}
        tagIcon={aboutData.tagIcon}
        title={aboutData.title}
        subtitle={aboutData.subtitle}
      >
        <div
          style={{
            marginTop: "48px",
            width: "100%",
            maxWidth: "1060px",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <img
            src={aboutData.heroTeamImage}
            alt="FLEXIE Studio Collaboration"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </SubpageHero>

      {/* Scroll-Color Mission Statement */}
      <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container" style={{ maxWidth: "960px" }}>
          <ScrollColorText
            content={aboutData.introStatement}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 38px)",
              lineHeight: 1.38,
              letterSpacing: "-0.02em",
            }}
          />
        </div>
      </section>

      {/* Values Cards */}
      <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag={aboutData.values.tag}
            tagIcon={aboutData.values.tagIcon}
            title={aboutData.values.title}
            subtitle={aboutData.values.subtitle}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: "24px",
            }}
          >
            {aboutData.values.cards.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="cosmoq-card"
                style={{
                  minHeight: "360px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src={c.bg}
                  alt=""
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.8,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h4 className="typo-h4" style={{ marginBottom: "10px" }}>
                    {c.title}
                  </h4>
                  <p
                    className="typo-body-sm"
                    style={{ margin: 0, color: "#d1d4e3" }}
                  >
                    {c.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* From the Founder (with Custom Doodle) */}
      <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag={aboutData.founder.tag}
            tagIcon={aboutData.founder.tagIcon}
            title={aboutData.founder.title}
            subtitle={aboutData.founder.subtitle}
          />

          <div
            className="cosmoq-card founder-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(260px, 0.85fr) minmax(0, 1.15fr)",
              gap: "40px",
              padding: "36px",
              alignItems: "center",
              background:
                "radial-gradient(circle at 20% 80%, rgba(255, 165, 10, 0.14), transparent 55%), radial-gradient(circle at 80% 25%, rgba(1, 117, 255, 0.14), transparent 55%), #07090f",
            }}
          >
            <FounderDoodle />

            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2.2vw, 28px)",
                lineHeight: 1.45,
                color: "#f2f4fa",
              }}
            >
              {aboutData.founder.quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Impressive Studio Engine Showcase (replacing removed Pillars section) */}
      <StudioShowcaseSection />

      {/* Join Us CTA */}
      <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <div
            className="cosmoq-card careers-grid"
            style={{
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={aboutData.careers.tagIcon}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "#9ba9c4",
                  }}
                >
                  {aboutData.careers.tag}
                </span>
              </div>
              <h2
                className="typo-h2"
                style={{ whiteSpace: "pre-line", marginBottom: "18px" }}
              >
                {aboutData.careers.title}
              </h2>
              <p
                className="typo-body"
                style={{ margin: "0 0 28px", color: "#9ba9c4" }}
              >
                {aboutData.careers.description}
              </p>
              <GlowButton
                label={aboutData.careers.ctaLabel}
                to={aboutData.careers.ctaTo}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <img
                src={aboutData.careers.topImage}
                alt="Team Collaboration"
                style={{ borderRadius: "16px", width: "100%", height: "100%", objectFit: "cover" }}
              />
              <img
                src={aboutData.careers.bottomImage}
                alt="Workspace"
                style={{ borderRadius: "16px", width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .founder-grid,
          .careers-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .founder-grid,
          .careers-grid {
            padding: 22px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </>
  );
};
