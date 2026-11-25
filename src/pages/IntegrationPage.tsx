import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { integrationData } from "../data/integrationData";
import { SubpageHero } from "../components/ui/SubpageHero";
import { GlowButton } from "../components/ui/GlowButton";
import { IntegrationBrandLogo } from "../components/integration/IntegrationBrandLogos";

export const IntegrationPage: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>("all");

  const visibleGroups =
    activeGroup === "all"
      ? integrationData.groups
      : integrationData.groups.filter((g) => g.id === activeGroup);

  return (
    <>
      <SubpageHero
        tag={integrationData.tag}
        tagIcon={integrationData.tagIcon}
        title={integrationData.title}
        subtitle={integrationData.subtitle}
      />

      <section
        style={{
          padding: "20px 0 100px",
          backgroundColor: "#000000",
          overflowX: "clip",
        }}
      >
        <div
          className="cosmoq-container integration-page-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "240px minmax(0, 1fr)",
            gap: "44px",
            alignItems: "start",
          }}
        >
          {/* Left Sticky Filter Sidebar on Desktop / Wrapped Pill Bar on Mobile */}
          <aside
            className="integration-filter-sidebar"
            style={{
              position: "sticky",
              top: "120px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveGroup("all")}
              className={`integration-filter-btn ${activeGroup === "all" ? "is-active" : ""}`}
              style={{
                position: "relative",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                padding: "16px 8px",
                textAlign: "left",
                color: activeGroup === "all" ? "#ffffff" : "#9ba9c4",
                fontSize: "15px",
                fontWeight: activeGroup === "all" ? 500 : 400,
                cursor: "pointer",
              }}
            >
              All Categories
              {activeGroup === "all" && (
                <motion.span
                  layoutId="integration-filter-active"
                  className="integration-desktop-underline"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-1px",
                    width: "75%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, rgb(255, 205, 125) 0%, rgb(1, 117, 255) 100%)",
                    boxShadow: "0 0 10px rgba(1, 117, 255, 0.55)",
                  }}
                />
              )}
            </button>

            {integrationData.groups.map((grp) => {
              const active = activeGroup === grp.id;
              return (
                <button
                  key={grp.id}
                  type="button"
                  onClick={() => setActiveGroup(grp.id)}
                  className={`integration-filter-btn ${active ? "is-active" : ""}`}
                  style={{
                    position: "relative",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "16px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "left",
                    color: active ? "#ffffff" : "#9ba9c4",
                    fontSize: "15px",
                    fontWeight: active ? 500 : 400,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={grp.icon}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span>{grp.label}</span>
                  {active && (
                    <motion.span
                      layoutId="integration-filter-active"
                      className="integration-desktop-underline"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "-1px",
                        width: "75%",
                        height: "2px",
                        background:
                          "linear-gradient(90deg, rgb(255, 205, 125) 0%, rgb(1, 117, 255) 100%)",
                        boxShadow: "0 0 10px rgba(1, 117, 255, 0.55)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </aside>

          {/* Right Integration Category Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {visibleGroups.map((grp) => (
              <motion.div
                key={grp.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: [0.12, 0.23, 0.5, 1] }}
                className="cosmoq-card integration-group-card"
                style={{ padding: "32px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#ffffff",
                    }}
                  >
                    {grp.label}
                  </h3>
                  {grp.recommendation && (
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "#ffcd7d",
                        padding: "5px 12px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255, 172, 10, 0.35)",
                        backgroundColor: "rgba(255, 172, 10, 0.08)",
                      }}
                    >
                      NATIVE FLEXIE OPTION AVAILABLE
                    </span>
                  )}
                </div>

                {/* Native FLEXIE Recommendation Callout for CRM & IT Service */}
                {grp.recommendation && (
                  <div
                    style={{
                      marginBottom: "24px",
                      padding: "1px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(125deg, rgba(255, 205, 125, 0.55) 0%, rgba(255, 255, 255, 0.08) 45%, rgba(1, 117, 255, 0.62) 100%)",
                      boxShadow:
                        "0 8px 28px rgba(255, 172, 10, 0.12), 0 -4px 24px rgba(1, 117, 255, 0.14)",
                    }}
                  >
                    <div
                      className="integration-rec-inner"
                      style={{
                        borderRadius: "17px",
                        padding: "22px 24px",
                        background:
                          "radial-gradient(circle at 14% 85%, rgba(255, 172, 10, 0.15), transparent 52%), radial-gradient(circle at 86% 15%, rgba(1, 117, 255, 0.18), transparent 54%), #070a12",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px",
                      }}
                    >
                      <div style={{ flex: "1 1 260px" }}>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src="/assets/flexie-logo.svg"
                            alt="FLEXIE"
                            style={{ height: "13px", width: "auto" }}
                          />
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                              fontSize: "11px",
                              fontWeight: 600,
                              letterSpacing: "0.08em",
                              color: "#9bc4ff",
                            }}
                          >
                            <Sparkles size={12} style={{ color: "#ffac0a", flexShrink: 0 }} />
                            {grp.recommendation.badge}
                          </span>
                        </div>
                        <h4
                          style={{
                            margin: "0 0 8px",
                            fontSize: "18px",
                            fontWeight: 500,
                            color: "#ffffff",
                          }}
                        >
                          {grp.recommendation.headline}
                        </h4>
                        <p
                          className="typo-body-sm"
                          style={{
                            margin: 0,
                            color: "#b7c3db",
                            lineHeight: 1.55,
                          }}
                        >
                          {grp.recommendation.body}
                        </p>
                      </div>

                      <div style={{ flexShrink: 0 }}>
                        <GlowButton
                          label={grp.recommendation.ctaLabel}
                          to={grp.recommendation.ctaTo}
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Monochrome Big Tech Integration Tiles */}
                <div
                  className="integration-tiles-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {grp.items.map((item) => (
                    <motion.div
                      key={item.id}
                      title={item.name}
                      className="integration-brand-tile"
                      whileHover={{
                        borderColor: "rgba(1, 117, 255, 0.45)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        y: -3,
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                      style={{
                        height: "84px",
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                      }}
                    >
                      <IntegrationBrandLogo id={item.id} name={item.name} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .integration-page-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .integration-filter-sidebar {
            position: relative !important;
            top: 0 !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            overflow: visible !important;
          }
          .integration-filter-btn {
            border-bottom: none !important;
            border: 1px solid rgba(255, 255, 255, 0.14) !important;
            border-radius: 999px !important;
            padding: 9px 14px !important;
            white-space: nowrap !important;
            font-size: 14px !important;
            background: rgba(255, 255, 255, 0.03) !important;
          }
          .integration-filter-btn.is-active {
            border-color: rgba(1, 117, 255, 0.65) !important;
            background: rgba(1, 117, 255, 0.14) !important;
            color: #ffffff !important;
          }
          .integration-desktop-underline {
            display: none !important;
          }
        }
        @media (max-width: 560px) {
          .integration-group-card {
            padding: 20px !important;
          }
          .integration-rec-inner {
            padding: 18px !important;
          }
          .integration-tiles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          .integration-brand-tile {
            height: 72px !important;
            padding: 10px !important;
          }
        }
      `}</style>
    </>
  );
};
