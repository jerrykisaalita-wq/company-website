import React from "react";
import { motion } from "framer-motion";

interface SubpageHeroProps {
  tag: string;
  tagIcon?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  tag,
  tagIcon,
  title,
  subtitle,
  children,
}) => {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "150px",
        paddingBottom: "72px",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* Signature Subpage Vertical Aurora Streaks Backdrop */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "620px",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.92,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 65%, #000000 100%)",
          }}
        />
      </div>

      <div
        className="cosmoq-container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "22px",
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
              color: "#d1d4e3",
            }}
          >
            {tag}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="typo-h1"
          style={{ maxWidth: "820px", whiteSpace: "pre-line" }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          style={{
            margin: "20px 0 0",
            maxWidth: "560px",
            fontSize: "16px",
            lineHeight: 1.55,
            color: "#d1d4e3",
          }}
        >
          {subtitle}
        </motion.p>

        {children}
      </div>
    </section>
  );
};
