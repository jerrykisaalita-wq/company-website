import React from "react";
import { motion } from "framer-motion";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";
import { GlowButton, SecondaryPillButton } from "../ui/GlowButton";

const SPEED_SPARKS = [
  { d: "M 0 199 L 577.5 95.5", color: "#0175ff", dash: "28 580", from: 608, to: 0, duration: 3.1 },
  { d: "M 0 199 L 577.5 419", color: "#ffac0a", dash: "26 620", from: 0, to: 646, duration: 3.8 },
  { d: "M 119 461.5 L 428 0", color: "#0175ff", dash: "22 520", from: 542, to: 0, duration: 2.7 },
  { d: "M 222 0 L 577.5 162.5", color: "#ffac0a", dash: "20 420", from: 440, to: 0, duration: 2.4 },
];

export const ExceptionalitiesSection: React.FC = () => {
  const ex = homeData.exceptionalities;

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
      <div className="cosmoq-container">
        <SectionHeader
          tag={ex.tag}
          tagIcon={ex.tagIcon}
          title={ex.title}
          subtitle={ex.subtitle}
        />

        {/* Top Row: 2 Wide Cards (Speed + Deep Capabilities) */}
        <div
          className="bento-top-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Card 1: Speed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.12, 0.23, 0.5, 1] }}
            className="cosmoq-card"
            style={{
              minHeight: "430px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "24px",
            }}
          >
            {/* Textured COSMOQ Vortex Pattern Backdrop */}
            <img
              src={ex.speed.patternBg}
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(1.33)",
                pointerEvents: "none",
              }}
            />

            {/* Diagonal Network SVG + Dual-Layer Blurred & Crisp Shooting Sparks */}
            <svg
              viewBox="0 0 578 462"
              fill="none"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.92,
                pointerEvents: "none",
              }}
            >
              <defs>
                <filter id="speed-spark-blur" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
              </defs>
              <path
                d="M 0 144 L 222 0 L 577.5 162.5 L 325.5 461.5 L 0 245 L 119 0 L 577.5 95.5 L 0 199 L 577.5 419 L 69.5 0 L 119 461.5 L 428 0 L 487.5 461.5"
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="1"
              />
              {SPEED_SPARKS.map((sp, i) => (
                <g key={i}>
                  <motion.path
                    d={sp.d}
                    stroke={sp.color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={sp.dash}
                    filter="url(#speed-spark-blur)"
                    animate={{ strokeDashoffset: [sp.from, sp.to] }}
                    transition={{ duration: sp.duration, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d={sp.d}
                    stroke="#ffffff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray={sp.dash}
                    animate={{ strokeDashoffset: [sp.from, sp.to] }}
                    transition={{ duration: sp.duration, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              ))}
            </svg>

            {/* Bottom Inner Glass Card */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "22px",
                borderRadius: "16px",
                backgroundColor: "rgba(8, 10, 16, 0.72)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <h4 className="typo-h4" style={{ marginBottom: "8px" }}>
                {ex.speed.title}
              </h4>
              <p className="typo-body-sm" style={{ margin: 0, color: "#9ba9c4" }}>
                {ex.speed.description}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Deep Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.12, 0.23, 0.5, 1] }}
            className="cosmoq-card"
            style={{
              minHeight: "430px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "24px",
            }}
          >
            {/* Textured COSMOQ Amber + Blue Grainy Glow Backdrop */}
            <img
              src={ex.deepCapabilities.patternBg}
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(1.33)",
                pointerEvents: "none",
              }}
            />
            <img
              src="/assets/deep-brain.svg"
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                top: "32px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "256px",
                height: "auto",
                opacity: 0.96,
                pointerEvents: "none",
              }}
            />
            {/* Pulsing Blur(5px) Halo + Crisp Core Shine Dots */}
            {[
              { top: "24%", left: "34%", delay: 0, glow: "rgba(255, 205, 125, 0.95)" },
              { top: "38%", left: "48%", delay: 0.7, glow: "rgba(1, 117, 255, 0.95)" },
              { top: "22%", left: "62%", delay: 1.4, glow: "rgba(1, 117, 255, 0.95)" },
              { top: "48%", left: "58%", delay: 2.0, glow: "rgba(255, 172, 10, 0.95)" },
            ].map((dot, idx) => (
              <motion.div
                key={idx}
                animate={{
                  scale: [0.82, 1.42, 0.82],
                  opacity: [0.48, 1, 0.48],
                }}
                transition={{
                  duration: 2.3,
                  delay: dot.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: dot.top,
                  left: dot.left,
                  width: "19px",
                  height: "19px",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: dot.glow,
                    filter: "blur(5px)",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                  }}
                />
              </motion.div>
            ))}

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "22px",
                borderRadius: "16px",
                backgroundColor: "rgba(8, 10, 16, 0.72)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <h4 className="typo-h4" style={{ marginBottom: "8px" }}>
                {ex.deepCapabilities.title}
              </h4>
              <p className="typo-body-sm" style={{ margin: 0, color: "#9ba9c4" }}>
                {ex.deepCapabilities.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 3 Cards (Control + Flexibility + Ready to get started?) */}
        <div
          className="bento-bottom-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          {/* Card 3: Control (3 oscillating sliders with COSMOQ blur(4px) gradient orb halo) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.12, 0.23, 0.5, 1] }}
            className="cosmoq-card"
            style={{
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "22px",
            }}
          >
            <img
              src={ex.control.patternBg}
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(1.33)",
                pointerEvents: "none",
              }}
            />

            {/* 3 Vertical Animated Sliders */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "42px",
                padding: "20px 0 28px",
              }}
            >
              {[
                { from: 22, to: 108, duration: 3.6, delay: 0 },
                { from: 122, to: 32, duration: 4.2, delay: 0.5 },
                { from: 42, to: 118, duration: 3.9, delay: 1.1 },
              ].map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    width: "24px",
                    height: "196px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    display: "flex",
                    justifyContent: "center",
                    padding: "8px 0",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "100%",
                      borderRadius: "4px",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.22) 100%)",
                      boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                  {/* COSMOQ 37x37 Gradient Blur(4px) Glow Orb + Crisp White Core */}
                  <motion.div
                    animate={{ y: [s.from, s.to, s.from] }}
                    transition={{
                      duration: s.duration,
                      delay: s.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      width: "37px",
                      height: "37px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(180deg, rgb(0, 117, 255) 0%, rgb(255, 172, 8) 100%)",
                        filter: "blur(4px)",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle at 35% 35%, #ffffff 0%, #ffcd7d 55%, #0175ff 100%)",
                        boxShadow: "0 0 12px rgba(255, 255, 255, 0.85)",
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px",
                borderRadius: "16px",
                backgroundColor: "rgba(8, 10, 16, 0.72)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <h4 className="typo-h4" style={{ marginBottom: "8px" }}>
                {ex.control.title}
              </h4>
              <p className="typo-body-sm" style={{ margin: 0, color: "#9ba9c4" }}>
                {ex.control.description}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Flexibility (counter-scrolling icon rows over grainy diagonal glow) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.12, 0.23, 0.5, 1] }}
            className="cosmoq-card"
            style={{
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "22px",
            }}
          >
            <img
              src={ex.flexibility.patternBg}
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(1.33)",
                pointerEvents: "none",
              }}
            />

            {/* Two counter-scrolling rows of frosted app icons */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
                overflow: "hidden",
                margin: "0 -22px 16px",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <div className="animate-marquee">
                {[0, 1].map((trackIdx) => (
                  <div
                    key={trackIdx}
                    aria-hidden={trackIdx === 1}
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                  >
                    {[...ex.flexibility.row1Icons, ...ex.flexibility.row1Icons].map(
                      (src, idx) => (
                        <div
                          key={`${trackIdx}-${idx}`}
                          style={{
                            width: "70px",
                            height: "70px",
                            marginRight: "14px",
                            borderRadius: "16px",
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                            border: "1px solid rgba(255, 255, 255, 0.16)",
                            backdropFilter: "blur(8px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={src}
                            alt=""
                            style={{ width: "34px", height: "34px", objectFit: "contain" }}
                          />
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>

              <div className="animate-marquee-reverse">
                {[0, 1].map((trackIdx) => (
                  <div
                    key={trackIdx}
                    aria-hidden={trackIdx === 1}
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                  >
                    {[...ex.flexibility.row2Icons, ...ex.flexibility.row2Icons].map(
                      (src, idx) => (
                        <div
                          key={`${trackIdx}-${idx}`}
                          style={{
                            width: "70px",
                            height: "70px",
                            marginRight: "14px",
                            borderRadius: "16px",
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                            border: "1px solid rgba(255, 255, 255, 0.16)",
                            backdropFilter: "blur(8px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={src}
                            alt=""
                            style={{ width: "34px", height: "34px", objectFit: "contain" }}
                          />
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px",
                borderRadius: "16px",
                backgroundColor: "rgba(8, 10, 16, 0.72)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <h4 className="typo-h4" style={{ marginBottom: "8px" }}>
                {ex.flexibility.title}
              </h4>
              <p className="typo-body-sm" style={{ margin: 0, color: "#9ba9c4" }}>
                {ex.flexibility.description}
              </p>
            </div>
          </motion.div>

          {/* Card 5: Ready to get started? */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.12, 0.23, 0.5, 1] }}
            className="cosmoq-card"
            style={{
              minHeight: "440px",
              padding: "32px 26px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background:
                "radial-gradient(circle at 80% 18%, rgba(1, 117, 255, 0.1), transparent 55%), #06070a",
            }}
          >
            <div>
              <h3 className="typo-h3" style={{ marginBottom: "14px" }}>
                {ex.ctaCard.title}
              </h3>
              <p className="typo-body" style={{ margin: 0, color: "#9ba9c4" }}>
                {ex.ctaCard.description}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <GlowButton
                label={ex.ctaCard.primaryLabel}
                to={ex.ctaCard.primaryTo}
                fullWidth
              />
              <SecondaryPillButton
                prefix={ex.ctaCard.secondaryLabel}
                accent={ex.ctaCard.secondaryAccent}
                to={ex.ctaCard.secondaryTo}
                accentColor="#ffac0a"
                fullWidth
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-top-grid,
          .bento-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
