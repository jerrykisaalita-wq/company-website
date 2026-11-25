import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Cpu, Rocket } from "lucide-react";
import { aboutData } from "../../data/aboutData";
import { SectionHeader } from "../ui/SectionHeader";

const STAGE_ICONS = [Sparkles, Layers, Cpu, Rocket];

export const StudioShowcaseSection: React.FC = () => {
  const sc = aboutData.studioShowcase;
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % sc.stages.length);
    }, 4400);
    return () => clearInterval(timer);
  }, [sc.stages.length]);

  const activeStage = sc.stages[activeIdx];
  const ActiveIcon = STAGE_ICONS[activeIdx % STAGE_ICONS.length];

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
      <div className="cosmoq-container">
        <SectionHeader
          tag={sc.tag}
          tagIcon={sc.tagIcon}
          title={sc.title.replace("\n", " ")}
          subtitle={sc.subtitle}
        />

        {/* Top 4 Luminous Telemetry Metrics */}
        <div
          className="showcase-metrics-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "18px",
            marginBottom: "28px",
          }}
        >
          {sc.metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, borderColor: "rgba(1, 117, 255, 0.4)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="cosmoq-card"
              style={{
                padding: "26px 24px",
                background:
                  idx % 2 === 0
                    ? "radial-gradient(circle at 18% 18%, rgba(1, 117, 255, 0.14), transparent 60%), #07090f"
                    : "radial-gradient(circle at 82% 82%, rgba(255, 172, 10, 0.14), transparent 60%), #07090f",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "40px",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                  background:
                    "linear-gradient(120deg, #ffffff 30%, #ffcd7d 70%, #4298ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: "14px", color: "#9ba9c4" }}>{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive 4-Stage Orbital Delivery Blueprint */}
        <div
          className="cosmoq-card showcase-blueprint-grid"
          style={{
            padding: "36px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: "40px",
            alignItems: "center",
            background:
              "radial-gradient(circle at 76% 48%, rgba(1, 117, 255, 0.18), transparent 52%), radial-gradient(circle at 52% 82%, rgba(255, 172, 10, 0.14), transparent 50%), #06080f",
          }}
        >
          {/* Left Interactive Stage Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {sc.stages.map((st, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    position: "relative",
                    textAlign: "left",
                    padding: "18px 20px",
                    borderRadius: "16px",
                    border: isActive
                      ? "1px solid rgba(255, 255, 255, 0.24)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.06)"
                      : "rgba(255, 255, 255, 0.02)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: isActive ? "8px" : 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: isActive ? st.accent : "#9ba9c4",
                      }}
                    >
                      {st.step}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "19px",
                        fontWeight: 500,
                        color: isActive ? "#ffffff" : "#9ba9c4",
                      }}
                    >
                      {st.title}
                    </span>
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        lineHeight: 1.55,
                        color: "#d1d4e3",
                      }}
                    >
                      {st.summary}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Animated Orbital Visualization */}
          <div
            style={{
              position: "relative",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            {/* Rotating Dashed Orbit Ring */}
            <motion.div
              className="showcase-orbit-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: "290px",
                height: "290px",
                borderRadius: "50%",
                border: "1px dashed rgba(255, 255, 255, 0.16)",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "50%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ffac0a",
                  boxShadow: "0 0 14px #ffac0a",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "50%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#0175ff",
                  boxShadow: "0 0 14px #0175ff",
                }}
              />
            </motion.div>

            {/* Center Luminous Stage Core */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "18px",
                  maxWidth: "300px",
                }}
              >
                <div
                  className="luminous-tile"
                  style={{ width: "74px", height: "74px", borderRadius: "20px" }}
                >
                  <div
                    className="luminous-tile-inner"
                    style={{ borderRadius: "19px" }}
                  >
                    <ActiveIcon size={30} style={{ color: "#ffffff" }} />
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      color: activeStage.accent,
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    Phase {activeStage.step}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#ffffff",
                    }}
                  >
                    {activeStage.title}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {activeStage.deliverables.map((del) => (
                    <span
                      key={del}
                      style={{
                        padding: "7px 14px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(255, 255, 255, 0.07)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                        fontSize: "12.5px",
                        color: "#ffffff",
                      }}
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .showcase-metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .showcase-blueprint-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .showcase-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .showcase-blueprint-grid {
            padding: 22px !important;
            gap: 24px !important;
          }
          .showcase-orbit-ring {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
};
