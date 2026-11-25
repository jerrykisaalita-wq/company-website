import React, { useState } from "react";
import { motion } from "framer-motion";
import { SubpageHero } from "../components/ui/SubpageHero";
import { GlowButton } from "../components/ui/GlowButton";

export const LaunchingSoonPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <SubpageHero
      tag="LAUNCHING SOON"
      title={"Something Exciting is\nComing Soon!"}
      subtitle="Registered and keep yourself informed to get first access."
    >
      <div
        style={{
          marginTop: "36px",
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {joined ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: "16px 24px",
              borderRadius: "16px",
              backgroundColor: "rgba(1, 117, 255, 0.14)",
              border: "1px solid rgba(1, 117, 255, 0.4)",
              color: "#ffffff",
              fontSize: "15px",
            }}
          >
            You’re on the early-access list ({email}). We’ll be in touch soon!
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setJoined(true);
            }}
            style={{
              display: "flex",
              gap: "10px",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              required
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: "1 1 220px",
                padding: "12px 18px",
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <GlowButton type="submit" label="Get Early Access" size="sm" />
          </form>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            color: "#9ba9c4",
          }}
        >
          <div style={{ display: "flex" }}>
            {[
              "/assets/KUGxz5L9S9WjGZRGJlIwmhqwBg.png",
              "/assets/b4z7WmIZYFbwo09Wv5YgPQVk.png",
              "/assets/zfmF1iFYDX2iAwx2tDdmHAHKsKY.png",
            ].map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #000",
                  marginLeft: i > 0 ? "-8px" : 0,
                }}
              />
            ))}
          </div>
          <span>2,300+ People already joined</span>
        </div>
      </div>
    </SubpageHero>
  );
};
