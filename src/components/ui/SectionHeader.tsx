import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  tagIcon?: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  tagIcon,
  title,
  subtitle,
}) => {
  return (
    <div style={{ marginBottom: "48px" }}>
      {/* Tag bar with bottom hairline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4, ease: [0.12, 0.23, 0.5, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingBottom: "16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          marginBottom: "28px",
        }}
      >
        {tagIcon && (
          <img
            src={tagIcon}
            alt=""
            style={{ width: "20px", height: "20px", objectFit: "contain" }}
          />
        )}
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9ba9c4",
          }}
        >
          {tag}
        </span>
      </motion.div>

      {/* Split Heading + Subtext with COSMOQ staggered blur-to-crisp reveal */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.06, duration: 0.5, ease: [0.12, 0.23, 0.5, 1] }}
          className="typo-h2"
          style={{ maxWidth: "680px" }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.12, 0.23, 0.5, 1] }}
            className="typo-body"
            style={{
              margin: 0,
              maxWidth: "360px",
              color: "#9ba9c4",
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};
