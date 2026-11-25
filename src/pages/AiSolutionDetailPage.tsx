import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { solutionDetails } from "../data/solutionsData";
import { SubpageHero } from "../components/ui/SubpageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CosmicOrb } from "../components/ui/CosmicOrb";

const ORBIT_ICONS = [
  { src: "/assets/EvRpOn9wuYvQYZzCfYwtnS65jRE.svg", top: "14%", left: "26%" },
  { src: "/assets/Qmeyc8tpcFWa8qeWg0TXT3j1Bk.svg", top: "10%", left: "66%" },
  { src: "/assets/qFTOsX8sqXh02Cgi1SGKESFM.svg", top: "48%", left: "12%" },
  { src: "/assets/uTYfGCGJhYt5Yt80P0vRCI1ZP3o.svg", top: "48%", left: "80%" },
  { src: "/assets/lWkvBfoKqMSbdShmBxYLUjAgtJ8.svg", top: "78%", left: "28%" },
  { src: "/assets/MfWFF0DqN6CDcXnTeU91NFCU.svg", top: "78%", left: "66%" },
];

const SeamlessIntegrationVisual: React.FC = () => (
  <div
    className="orbital-hub-outer"
    style={{
      position: "relative",
      width: "100%",
      aspectRatio: "4 / 3",
      borderRadius: "14px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(circle at 32% 65%, rgba(255, 165, 10, 0.24), transparent 55%), radial-gradient(circle at 72% 35%, rgba(1, 117, 255, 0.28), transparent 55%), #06080f",
    }}
  >
    <div
      className="orbital-hub-stage"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Concentric Orbital Rings */}
      {[240, 340, 440].map((d) => (
        <div
          key={d}
          aria-hidden
          style={{
            position: "absolute",
            width: d,
            height: d,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />
      ))}

      <CosmicOrb size={190}>
        <img
          src="/assets/flexie-logo.svg"
          alt="FLEXIE"
          style={{ width: "118px", height: "auto" }}
        />
      </CosmicOrb>

      {ORBIT_ICONS.map((ic, i) => (
        <motion.div
          key={ic.src}
          animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
          transition={{ duration: 3.4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: ic.top,
            left: ic.left,
            width: "54px",
            height: "54px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={ic.src}
            alt=""
            style={{ width: "26px", height: "26px", objectFit: "contain" }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export const AiSolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? solutionDetails[slug] : undefined;

  const [featureIdx, setFeatureIdx] = useState(0);
  const [useCaseIdx, setUseCaseIdx] = useState(0);

  useEffect(() => {
    setFeatureIdx(0);
    setUseCaseIdx(0);
  }, [slug]);

  if (!detail) {
    return <Navigate to="/ai-solutions" replace />;
  }

  const activeFeature = detail.features[featureIdx] || detail.features[0];
  const activeUseCase = detail.useCases[useCaseIdx] || detail.useCases[0];
  const isOrbitalHub = activeFeature.image.includes("RQBJ1F2RPqlo57O4iQ9CUsP9WR0");

  return (
    <>
      <SubpageHero
        tag={detail.tag}
        tagIcon="/assets/MRmuOBoDk7tTbd9wZjGly9VAk.svg"
        title={detail.title}
        subtitle={detail.subtitle}
      />

      {/* Interactive Features Split Section */}
      <section style={{ padding: "60px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag="FEATURES"
            tagIcon="/assets/kSe62iNOdnrgkLKL07t29GUEak.svg"
            title={detail.featuresTitle}
          />

          <div
            className="solution-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Left Accordion List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {detail.features.map((feat, idx) => {
                const active = idx === featureIdx;
                return (
                  <button
                    key={feat.title}
                    type="button"
                    onClick={() => setFeatureIdx(idx)}
                    style={{
                      background: "transparent",
                      border: "none",
                      borderLeft: active
                        ? "2px solid #0175ff"
                        : "2px solid rgba(255, 255, 255, 0.1)",
                      padding: "16px 22px",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <h3
                      className="typo-h4"
                      style={{
                        marginBottom: active ? "10px" : 0,
                        color: active ? "#ffffff" : "#9ba9c4",
                      }}
                    >
                      {feat.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="typo-body-sm"
                          style={{
                            margin: 0,
                            color: "#9ba9c4",
                            overflow: "hidden",
                          }}
                        >
                          {feat.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Right Visual Card */}
            <div
              className="cosmoq-card"
              style={{
                padding: "28px",
                background:
                  "radial-gradient(circle at 30% 35%, rgba(1, 117, 255, 0.2), transparent 55%), radial-gradient(circle at 75% 70%, rgba(255, 165, 10, 0.22), transparent 55%), #07090f",
              }}
            >
              <AnimatePresence mode="wait">
                {isOrbitalHub ? (
                  <motion.div
                    key="orbital-hub"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SeamlessIntegrationVisual />
                  </motion.div>
                ) : (
                  <motion.img
                    key={activeFeature.image + featureIdx}
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag="USECASES"
            tagIcon="/assets/x7XTNLlWxYwjujzGoOnLndNCk.svg"
            title={detail.useCasesTitle}
            subtitle={detail.useCasesSubtitle}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "28px",
              flexWrap: "wrap",
            }}
          >
            {detail.useCases.map((uc, idx) => {
              const active = idx === useCaseIdx;
              return (
                <button
                  key={uc.tab}
                  type="button"
                  onClick={() => setUseCaseIdx(idx)}
                  style={{
                    position: "relative",
                    padding: "10px 24px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    backgroundColor: "transparent",
                    color: active ? "#06070a" : "#d1d4e3",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId={`uc-tab-${detail.slug}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "999px",
                        backgroundColor: "#ffffff",
                      }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>
                    {uc.tab}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="cosmoq-card solution-detail-grid solution-uc-card"
            style={{
              padding: "40px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <h3 className="typo-h3" style={{ marginBottom: "14px" }}>
                {activeUseCase.heading}
              </h3>
              <p
                className="typo-body"
                style={{ margin: "0 0 24px", color: "#9ba9c4" }}
              >
                {activeUseCase.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {activeUseCase.points.map((pt) => (
                  <div
                    key={pt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{ color: "#ffac0a", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "14px", color: "#e6eaf5" }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src={activeUseCase.image}
                alt={activeUseCase.heading}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="cosmoq-container">
          <SectionHeader
            tag="WHY"
            tagIcon="/assets/FpegPxGA5O2f1mmF2vxxVytQYw.svg"
            title={detail.whyTitle}
            subtitle={detail.whySubtitle}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {detail.benefits.map((b) => (
              <div
                key={b.title}
                className="cosmoq-card"
                style={{
                  padding: "32px",
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(1, 117, 255, 0.14), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255, 165, 10, 0.12), transparent 55%), #07090f",
                }}
              >
                <img
                  src={b.icon}
                  alt=""
                  style={{ width: "56px", height: "56px", marginBottom: "24px" }}
                />
                <h4 className="typo-h4" style={{ marginBottom: "10px" }}>
                  {b.title}
                </h4>
                <p className="typo-body-sm" style={{ margin: 0, color: "#9ba9c4" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .solution-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .solution-uc-card {
            padding: 22px !important;
          }
          .orbital-hub-outer {
            min-height: 290px !important;
          }
          .orbital-hub-stage {
            transform: scale(0.75);
          }
        }
      `}</style>
    </>
  );
};
