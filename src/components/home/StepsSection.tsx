import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, HeartHandshake } from "lucide-react";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";
import { CosmicOrb } from "../ui/CosmicOrb";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const StepOneVisual: React.FC = () => {
  const fullEmail = "hello@flexie.ai";
  const [typed, setTyped] = useState("hello@flexie");

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let pause = 0;
    const id = setInterval(() => {
      if (!deleting) {
        i++;
        setTyped(fullEmail.slice(0, i));
        if (i >= fullEmail.length) {
          pause++;
          if (pause > 16) {
            deleting = true;
            pause = 0;
          }
        }
      } else {
        i--;
        setTyped(fullEmail.slice(0, Math.max(0, i)));
        if (i <= 0) deleting = false;
      }
    }, 95);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="step-visual-panel"
      style={{
        position: "relative",
        minHeight: "420px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        padding: "36px 28px",
        overflow: "hidden",
      }}
    >
      <img
        src="/assets/4ABnXaFshXBVkaMyEU2NjeeqE.webp"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(1.35)",
          maskImage:
            "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.92) 72%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.92) 72%, rgba(0, 0, 0, 0) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <CosmicOrb size={172} texture="globe" animateFloat={false}>
          <img
            src="/assets/flexie-logo.svg"
            alt="FLEXIE"
            style={{
              width: "106px",
              height: "auto",
              filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.45))",
            }}
          />
        </CosmicOrb>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.28)",
            backdropFilter: "blur(12px)",
            fontSize: "14px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>{typed}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            style={{ color: "#ffac0a", marginLeft: "1px" }}
          >
            |
          </motion.span>
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(12px)",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Password
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#06070a",
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.48)",
          }}
        >
          Request Demo
        </div>
      </div>
    </div>
  );
};

const AGENTS_LIST = [
  { label: "HR Agent", offset: 36 },
  { label: "Healthcare Agent", offset: 16 },
  { label: "Banking Agent", offset: 0, active: true },
  { label: "Sales Agent", offset: 18 },
  { label: "Insurance Agent", offset: 38 },
];

const StepTwoVisual: React.FC = () => {
  return (
    <div
      className="step-visual-panel"
      style={{
        position: "relative",
        minHeight: "420px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 24px",
        overflow: "hidden",
      }}
    >
      <img
        src="/assets/UoZeXgrLVIo07yWMmdM4MO8F0.webp"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(1.35)",
          maskImage:
            "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.92) 72%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.92) 72%, rgba(0, 0, 0, 0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Large Right-Peeking Rotating Cosmic FLEXIE Orb */}
      <div
        aria-hidden
        className="step2-orb-wrap"
        style={{
          position: "absolute",
          right: "-65px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <CosmicOrb size={310} texture="globe" animateFloat={false}>
          <img
            src="/assets/flexie-logo.svg"
            alt=""
            style={{
              width: "178px",
              height: "auto",
              opacity: 0.95,
              filter: "drop-shadow(0 0 24px rgba(255, 205, 125, 0.42))",
            }}
          />
        </CosmicOrb>
      </div>

      {/* Staggered Agent Pills + Glowing Activate Node */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "430px",
        }}
      >
        {AGENTS_LIST.map((ag) => (
          <div
            key={ag.label}
            className="step2-agent-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "10px",
              transform: `translateX(${ag.offset - 28}px)`,
            }}
          >
            {ag.active && (
              <>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "9px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(10, 13, 20, 0.88)",
                    border: "1px solid rgba(255, 255, 255, 0.24)",
                    backdropFilter: "blur(12px)",
                    fontSize: "13px",
                    color: "#ffffff",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.16)",
                  }}
                >
                  <span>Activate</span>
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 0 12px #ffffff",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "16px",
                    borderTop: "1px dashed rgba(255,255,255,0.45)",
                  }}
                />
              </>
            )}

            <div
              className="step2-agent-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                minWidth: "178px",
                borderRadius: "10px",
                backgroundColor: ag.active
                  ? "rgba(255, 255, 255, 0.14)"
                  : "rgba(255, 255, 255, 0.08)",
                border: ag.active
                  ? "1px solid rgba(255, 255, 255, 0.38)"
                  : "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                fontSize: "13px",
                color: "#ffffff",
              }}
            >
              <HeartHandshake size={15} style={{ opacity: 0.85 }} />
              <span>{ag.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface StepStackCardProps {
  st: (typeof homeData.steps.items)[number];
  idx: number;
  slotRef: React.RefObject<HTMLDivElement | null>;
  nextSlotRef: React.RefObject<HTMLDivElement | null> | null;
  fallbackRef: React.RefObject<HTMLDivElement | null>;
  isDesktop: boolean;
}

const StepStackCard: React.FC<StepStackCardProps> = ({
  st,
  idx,
  slotRef,
  nextSlotRef,
  fallbackRef,
  isDesktop,
}) => {
  const { scrollYProgress } = useScroll({
    target: nextSlotRef ?? fallbackRef,
    offset: idx === 0 ? ["start end", "start 220px"] : ["start end", "start 240px"],
  });

  const targetScale = idx === 0 ? 0.94 : idx === 1 ? 0.96 : 1;
  const maxDim = idx === 0 ? 0.22 : idx === 1 ? 0.15 : 0;

  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isDesktop && nextSlotRef ? targetScale : 1]
  );
  const scale = useSpring(rawScale, { stiffness: 320, damping: 42 });
  const dimOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isDesktop && nextSlotRef ? maxDim : 0]
  );

  return (
    <div
      ref={slotRef}
      className={`step-sticky-slot step-sticky-slot-${idx}`}
      data-step-slot={idx}
    >
      <motion.div
        data-step-card={idx}
        className="cosmoq-card step-card-grid step-card-inner"
        style={{
          scale: isDesktop ? scale : 1,
          transformOrigin: "center top",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
          gap: "12px",
          alignItems: "stretch",
          minHeight: "430px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 -14px 42px rgba(0, 0, 0, 0.85)",
          background:
            "radial-gradient(circle at 82% 45%, rgba(255, 165, 10, 0.14), transparent 52%), radial-gradient(circle at 60% 60%, rgba(1, 117, 255, 0.12), transparent 54%), #07090f",
        }}
      >
        {/* Subtle depth overlay when the next sticky card slides on top */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000000",
            opacity: dimOpacity,
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Left Copy */}
        <div className="step-left-copy" style={{ padding: "44px 28px 44px 44px" }}>
          <h3 className="typo-h3" style={{ marginBottom: "14px" }}>
            {st.title}
          </h3>
          <p
            className="typo-body"
            style={{ margin: "0 0 28px", color: "#9ba9c4" }}
          >
            {st.description}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {st.points.map((pt) => (
              <div
                key={pt}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "13px 16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <CheckCircle2
                  size={18}
                  style={{ color: "#ffac0a", flexShrink: 0 }}
                />
                <span style={{ fontSize: "14px", color: "#e6eaf5" }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Full-Bleed Atmospheric Visual */}
        {idx === 0 && <StepOneVisual />}
        {idx === 1 && <StepTwoVisual />}
        {idx === 2 && (
          <div
            className="step-visual-panel"
            style={{
              position: "relative",
              minHeight: "420px",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={st.image}
              alt={st.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "right center",
                filter: "brightness(1.45)",
                maskImage:
                  "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.94) 72%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.94) 72%, rgba(0, 0, 0, 0) 100%)",
                display: "block",
              }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const StepsSection: React.FC = () => {
  const steps = homeData.steps;
  const isDesktop = useIsDesktop();
  const stackRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const slotRefs = useMemo(
    () => steps.items.map(() => React.createRef<HTMLDivElement>()),
    [steps.items]
  );

  const { scrollYProgress: stackProgress } = useScroll({
    target: stackRef,
    offset: ["start 0.65", "end 0.85"],
  });
  const beamScaleX = useSpring(
    useTransform(stackProgress, [0, 1], [0.06, 1]),
    { stiffness: 260, damping: 34 }
  );

  useEffect(() => {
    const unsub = stackProgress.on("change", (v) => {
      if (v >= 0.66) setActiveStep(2);
      else if (v >= 0.33) setActiveStep(1);
      else setActiveStep(0);
    });
    return () => unsub();
  }, [stackProgress]);

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#000000",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div className="cosmoq-container" style={{ overflow: "visible" }}>
        <SectionHeader
          tag={steps.tag}
          tagIcon={steps.tagIcon}
          title={steps.title}
          subtitle={steps.subtitle}
        />

        <div ref={stackRef} style={{ position: "relative" }}>
          {/* Sticky 01. 02. 03. Header + Continuous Scroll-Scrubbed Progress Beam */}
          <div
            className="steps-sticky-header"
            style={{
              background:
                "linear-gradient(180deg, #000000 72%, rgba(0, 0, 0, 0) 100%)",
              padding: "14px 0 18px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                marginBottom: "10px",
              }}
            >
              {steps.items.map((st, idx) => {
                const active = activeStep >= idx;
                return (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => {
                      setActiveStep(idx);
                      slotRefs[idx]?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "6px 0",
                      textAlign: "left",
                      cursor: "pointer",
                      color: active ? "#ffffff" : "rgba(255, 255, 255, 0.45)",
                      fontSize: "15px",
                      fontWeight: active ? 500 : 400,
                      transition: "color 0.25s ease",
                    }}
                  >
                    {st.num}
                  </button>
                );
              })}
            </div>

            {/* Full-width continuous amber-to-blue beam (matches COSMOQ framer-12vbwb0) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "2px",
                backgroundColor: "rgba(125, 164, 255, 0.16)",
                overflow: "hidden",
                borderRadius: "999px",
              }}
            >
              <motion.div
                data-steps-beam
                style={{
                  width: "100%",
                  height: "100%",
                  transformOrigin: "left center",
                  scaleX: isDesktop ? beamScaleX : (activeStep + 1) / 3,
                  background: "linear-gradient(90deg, #ffac0a 0%, #0175ff 100%)",
                  boxShadow: "0 0 12px rgba(1, 117, 255, 0.85)",
                }}
              />
            </div>
          </div>

          {/* Sticky Stacking Cards on Desktop (>= 961px) / Clean Stack on Mobile */}
          <div
            ref={fallbackRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "48px",
              paddingBottom: "32px",
            }}
          >
            {steps.items.map((st, idx) => (
              <StepStackCard
                key={st.num}
                st={st}
                idx={idx}
                slotRef={slotRefs[idx]}
                nextSlotRef={idx < steps.items.length - 1 ? slotRefs[idx + 1] : null}
                fallbackRef={fallbackRef}
                isDesktop={isDesktop}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 961px) {
          .steps-sticky-header {
            position: sticky;
            top: 92px;
            z-index: 25;
          }
          .step-sticky-slot-0 {
            position: sticky;
            top: 164px;
            z-index: 1;
          }
          .step-sticky-slot-1 {
            position: sticky;
            top: 188px;
            z-index: 2;
          }
          .step-sticky-slot-2 {
            position: sticky;
            top: 212px;
            z-index: 3;
          }
        }
        @media (min-width: 961px) and (max-height: 820px) {
          .steps-sticky-header {
            top: 74px !important;
            padding: 8px 0 12px !important;
          }
          .step-sticky-slot-0 {
            top: 132px !important;
          }
          .step-sticky-slot-1 {
            top: 150px !important;
          }
          .step-sticky-slot-2 {
            top: 168px !important;
          }
          .step-card-inner {
            min-height: 360px !important;
          }
          .step-left-copy {
            padding: 28px 24px 28px 34px !important;
          }
          .step-visual-panel {
            min-height: 360px !important;
          }
        }
        @media (max-width: 960px) {
          .steps-sticky-header,
          .step-sticky-slot {
            position: relative !important;
            top: auto !important;
          }
          .step-card-grid {
            grid-template-columns: 1fr !important;
          }
          .step-left-copy {
            padding: 28px 24px 8px !important;
          }
        }
        @media (max-width: 640px) {
          .step-left-copy {
            padding: 22px 18px 8px !important;
          }
          .step-visual-panel {
            min-height: 340px !important;
            padding: 24px 16px !important;
          }
          .step2-agent-row {
            transform: none !important;
          }
          .step2-agent-pill {
            min-width: 148px !important;
            padding: 9px 14px !important;
          }
          .step2-orb-wrap {
            right: -95px !important;
            transform: translateY(-50%) scale(0.72) !important;
          }
        }
      `}</style>
    </section>
  );
};
