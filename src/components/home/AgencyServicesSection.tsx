import React from "react";
import { motion } from "framer-motion";
import { Palette, Smartphone, Code2, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";

const SERVICE_ICONS = [Palette, Smartphone, Code2, Sparkles];

export const AgencyServicesSection: React.FC = () => {
  const srv = homeData.agencyServices;

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#000000" }}>
      <div className="cosmoq-container">
        <SectionHeader
          tag={srv.tag}
          tagIcon={srv.tagIcon}
          title={srv.title.replace("\n", " ")}
          subtitle={srv.subtitle}
        />

        <div
          className="agency-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {srv.items.map((item, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            const isWarm = idx % 2 === 1;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.22)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="cosmoq-card agency-service-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "28px",
                  background: isWarm
                    ? "radial-gradient(circle at 85% 15%, rgba(255, 172, 10, 0.16), transparent 52%), radial-gradient(circle at 15% 85%, rgba(1, 117, 255, 0.12), transparent 52%), #07090f"
                    : "radial-gradient(circle at 85% 15%, rgba(1, 117, 255, 0.18), transparent 52%), radial-gradient(circle at 15% 85%, rgba(255, 172, 10, 0.11), transparent 52%), #07090f",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "22px",
                    }}
                  >
                    <div
                      className="luminous-tile"
                      style={{ width: "54px", height: "54px", borderRadius: "14px" }}
                    >
                      <div
                        className="luminous-tile-inner"
                        style={{ borderRadius: "13px" }}
                      >
                        <Icon size={24} style={{ color: "#ffffff" }} />
                      </div>
                    </div>

                    <Link
                      to={item.ctaTo}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 14px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.14)",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        fontSize: "13px",
                        color: "#e6eaf5",
                      }}
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <h3 className="typo-h4" style={{ marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p
                    className="typo-body-sm"
                    style={{ margin: 0, color: "#9ba9c4", maxWidth: "460px" }}
                  >
                    {item.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        padding: "7px 13px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        fontSize: "12.5px",
                        color: "#d1d4e3",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .agency-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .agency-service-card {
            padding: 22px !important;
          }
        }
      `}</style>
    </section>
  );
};
