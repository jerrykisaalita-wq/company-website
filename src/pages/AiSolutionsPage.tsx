import React from "react";
import { motion } from "framer-motion";
import { solutionsOverviewData } from "../data/solutionsData";
import { SubpageHero } from "../components/ui/SubpageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { GlowButton } from "../components/ui/GlowButton";

export const AiSolutionsPage: React.FC = () => {
  return (
    <>
      <SubpageHero
        tag={solutionsOverviewData.tag}
        tagIcon={solutionsOverviewData.tagIcon}
        title={solutionsOverviewData.title}
        subtitle={solutionsOverviewData.subtitle}
      />

      {/* AI Solutions Section */}
      <section style={{ padding: "20px 0 60px", backgroundColor: "#000000" }}>
        <div
          className="cosmoq-container"
          style={{ display: "flex", flexDirection: "column", gap: "28px" }}
        >
          {solutionsOverviewData.cards.map((card, idx) => (
            <SolutionBannerCard key={card.slug} card={card} idx={idx} />
          ))}
        </div>
      </section>

      {/* Agency Services Section */}
      <section style={{ padding: "60px 0 100px", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag="AGENCY SERVICES"
            tagIcon={solutionsOverviewData.tagIcon}
            title="Design, Engineering & Brand"
            subtitle="Full-spectrum product craft — UI/UX design, mobile apps, custom software, and brand identity."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {solutionsOverviewData.agencyCards.map((card, idx) => (
              <SolutionBannerCard key={card.slug} card={card} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 809px) {
          .solution-overview-row {
            grid-template-columns: 1fr !important;
          }
          .solution-overview-row > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-left: 0 !important;
            padding-top: 24px;
          }
        }
        @media (max-width: 640px) {
          .solution-banner-card {
            padding: 22px !important;
          }
        }
      `}</style>
    </>
  );
};

interface CardShape {
  slug: string;
  title: string;
  description: string;
  banner: string;
  rightTitle: string;
  bullets: string[];
}

const SolutionBannerCard: React.FC<{ card: CardShape; idx: number }> = ({
  card,
  idx,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: idx * 0.05 }}
    className="cosmoq-card solution-banner-card"
    style={{ padding: "36px" }}
  >
    <div
      className="solution-overview-row"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
        gap: "40px",
        alignItems: "center",
        marginBottom: "28px",
      }}
    >
      <div>
        <h2 className="typo-h3" style={{ marginBottom: "12px" }}>
          {card.title}
        </h2>
        <p className="typo-body" style={{ margin: "0 0 24px", color: "#9ba9c4" }}>
          {card.description}
        </p>
        <GlowButton
          label="Learn More"
          to={`/ai-solutions/${card.slug}`}
          size="sm"
        />
      </div>

      <div
        style={{
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          paddingLeft: "32px",
        }}
      >
        <h4
          style={{
            margin: "0 0 16px",
            fontSize: "18px",
            fontWeight: 500,
            color: "#ffffff",
          }}
        >
          {card.rightTitle}
        </h4>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {card.bullets.map((b) => (
            <li
              key={b}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                color: "#9ba9c4",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "2px",
                  backgroundColor: "#0175ff",
                  flexShrink: 0,
                }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <img
        src={card.banner}
        alt={card.title}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  </motion.div>
);
