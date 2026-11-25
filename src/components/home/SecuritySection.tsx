import React, { useEffect, useRef, useState } from "react";
import { motion, MotionStyle, MotionValue, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Radio, Lock } from "lucide-react";
import { homeData } from "../../data/homeData";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const ICONS = [ShieldCheck, Radio, Lock];
const DEPTH_SPREAD: [number, number][] = [
  [-14, 10],
  [-6, 4],
  [4, -6],
  [14, -12],
];

const SecuritySlabLayer: React.FC<{
  src: string;
  idx: number;
  phase: number;
  isDesktop: boolean;
  progress: MotionValue<number>;
}> = ({ src, idx, phase, isDesktop, progress }) => {
  const [fromX, toX] = DEPTH_SPREAD[idx] ?? [0, 0];
  const scrollX = useTransform(progress, [0, 1], [isDesktop ? fromX : 0, isDesktop ? toX : 0]);
  const lit = phase === idx || phase === 4;

  return (
    <motion.img
      src={src}
      alt={`Security layer ${idx + 1}`}
      className="security-slab"
      initial={{ opacity: 0.001, y: 16 }}
      whileInView={{
        opacity: lit ? 1 : 0.62,
        y: 0,
        filter: lit
          ? "brightness(1.72) drop-shadow(0 18px 40px rgba(0, 0, 0, 0.65))"
          : "brightness(1) drop-shadow(0 18px 40px rgba(0, 0, 0, 0.65))",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.12, 0.23, 0.5, 1] }}
      style={
        {
          "--slab-idx": idx,
          x: scrollX,
          zIndex: 4 - idx,
        } as MotionStyle
      }
    />
  );
};

export const SecuritySection: React.FC = () => {
  const sec = homeData.security;
  const isDesktop = useIsDesktop();
  const stageRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => (p + 1) % 5);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        padding: "100px 0",
        backgroundColor: "#000000",
        position: "relative",
        overflow: "clip",
      }}
    >
      <div
        className="cosmoq-container security-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Left Info + 3 Bordered Feature Rows */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "28px",
            }}
          >
            <img
              src={sec.tagIcon}
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
              {sec.tag}
            </span>
          </div>

          <h2 className="typo-h2" style={{ marginBottom: "18px" }}>
            {sec.title}
          </h2>
          <p
            className="typo-body"
            style={{ margin: "0 0 32px", color: "#9ba9c4", maxWidth: "460px" }}
          >
            {sec.subtitle}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {sec.features.map((feat, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                <motion.div
                  key={feat}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.12, 0.23, 0.5, 1] }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255, 255, 255, 0.025)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Icon size={18} style={{ color: "#9ba9c4", flexShrink: 0 }} />
                  <span style={{ fontSize: "15px", color: "#ffffff" }}>
                    {feat}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right 4 Layered Translucent Perspective Glass Slabs over COSMOQ Nebula */}
        <div
          ref={stageRef}
          className="security-slabs-stage"
          style={{
            position: "relative",
            height: "460px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/i8sq3FWUDAbUH2kTIeqGIMeGrwE.webp"
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "165%",
              maxWidth: "none",
              height: "auto",
              opacity: 0.92,
              pointerEvents: "none",
            }}
          />

          <div className="security-slabs-wrap">
            {sec.layers.map((src, idx) => (
              <SecuritySlabLayer
                key={src}
                src={src}
                idx={idx}
                phase={phase}
                isDesktop={isDesktop}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .security-slabs-wrap {
          position: relative;
          width: 100%;
          max-width: 520px;
          height: 420px;
        }
        .security-slab {
          position: absolute;
          top: calc(var(--slab-idx) * 10px);
          left: calc(var(--slab-idx) * 68px);
          width: 240px;
          height: auto;
          filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.65));
          cursor: pointer;
        }
        @media (max-width: 960px) {
          .security-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .security-slabs-stage {
            height: 310px !important;
          }
          .security-slabs-wrap {
            max-width: 288px !important;
            height: 270px !important;
            margin: 0 auto !important;
          }
          .security-slab {
            width: 170px !important;
            left: calc(var(--slab-idx) * 38px) !important;
            top: calc(var(--slab-idx) * 8px) !important;
          }
        }
      `}</style>
    </section>
  );
};
