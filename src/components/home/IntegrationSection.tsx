import React from "react";
import { motion } from "framer-motion";
import { homeData } from "../../data/homeData";
import { GlowButton } from "../ui/GlowButton";

const TILE_DELAYS = [0, 0.08, 0.16, 0.1, 0.18, 0.24];

export const IntegrationSection: React.FC = () => {
  const integ = homeData.integration;

  return (
    <section
      style={{
        position: "relative",
        padding: "96px 0",
        backgroundColor: "#000000",
        overflow: "clip",
      }}
    >
      {/* Full-Width Central Golden Horizon Light Flare with COSMOQ eu->tu Bloom on Scroll */}
      <motion.img
        src={integ.horizonImage}
        alt=""
        aria-hidden
        initial={{ opacity: 0, scale: 0.94, y: 60 }}
        whileInView={{ opacity: 0.94, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.08 }}
        transition={{ delay: 0.15, duration: 0.95, ease: [0.12, 0.23, 0.5, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maskImage:
            "linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="cosmoq-container integration-split-card"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Left Copy */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              marginBottom: "28px",
              maxWidth: "420px",
            }}
          >
            <img
              src={integ.tagIcon}
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "#9ba9c4",
              }}
            >
              {integ.tag}
            </span>
          </div>

          <h2
            className="typo-h2"
            style={{ whiteSpace: "pre-line", marginBottom: "18px" }}
          >
            {integ.title}
          </h2>

          <p
            className="typo-body"
            style={{
              margin: "0 0 28px",
              color: "#9ba9c4",
              maxWidth: "380px",
            }}
          >
            {integ.subtitle}
          </p>

          <GlowButton label={integ.ctaLabel} to={integ.ctaTo} size="sm" />
        </div>

        {/* Right 2x3 Luminous 40deg Golden-Blue Tiles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(84px, 112px))",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {integ.tiles.map((tile, idx) => (
            <motion.div
              key={tile.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.05 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.45,
                delay: TILE_DELAYS[idx] ?? idx * 0.06,
              }}
              className="luminous-tile"
              style={{ aspectRatio: "1 / 1" }}
            >
              <div className="luminous-tile-inner">
                <img
                  src={tile.icon}
                  alt={tile.name}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .integration-split-card {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
