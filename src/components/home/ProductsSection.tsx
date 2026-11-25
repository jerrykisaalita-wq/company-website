import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const PRODUCT_CARD_DELAYS = [0.08, 0.18, 0.3, 0.42];

export const ProductsSection: React.FC = () => {
  const prod = homeData.products;
  const isDesktop = useIsDesktop();
  const [activeTabId, setActiveTabId] = useState(prod.tabs[0].id);
  const activeTab =
    prod.tabs.find((t) => t.id === activeTabId) || prod.tabs[0];

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0",
        backgroundColor: "#000000",
        overflowX: "clip",
      }}
    >
      {/* Massive COSMOQ Ambient Nebula Backdrop */}
      <img
        src="/assets/PEUUUxYckhxt8G82fn4Y0LPz5s.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "45%",
          transform: "translate(-50%, -50%)",
          width: "140%",
          maxWidth: "1800px",
          height: "auto",
          opacity: 0.72,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="cosmoq-container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          tag={prod.tag}
          tagIcon={prod.tagIcon}
          title={prod.title}
          subtitle={prod.subtitle}
        />

        {/* Pill Switcher Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          {prod.tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                style={{
                  position: "relative",
                  padding: "10px 24px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  backgroundColor: "transparent",
                  color: isActive ? "#06070a" : "#d1d4e3",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="products-tab-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "999px",
                      backgroundColor: "#ffffff",
                      zIndex: 0,
                    }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Product Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45, ease: [0.12, 0.23, 0.5, 1] }}
          className="cosmoq-card product-showcase-card"
          style={{
            padding: "40px",
            marginBottom: "28px",
            background:
              "radial-gradient(circle at 20% 80%, rgba(255, 165, 10, 0.16), transparent 50%), radial-gradient(circle at 80% 30%, rgba(1, 117, 255, 0.18), transparent 52%), #07090f",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.12, 0.23, 0.5, 1] }}
              className="product-showcase-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
                gap: "40px",
                alignItems: "center",
              }}
            >
              {/* Left Copy + 3 Checkmarks */}
              <div>
                <h3 className="typo-h3" style={{ marginBottom: "14px" }}>
                  {activeTab.heading}
                </h3>
                <p
                  className="typo-body"
                  style={{ margin: "0 0 28px", color: "#9ba9c4" }}
                >
                  {activeTab.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeTab.points.map((pt) => (
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
                      <span style={{ fontSize: "14px", color: "#e6eaf5" }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive Mockup Image (COSMOQ x:50 -> 0 slide reveal) */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: isDesktop ? 50 : 0,
                  y: isDesktop ? 0 : 32,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "#0a0c12",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.65)",
                  filter: "drop-shadow(-16px 11px 14px rgba(0, 0, 0, 0.35))",
                }}
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.heading}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom 4 Vertical Cards */}
        <div
          className="vertical-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {prod.verticalCards.map((vc, idx) => (
            <motion.div
              key={vc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: PRODUCT_CARD_DELAYS[idx] ?? idx * 0.1,
                ease: [0.12, 0.23, 0.5, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "8px 4px",
              }}
            >
              <div
                className="luminous-tile"
                style={{ width: "62px", height: "62px", borderRadius: "16px" }}
              >
                <div
                  className="luminous-tile-inner"
                  style={{ borderRadius: "15px" }}
                >
                  <img
                    src={vc.icon}
                    alt={vc.title}
                    style={{ width: "26px", height: "26px", objectFit: "contain" }}
                  />
                </div>
              </div>
              <div>
                <h4 className="typo-h4" style={{ marginBottom: "8px" }}>
                  {vc.title}
                </h4>
                <p
                  className="typo-body-sm"
                  style={{ margin: 0, color: "#9ba9c4" }}
                >
                  {vc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .product-showcase-grid {
            grid-template-columns: 1fr !important;
          }
          .vertical-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .product-showcase-card {
            padding: 22px !important;
          }
        }
        @media (max-width: 560px) {
          .vertical-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
