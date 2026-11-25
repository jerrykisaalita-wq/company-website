import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqCard: React.FC<{ item: FaqItem; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
      transition={{
        duration: 0.45,
        delay: (index % 4) * 0.07,
        ease: [0.12, 0.23, 0.5, 1],
      }}
      style={{
        backgroundColor: "#0a0d14",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: "22px 24px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1.4,
          }}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", damping: 34, mass: 0.9, stiffness: 360 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            color: "#ffffff",
            flexShrink: 0,
          }}
        >
          <Plus size={18} strokeWidth={1.8} />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 34, mass: 0.9, stiffness: 360 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                margin: "14px 0 0",
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#9ba9c4",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const half = Math.ceil(items.length / 2);
  const left = items.slice(0, half);
  const right = items.slice(half);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
        gap: "20px",
        alignItems: "start",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {left.map((item, idx) => (
          <FaqCard key={item.question} item={item} index={idx} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {right.map((item, idx) => (
          <FaqCard key={item.question} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
};
