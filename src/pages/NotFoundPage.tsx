import React from "react";
import { GlowButton } from "../components/ui/GlowButton";

export const NotFoundPage: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "78vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 24px 100px",
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      <img
        src="/assets/LRo3F4mbzzic3blu5LYjGwuuHmI.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.75,
          pointerEvents: "none",
        }}
      />

      <div
        className="cosmoq-container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <h1 className="typo-h1">Page not found!</h1>
        <p
          className="typo-body"
          style={{ margin: 0, maxWidth: "480px", color: "#d1d4e3" }}
        >
          Sorry, we couldn’t find the page you’re looking for. If this is an
          error, please get in touch or go back home and try again.
        </p>
        <div style={{ marginTop: "12px" }}>
          <GlowButton label="Back to Home" to="/" />
        </div>
      </div>
    </section>
  );
};
