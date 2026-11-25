import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollWordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  colorStart: string;
  colorEnd: string;
}

const ScrollWord: React.FC<ScrollWordProps> = ({
  word,
  index,
  total,
  progress,
  colorStart,
  colorEnd,
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const color = useTransform(progress, [start, end], [colorStart, colorEnd]);

  return (
    <motion.span style={{ color, display: "inline" }}>{word}</motion.span>
  );
};

interface ScrollColorTextProps {
  content: string;
  colorStart?: string;
  colorEnd?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Faithful React port of COSMOQ's ScrollColorText.DWVdw1bt.mjs:
 * As the text travels from viewport bottom to center, each word interpolates
 * smoothly from muted grey to crisp white.
 */
export const ScrollColorText: React.FC<ScrollColorTextProps> = ({
  content,
  colorStart = "rgba(255, 255, 255, 0.22)",
  colorEnd = "#ffffff",
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.90", "end 0.42"],
  });

  const tokens = useMemo(() => content.split(/(\s+)/), [content]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        wordWrap: "break-word",
        overflowWrap: "break-word",
        whiteSpace: "normal",
        ...style,
      }}
    >
      {tokens.map((word, idx) => (
        <ScrollWord
          key={`${idx}-${word}`}
          word={word}
          index={idx}
          total={tokens.length}
          progress={scrollYProgress}
          colorStart={colorStart}
          colorEnd={colorEnd}
        />
      ))}
    </div>
  );
};
