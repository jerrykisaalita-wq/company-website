import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { homeData } from "../../data/homeData";
import { ScrollColorText } from "../ui/ScrollColorText";
import { CosmicOrb } from "../ui/CosmicOrb";
import { useIsDesktop } from "../../hooks/useIsDesktop";

export const HighlightedSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawOrbY = useTransform(
    scrollYProgress,
    [0, 1],
    [isDesktop ? 36 : 14, isDesktop ? -36 : -14]
  );
  const orbY = useSpring(rawOrbY, { stiffness: 180, damping: 28 });

  const [activeIndex, setActiveIndex] = useState(0);
  const logos = homeData.highlighted.orbLogos;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [logos.length]);

  const current = logos[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="highlighted-section"
      style={{
        padding: "110px 0",
        backgroundColor: "#000000",
        position: "relative",
        overflow: "clip",
      }}
    >
      <div
        className="cosmoq-container highlighted-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.5fr) minmax(240px, 0.8fr)",
          alignItems: "center",
          gap: "56px",
        }}
      >
        {/* Left Scroll-Color Enterprise Statement */}
        <ScrollColorText
          content={homeData.highlighted.statement}
          colorStart="rgba(255, 255, 255, 0.22)"
          colorEnd="#ffffff"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 3.2vw, 42px)",
            fontWeight: 400,
            lineHeight: 1.32,
            letterSpacing: "-0.02em",
          }}
        />

        {/* Right Rotating Plasma Orb with Scroll-Linked Parallax */}
        <motion.div
          className="highlighted-orb-wrap"
          style={{ y: orbY, display: "flex", justifyContent: "center" }}
        >
          <CosmicOrb size={300} texture="plasma">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, scale: 0.86, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.86, y: -8 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <img
                  src={current.src}
                  alt={current.label}
                  style={{
                    width: "84px",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.45))",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </CosmicOrb>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .highlighted-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .highlighted-section {
            padding: 64px 0 !important;
          }
          .highlighted-orb-wrap {
            transform: scale(0.76);
            margin: -24px 0;
          }
        }
      `}</style>
    </section>
  );
};
