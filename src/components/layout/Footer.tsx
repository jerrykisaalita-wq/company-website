import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";
import { GlowButton } from "../ui/GlowButton";

export const Footer: React.FC = () => {
  const headingWords = siteConfig.footerCta.heading.split(" ");

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
        paddingTop: "100px",
        paddingBottom: "48px",
      }}
    >
      {/* Pre-Footer Cosmic CTA with Word-by-Word Blur Reveal */}
      <div
        className="cosmoq-container"
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2 className="typo-h2 footer-cta-heading" style={{ maxWidth: "700px" }}>
          {headingWords.map((word, idx) => (
            <motion.span
              key={`${idx}-${word}`}
              className="footer-cta-word"
              initial={{ filter: "blur(10px)", opacity: 0.001, y: 10 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                delay: idx * 0.055,
                duration: 0.6,
                ease: [0.12, 0.23, 0.5, 1],
              }}
              style={{ display: "inline-block", marginRight: "0.26em" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p
          className="typo-body"
          style={{
            margin: 0,
            maxWidth: "460px",
            color: "#9ba9c4",
          }}
        >
          {siteConfig.footerCta.subtext}
        </p>
        <div style={{ marginTop: "8px" }}>
          <GlowButton
            label={siteConfig.footerCta.ctaLabel}
            to={siteConfig.footerCta.ctaTo}
          />
        </div>
      </div>

      {/* Signature Giant Luminous FLEXIE Marquee over Aurora Horizon */}
      <div
        style={{
          position: "relative",
          marginTop: "36px",
          paddingTop: "40px",
          paddingBottom: "40px",
          overflow: "hidden",
        }}
      >
        {/* Aurora Horizon Backdrop */}
        <img
          src={siteConfig.footerCta.bgImage}
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.9,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.15) 75%, #000000 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Giant Scrolling Wordmark Row (Twin-Track Seamless Infinite Scroll + Scroll Scale) */}
        <motion.div
          className="footer-marquee-stage"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
          style={{
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          <div className="footer-marquee" style={{ alignItems: "center" }}>
            {[0, 1].map((trackIdx) => (
              <div
                key={trackIdx}
                data-marquee-track={trackIdx}
                aria-hidden={trackIdx === 1}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={siteConfig.logoSvgPath}
                    alt=""
                    aria-hidden
                    className="footer-marquee-logo"
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 4-Column Footer Links */}
      <div
        className="cosmoq-container"
        style={{
          position: "relative",
          zIndex: 3,
          marginTop: "48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "36px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {siteConfig.footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  margin: "0 0 18px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#ffffff",
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {col.links.map((lnk) => (
                  <li key={lnk.label}>
                    {lnk.external ? (
                      <a
                        href={lnk.to}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "14px",
                          color: "#9ba9c4",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {lnk.label}
                      </a>
                    ) : (
                      <Link
                        to={lnk.to}
                        style={{
                          fontSize: "14px",
                          color: "#9ba9c4",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {lnk.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            paddingTop: "24px",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.48)",
          }}
        >
          <span>{siteConfig.copyrightText}</span>
          <span>{siteConfig.brandTagline}</span>
        </div>
      </div>

      <style>{`
        .footer-marquee-logo {
          height: 112px;
          width: auto;
          flex-shrink: 0;
          margin-right: 96px;
          opacity: 0.92;
          filter: drop-shadow(0 0 32px rgba(255, 255, 255, 0.22));
        }
        @media (max-width: 640px) {
          .footer-marquee-logo {
            height: 56px !important;
            margin-right: 44px !important;
          }
        }
      `}</style>
    </footer>
  );
};
