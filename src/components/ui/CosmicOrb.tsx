import React from "react";
import { motion } from "framer-motion";

interface CosmicOrbProps {
  size?: number;
  children?: React.ReactNode;
  animateFloat?: boolean;
  texture?: "globe" | "plasma";
}

/**
 * Signature photorealistic rotating plasma sphere matching COSMOQ's live
 * 360-degree spinning orb with ambient dual-tone outer bloom and specular glass rim.
 */
export const CosmicOrb: React.FC<CosmicOrbProps> = ({
  size = 240,
  children,
  animateFloat = true,
  texture = "globe",
}) => {
  const textureSrc =
    texture === "plasma"
      ? "/assets/emEabgUGaj1mrFtUh9nCcNLOsk.webp"
      : "/assets/LSyUU59PqiiX3GNMxMMlFDJb8I.png";

  return (
    <motion.div
      animate={
        animateFloat
          ? {
              y: [0, -6, 0],
              scale: [1, 1.018, 1],
            }
          : undefined
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ambient Outer Bloom */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-28%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 35%, rgba(1, 117, 255, 0.44), transparent 58%), radial-gradient(circle at 72% 70%, rgba(255, 172, 10, 0.42), transparent 58%)",
          filter: "blur(34px)",
          pointerEvents: "none",
        }}
      />

      {/* Glossy Sphere Body with Rotating Photoreal Plasma Texture */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          boxShadow:
            "inset 0 1px 12px rgba(255,255,255,0.42), 0 21px 28px rgba(0,0,0,0.45)",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#060911",
        }}
      >
        <motion.img
          src={textureSrc}
          alt=""
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: "104%",
            height: "104%",
            objectFit: "cover",
            filter: "brightness(1.3)",
            pointerEvents: "none",
          }}
        />

        {/* Subtle stationary inner glass rim sheen */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 28% 24%, rgba(255,255,255,0.22) 0%, transparent 40%), linear-gradient(145deg, rgba(255,255,255,0.14) 0%, transparent 45%, rgba(0,0,0,0.38) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Stationary centered overlay content */}
        <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
      </div>
    </motion.div>
  );
};
