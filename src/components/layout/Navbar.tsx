import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { GlowButton } from "../ui/GlowButton";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";

  // Close mobile drawer automatically on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Allow closing mobile drawer with Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <motion.header
      initial={isHome ? { opacity: 0.001, y: -14 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={
        isHome
          ? { delay: 1.8, duration: 0.7, ease: [0.12, 0.23, 0.5, 1] }
          : { duration: 0 }
      }
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 0 24px",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.42) 64%, rgba(0, 0, 0, 0) 100%)",
        pointerEvents: "none",
      }}
    >
      {/* Click-outside backdrop overlay when mobile drawer is open */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            aria-hidden
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              backdropFilter: "blur(4px)",
              pointerEvents: "auto",
              zIndex: -1,
            }}
          />
        )}
      </AnimatePresence>

      <div
        className="cosmoq-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Left Logo */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <img
            src={siteConfig.logoSvgPath}
            alt={siteConfig.brandName}
            style={{
              height: "24px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Center Floating Glass Nav Pill (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="cosmoq-desktop-nav"
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 18px",
            borderRadius: "999px",
            backgroundColor: "rgba(12, 15, 22, 0.55)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "inset -3px -2px 8px rgba(255, 255, 255, 0.07)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          {siteConfig.navLinks.map((item) => {
            const isActive =
              pathname === item.to ||
              (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setHovered(item.to)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  padding: "6px 14px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
                {(hovered === item.to || isActive) && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    style={{
                      position: "absolute",
                      left: "14px",
                      right: "14px",
                      bottom: "2px",
                      height: "1.5px",
                      background:
                        "linear-gradient(90deg, #ffac0a 0%, #0175ff 100%)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA + Mobile Toggle */}
        <div
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div className="cosmoq-desktop-cta">
            <GlowButton
              label={siteConfig.primaryCta.label}
              to={siteConfig.primaryCta.to}
              size="sm"
            />
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="cosmoq-mobile-toggle"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              backgroundColor: "rgba(12, 15, 22, 0.75)",
              backdropFilter: "blur(12px)",
              color: "#ffffff",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
            className="cosmoq-mobile-drawer"
            style={{
              pointerEvents: "auto",
              margin: "12px 16px 0",
              padding: "20px",
              borderRadius: "20px",
              backgroundColor: "rgba(6, 7, 10, 0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.78)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 8px",
                  fontSize: "16px",
                  color: pathname === item.to ? "#ffffff" : "#d1d4e3",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ paddingTop: "14px" }}>
              <GlowButton
                label={siteConfig.primaryCta.label}
                to={siteConfig.primaryCta.to}
                onClick={() => setMobileOpen(false)}
                fullWidth
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .cosmoq-desktop-nav,
          .cosmoq-desktop-cta {
            display: none !important;
          }
          .cosmoq-mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </motion.header>
  );
};
