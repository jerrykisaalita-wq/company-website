import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";
import { SecondaryPillButton } from "../ui/GlowButton";
import { CosmicOrb } from "../ui/CosmicOrb";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const PROMPTS = [
  "Help me with the bank",
  "Summarize Q3 operations",
  "Route customer ticket #402",
];

const TypewriterPrompt: React.FC = () => {
  const [text, setText] = useState("Help me with the bank");
  const [promptIdx, setPromptIdx] = useState(0);

  useEffect(() => {
    const target = PROMPTS[promptIdx];
    let charIdx = 0;
    let deleting = false;
    let pauseCounter = 0;

    const id = setInterval(() => {
      if (!deleting) {
        charIdx++;
        setText(target.slice(0, charIdx));
        if (charIdx >= target.length) {
          pauseCounter++;
          if (pauseCounter > 16) {
            deleting = true;
            pauseCounter = 0;
          }
        }
      } else {
        charIdx--;
        setText(target.slice(0, Math.max(0, charIdx)));
        if (charIdx <= 0) {
          deleting = false;
          setPromptIdx((i) => (i + 1) % PROMPTS.length);
        }
      }
    }, 85);

    return () => clearInterval(id);
  }, [promptIdx]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 18px",
        borderRadius: "999px",
        backgroundColor: "rgba(6, 7, 10, 0.85)",
        border: "1px solid rgba(255, 255, 255, 0.22)",
        backdropFilter: "blur(12px)",
        width: "100%",
        maxWidth: "310px",
        boxShadow: "0 18px 34px rgba(0, 0, 0, 0.45)",
      }}
    >
      <img
        src="/assets/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png"
        alt=""
        aria-hidden
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "inset 0 0 4px rgba(255, 255, 255, 0.65)",
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: "14px", color: "#ffffff", whiteSpace: "nowrap" }}>
        {text}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          style={{ marginLeft: "1px", color: "#0175ff" }}
        >
          |
        </motion.span>
      </span>
    </div>
  );
};

interface EnterpriseRailItemProps {
  nav: { id: string; label: string; icon: string };
  targetRef: React.RefObject<HTMLDivElement | null>;
  active: boolean;
  isDesktop: boolean;
  onClick: () => void;
}

const EnterpriseRailItem: React.FC<EnterpriseRailItemProps> = ({
  nav,
  targetRef,
  active,
  isDesktop,
  onClick,
}) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.85", "center 0.45"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
  });
  const itemOpacity = useTransform(smoothProgress, [0, 1], [0.48, 1]);
  const barX = useTransform(smoothProgress, [0, 1], ["-100%", "0%"]);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`enterprise-rail-btn ${active ? "is-active" : ""}`}
      style={{
        position: "relative",
        padding: "18px 8px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        textAlign: "left",
        color: active ? "#ffffff" : "#d1d4e3",
        opacity: isDesktop ? itemOpacity : active ? 1 : 0.72,
        whiteSpace: "nowrap",
      }}
    >
      <img
        src={nav.icon}
        alt=""
        style={{
          width: "20px",
          height: "20px",
          opacity: active ? 1 : 0.72,
        }}
      />
      <span style={{ fontSize: "16px", fontWeight: active ? 500 : 400 }}>
        {nav.label}
      </span>

      {/* Scroll-scrubbed bottom underline highlight on desktop (matches COSMOQ framer-dv0q2q) */}
      {isDesktop && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "-1px",
            height: "2px",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <motion.span
            style={{
              display: "block",
              width: "75%",
              height: "100%",
              x: barX,
              background:
                "linear-gradient(90deg, rgb(255, 205, 125) 0%, rgb(1, 117, 255) 100%)",
              boxShadow: "0 0 12px rgba(1, 117, 255, 0.55)",
            }}
          />
        </div>
      )}
    </motion.button>
  );
};

interface EnterpriseScrollCardProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  card: (typeof homeData.enterpriseFeatures.cards)[number];
  idx: number;
  isDesktop: boolean;
}

const EnterpriseScrollCard: React.FC<EnterpriseScrollCardProps> = ({
  cardRef,
  card,
  idx,
  isDesktop,
}) => {
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [isDesktop ? 80 : 0, 0]);
  const smoothX = useSpring(rawX, { stiffness: 260, damping: 32 });
  const cardOpacity = useTransform(scrollYProgress, [0, 0.55], [0.45, 1]);

  return (
    <div ref={cardRef} data-enterprise-card={card.id}>
      <motion.div
        style={{
          x: isDesktop ? smoothX : 0,
          opacity: isDesktop ? cardOpacity : 1,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
          minHeight: "390px",
        }}
        className="cosmoq-card enterprise-feature-card"
      >
        {/* Left Content */}
        <div
          style={{
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <h4 className="typo-h4" style={{ marginBottom: "12px" }}>
              {card.title}
            </h4>
            <p
              className="typo-body-sm"
              style={{ margin: "0 0 24px", color: "#9ba9c4", maxWidth: "360px" }}
            >
              {card.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {card.chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    fontSize: "13px",
                    color: "#e2e6f3",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SecondaryPillButton
              prefix={card.ctaPrefix}
              accent={card.ctaAccent}
              to={card.ctaTo}
              accentColor="#0175ff"
            />
          </div>
        </div>

        {/* Right Visual with Authentic COSMOQ Textured Glows */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "28px",
            minHeight: "340px",
          }}
        >
          {/* Card 0: Full-bleed Banking Agent Glass Backdrop + Floating Prompt */}
          {idx === 0 && (
            <>
              <motion.img
                src="/assets/DKhCP3xiqB8m3zBp2E6ysooT3SY.webp"
                alt=""
                aria-hidden
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "right top",
                  filter: "drop-shadow(0 34px 19px rgba(0,0,0,0.25))",
                  maskImage:
                    "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.94) 71%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.94) 71%, rgba(0, 0, 0, 0) 100%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: "8px",
                }}
              >
                <TypewriterPrompt />
              </div>
            </>
          )}

          {/* Card 1: Full-Bleed Textured Glow + Rotating FLEXIE Cosmic Orb */}
          {idx === 1 && (
            <>
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
                  filter: "brightness(1.2)",
                  maskImage:
                    "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(-90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0) 100%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <CosmicOrb size={230} texture="globe">
                  <img
                    src={card.logoSvg}
                    alt="FLEXIE"
                    style={{
                      width: "145px",
                      height: "auto",
                      filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.45))",
                    }}
                  />
                </CosmicOrb>
              </div>
            </>
          )}

          {/* Card 2: Enterprise Data Sources Conduit Diagram over Centered Atmospheric Glow */}
          {idx === 2 && (
            <>
              <img
                src="/assets/rYyqmKb6ZW8scPMDoDnkLicukfc.png"
                alt=""
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "drop-shadow(0 34px 19px rgba(0,0,0,0.25))",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  {card.sourceIcons?.map((src, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>

                <svg
                  viewBox="0 0 280 70"
                  fill="none"
                  style={{ width: "260px", height: "64px" }}
                >
                  {[25, 70, 115, 165, 210, 255].map((xPos, cIdx) => (
                    <g key={cIdx}>
                      <path
                        d={`M ${xPos} 0 C ${xPos} 36, 140 32, 140 70`}
                        stroke="rgba(255,255,255,0.16)"
                        strokeWidth="1.2"
                      />
                      <motion.path
                        d={`M ${xPos} 0 C ${xPos} 36, 140 32, 140 70`}
                        stroke={cIdx % 2 === 0 ? "#0175ff" : "#ffac0a"}
                        strokeWidth="2.2"
                        strokeDasharray="12 120"
                        animate={{ strokeDashoffset: [132, 0] }}
                        transition={{
                          duration: 2.2 + cIdx * 0.2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </g>
                  ))}
                </svg>

                <CosmicOrb size={156} texture="globe" animateFloat={false} />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const EnterpriseFeaturesSection: React.FC = () => {
  const ef = homeData.enterpriseFeatures;
  const isDesktop = useIsDesktop();
  const [activeId, setActiveId] = useState("usage");

  const cardRefMap = useMemo(() => {
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {};
    ef.navItems.forEach((n) => {
      map[n.id] = React.createRef<HTMLDivElement>();
    });
    return map;
  }, [ef.navItems]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ef.navItems.forEach((item) => {
      const el = cardRefMap[item.id]?.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(item.id);
            }
          });
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [cardRefMap, ef.navItems]);

  const scrollToCard = (id: string) => {
    const el = cardRefMap[id]?.current;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#000000",
        overflow: "visible",
      }}
    >
      <div className="cosmoq-container" style={{ overflow: "visible" }}>
        <SectionHeader
          tag={ef.tag}
          tagIcon={ef.tagIcon}
          title={ef.title}
          subtitle={ef.subtitle}
        />

        <div
          className="enterprise-features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "230px minmax(0, 1fr)",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left Sticky Rail (scroll-scrubbed highlights) */}
          <aside
            className="enterprise-sticky-rail"
            style={{
              position: "sticky",
              top: "120px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {ef.navItems.map((nav) => (
              <EnterpriseRailItem
                key={nav.id}
                nav={nav}
                targetRef={cardRefMap[nav.id]}
                active={activeId === nav.id}
                isDesktop={isDesktop}
                onClick={() => scrollToCard(nav.id)}
              />
            ))}
          </aside>

          {/* Right Stacked Feature Cards (overflowX clip prevents x:80 horizontal glide overflow) */}
          <div
            className="enterprise-cards-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              overflowX: "clip",
            }}
          >
            {ef.cards.map((card, idx) => (
              <EnterpriseScrollCard
                key={card.id}
                cardRef={cardRefMap[card.id]}
                card={card}
                idx={idx}
                isDesktop={isDesktop}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .enterprise-rail-btn {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 960px) {
          .enterprise-features-grid {
            grid-template-columns: 1fr !important;
          }
          .enterprise-sticky-rail {
            position: relative !important;
            top: 0 !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 8px;
          }
          .enterprise-rail-btn {
            padding: 10px 14px !important;
            border: 1px solid rgba(255, 255, 255, 0.14) !important;
            border-radius: 999px !important;
            font-size: 14px !important;
          }
          .enterprise-rail-btn.is-active {
            border-color: rgba(1, 117, 255, 0.75) !important;
            background: rgba(1, 117, 255, 0.14) !important;
          }
          .enterprise-feature-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
