import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { homeData } from "../../data/homeData";
import { GlowButton } from "../ui/GlowButton";
import { BigTechLogos } from "./BigTechLogos";

/**
 * Exact choreography extracted from COSMOQ's original Framer Hero module:
 * - Video & Frost horizon rises & unzooms from scale 1.1 / y:80 over 1.6s (delay 0.4s)
 * - H1 container scales 0.9->1 & rises y:80->0 over 2.0s (ease [0.16, 1, 0.3, 1])
 *   with line-by-line blur(10px)->0px appear starting at 2.0s (+0.09s stagger)
 * - Subtitle line-by-line blur(10px)->0px appear starting at 2.2s
 * - Primary CTA GlowButton fades in at 2.4s
 * - Top 10 Big Tech monochrome marquee fades in at 2.8s
 * - Analytics Dashboard rises y:40->0 at 3.2s
 */
export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const dashY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const titleLines = homeData.hero.title.split("\n");

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        paddingTop: "176px",
        paddingBottom: "48px",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* Background Cosmic Horizon Video + Frost Layer (exact Bl / Vl entrance) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.001, scale: 1.1, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.6, ease: [0.12, 0.23, 0.5, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "900px",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 45% at 28% 58%, rgba(255, 160, 10, 0.36), transparent 70%), radial-gradient(55% 45% at 72% 58%, rgba(1, 117, 255, 0.42), transparent 70%)",
          }}
        />
        <video
          src={homeData.hero.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
            opacity: 0.94,
          }}
        />
        <motion.div
          initial={{ opacity: 0.001, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.6, ease: [0.12, 0.23, 0.5, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255, 254, 250, 0) 0%, rgba(255, 255, 255, 0.07) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.04) 45%, rgba(0,0,0,0.86) 85%, #000000 100%)",
          }}
        />
      </motion.div>

      {/* Hero Foreground Content */}
      <div
        className="cosmoq-container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Hero H1 Container (Ml -> jl: scale 0.9->1, y 80->0, delay 0.2s, duration 2s) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "840px" }}
        >
          <h1 className="typo-h1" style={{ maxWidth: "840px" }}>
            {titleLines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ filter: "blur(10px)", opacity: 0.001, y: 10 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                  delay: 2.0 + i * 0.09,
                  duration: 1.0,
                  ease: [0.12, 0.23, 0.5, 1],
                }}
                style={{ display: "block" }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle Blur Reveal (Fl: startDelay 2.2s, duration 0.6s) */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0.001, y: 10 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            delay: 2.2,
            duration: 0.6,
            ease: [0.12, 0.23, 0.5, 1],
          }}
          style={{
            margin: "20px 0 32px",
            maxWidth: "600px",
            fontSize: "17px",
            lineHeight: 1.55,
            color: "#d1d4e3",
          }}
        >
          {homeData.hero.subtitle}
        </motion.p>

        {/* Primary CTA (Il: delay 2.4s, duration 0.6s) */}
        <motion.div
          initial={{ opacity: 0.001 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
        >
          <GlowButton label={homeData.hero.ctaLabel} to={homeData.hero.ctaTo} />
        </motion.div>

        {/* Overlapping Analytics Agent Dashboard (Ll: y 40->0, delay 3.2s, duration 0.6s) */}
        <motion.div
          style={{
            y: dashY,
            width: "100%",
            maxWidth: "1100px",
            marginTop: "68px",
            position: "relative",
          }}
          initial={{ opacity: 0.001, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
        >
          {/* Ambient amber-blue luminous halo behind top edge of dashboard */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-34px",
              left: "8%",
              right: "8%",
              height: "140px",
              background:
                "radial-gradient(50% 100% at 32% 50%, rgba(255, 172, 10, 0.28), transparent 72%), radial-gradient(50% 100% at 68% 50%, rgba(1, 117, 255, 0.34), transparent 72%)",
              filter: "blur(32px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 30px 90px rgba(0, 0, 0, 0.85)",
              backgroundColor: "#0a0c12",
            }}
          >
            <img
              src={homeData.hero.dashboardImage}
              alt="FLEXIE Analytics Agent Dashboard"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 58%, rgba(0,0,0,0.92) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </motion.div>

        {/* Top 10 Big Tech Monochrome Marquee (zl: delay 2.8s, duration 0.8s) */}
        <motion.div
          initial={{ opacity: 0.001 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <BigTechLogos />
        </motion.div>
      </div>
    </section>
  );
};
