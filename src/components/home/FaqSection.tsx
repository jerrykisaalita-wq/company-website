import React from "react";
import { homeData } from "../../data/homeData";
import { SectionHeader } from "../ui/SectionHeader";
import { FaqAccordion } from "../ui/FaqAccordion";

export const FaqSection: React.FC = () => {
  const fq = homeData.faq;

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0",
        backgroundColor: "#000000",
        overflow: "clip",
      }}
    >
      <img
        src="/assets/PEUUUxYckhxt8G82fn4Y0LPz5s.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "52%",
          transform: "translate(-50%, -50%)",
          width: "130%",
          maxWidth: "1600px",
          height: "auto",
          opacity: 0.42,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="cosmoq-container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          tag={fq.tag}
          tagIcon={fq.tagIcon}
          title={fq.title}
          subtitle={fq.subtitle}
        />
        <FaqAccordion items={fq.items} />
      </div>
    </section>
  );
};
