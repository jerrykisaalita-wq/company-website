import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";

export const TestimonialsSection: React.FC = () => {
  const ts = homeData.testimonials;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ts.items.length);
    }, 5200);
    return () => clearInterval(id);
  }, [ts.items.length]);

  const current = ts.items[index];

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#000000",
        overflow: "clip",
      }}
    >
      <div className="cosmoq-container">
        <SectionHeader
          tag={ts.tag}
          tagIcon={ts.tagIcon}
          title={ts.title}
          subtitle={ts.subtitle}
        />

        {/* Crisp Unclipped Testimonial Card Carousel */}
        <div style={{ position: "relative" }}>
          <div
            className="cosmoq-card testimonial-card-shell"
            style={{
              position: "relative",
              padding: "36px",
              minHeight: "340px",
              background:
                "radial-gradient(circle at 25% 80%, rgba(255, 165, 10, 0.28), transparent 55%), radial-gradient(circle at 75% 25%, rgba(1, 117, 255, 0.26), transparent 55%), #07090f",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ type: "spring", damping: 42, stiffness: 320 }}
                className="testimonial-inner-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px minmax(0, 1fr)",
                  gap: "36px",
                  alignItems: "center",
                }}
              >
                <div
                  className="testimonial-avatar-box"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "280px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <img
                    src={current.avatar}
                    alt={current.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "28px",
                  }}
                >
                  <h4
                    className="typo-h4"
                    style={{
                      fontWeight: 400,
                      lineHeight: 1.45,
                      color: "#f4f6fc",
                    }}
                  >
                    {current.quote}
                  </h4>

                  <div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#ffffff",
                        marginBottom: "4px",
                      }}
                    >
                      {current.name}
                    </div>
                    <div style={{ fontSize: "14px", color: "#9ba9c4" }}>
                      {current.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              {ts.items.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`View testimonial from ${item.name}`}
                  onClick={() => setIndex(idx)}
                  style={{
                    width: idx === index ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor:
                      idx === index ? "#0175ff" : "rgba(255, 255, 255, 0.22)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() =>
                  setIndex((i) => (i - 1 + ts.items.length) % ts.items.length)
                }
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => (i + 1) % ts.items.length)}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .testimonial-inner-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .testimonial-card-shell {
            padding: 22px !important;
          }
          .testimonial-avatar-box {
            height: 230px !important;
          }
        }
      `}</style>
    </section>
  );
};
