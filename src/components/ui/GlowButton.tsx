import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface GlowButtonProps {
  label: string;
  to?: string;
  onClick?: () => void;
  size?: "sm" | "md";
  type?: "button" | "submit";
  className?: string;
  fullWidth?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  label,
  to,
  onClick,
  size = "md",
  type = "button",
  className = "",
  fullWidth = false,
}) => {
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
      className={`glow-btn-outer ${size === "sm" ? "sm" : ""} ${className}`}
      style={fullWidth ? { width: "100%" } : undefined}
    >
      <span className="glow-btn-inner">{label}</span>
    </motion.span>
  );

  if (to) {
    return (
      <Link
        to={to}
        style={{
          display: fullWidth ? "flex" : "inline-flex",
          width: fullWidth ? "100%" : undefined,
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
      }}
    >
      {content}
    </button>
  );
};

interface SecondaryPillButtonProps {
  prefix: string;
  accent: string;
  to: string;
  accentColor?: string;
  fullWidth?: boolean;
}

export const SecondaryPillButton: React.FC<SecondaryPillButtonProps> = ({
  prefix,
  accent,
  to,
  accentColor = "#4298ff",
  fullWidth = false,
}) => {
  return (
    <Link
      to={to}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
      }}
    >
      <motion.span
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(255,255,255,0.28)",
          backgroundColor: "rgba(255,255,255,0.06)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          width: fullWidth ? "100%" : undefined,
          padding: "11px 22px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.14)",
          backgroundColor: "rgba(255,255,255,0.03)",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        <span>{prefix}</span>
        <span style={{ color: accentColor }}>{accent}</span>
      </motion.span>
    </Link>
  );
};
