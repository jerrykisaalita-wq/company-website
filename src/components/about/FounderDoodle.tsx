import React from "react";
import { motion } from "framer-motion";

/**
 * Custom animated neon-ink founder doodle replacing the stock founder photo.
 * Drawn in FLEXIE's signature white, warm amber (#ffac0a), and electric blue (#0175ff) lines.
 */
export const FounderDoodle: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 4.4",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        background:
          "radial-gradient(circle at 28% 25%, rgba(255, 172, 10, 0.18), transparent 52%), radial-gradient(circle at 75% 78%, rgba(1, 117, 255, 0.22), transparent 55%), #06080f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Subtle blueprint grid lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <svg
        viewBox="0 0 360 390"
        fill="none"
        style={{ position: "relative", zIndex: 2, width: "100%", height: "100%" }}
        aria-label="FLEXIE Founder Doodle Sketch"
      >
        {/* Orbiting Idea Ring */}
        <motion.ellipse
          cx="180"
          cy="195"
          rx="145"
          ry="62"
          transform="rotate(-14 180 195)"
          stroke="rgba(1, 117, 255, 0.45)"
          strokeWidth="1.8"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* Floating Spark / Lightbulb Doodle (Top Left) */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M72 86c0-15 11-26 25-26s25 11 25 26c0 9-5 15-10 21-3 4-4 7-4 11H86c0-4-1-7-4-11-5-6-10-12-10-21Z"
            stroke="#ffac0a"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M89 125h16M92 132h10" stroke="#ffcd7d" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M97 44v-8M60 66l-7-5M134 66l7-5M54 90h-9"
            stroke="#ffac0a"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Floating Wireframe Window Sketch (Top Right) */}
        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="246"
            y="56"
            width="74"
            height="54"
            rx="10"
            stroke="#0175ff"
            strokeWidth="2.4"
          />
          <path d="M246 72h74" stroke="#0175ff" strokeWidth="2" />
          <circle cx="258" cy="64" r="2.2" fill="#ffac0a" />
          <circle cx="267" cy="64" r="2.2" fill="#ffffff" />
          <path
            d="M260 88l10-8 12 10 14-12 10 8"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Founder Portrait Sketch — Messy Hair, Glasses, Hoodie */}
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Hair Swirl */}
          <path
            d="M126 168c-6-36 18-66 56-68 35-2 64 20 62 56 8 6 6 20-4 24"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M138 140c14-14 38-18 58-10 14 5 26 2 34-8"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Face Contour */}
          <path
            d="M134 176c0 34 18 62 46 62s46-28 46-62"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Round Iconic Glasses */}
          <circle cx="158" cy="182" r="16" stroke="#ffcd7d" strokeWidth="2.8" />
          <circle cx="202" cy="182" r="16" stroke="#ffcd7d" strokeWidth="2.8" />
          <path d="M174 182h12M135 178l7 2M218 180l7-2" stroke="#ffcd7d" strokeWidth="2.6" strokeLinecap="round" />

          {/* Friendly Eyes & Smile */}
          <circle cx="158" cy="182" r="3" fill="#ffffff" />
          <circle cx="202" cy="182" r="3" fill="#ffffff" />
          <path
            d="M167 210c8 8 20 8 28 0"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Hoodie Collar & Shoulders */}
          <path
            d="M106 322c4-46 28-72 74-72s70 26 74 72"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M148 252c10 16 22 22 32 22s22-6 32-22"
            stroke="#0175ff"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path d="M168 274v26M192 274v26" stroke="#0175ff" strokeWidth="2.4" strokeLinecap="round" />
        </motion.g>

        {/* Doodle Coffee Mug (Bottom Left) */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "72px 305px" }}
        >
          <path
            d="M52 292h34v28c0 8-7 14-17 14s-17-6-17-14v-28Z"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M86 298h8c5 0 8 3 8 8s-3 8-8 8h-8" stroke="#ffffff" strokeWidth="2.4" />
          <path d="M62 282c0-6 5-6 5-12M74 282c0-6 5-6 5-12" stroke="#ffac0a" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Hand-drawn Star Sparkles */}
        <motion.path
          d="M292 278l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z"
          stroke="#ffac0a"
          strokeWidth="2"
          strokeLinejoin="round"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.6, repeat: Infinity }}
          style={{ transformOrigin: "292px 292px" }}
        />
        <motion.path
          d="M66 206l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"
          stroke="#0175ff"
          strokeWidth="2"
          strokeLinejoin="round"
          animate={{ scale: [1.1, 0.85, 1.1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.1, repeat: Infinity }}
          style={{ transformOrigin: "66px 216px" }}
        />

        {/* Handwritten Caption Tag */}
        <text
          x="180"
          y="362"
          textAnchor="middle"
          fill="rgba(255,255,255,0.65)"
          fontSize="13"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.14em"
        >
          BUILT BY MAKERS · FLEXIE STUDIO
        </text>
      </svg>
    </div>
  );
};
