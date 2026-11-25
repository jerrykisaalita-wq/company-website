import React from "react";

interface LogoItem {
  name: string;
  render: () => React.ReactNode;
}

/**
 * Monochrome white-on-black art-style logos of the Top 10 Big Tech companies
 * matching the clean editorial B&W aesthetic of the hero partner bar.
 */
export const BIG_TECH_LOGOS: LogoItem[] = [
  {
    name: "Apple",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 24 28" width="22" height="26" fill="currentColor" aria-hidden>
          <path d="M19.66 14.84c-.03-3.11 2.54-4.61 2.66-4.68-1.45-2.12-3.71-2.41-4.51-2.44-1.92-.2-3.75 1.13-4.72 1.13-.97 0-2.48-1.1-4.08-1.07-2.1.03-4.03 1.22-5.11 3.1-2.18 3.78-.56 9.38 1.56 12.45 1.04 1.5 2.27 3.19 3.89 3.13 1.56-.06 2.15-1.01 4.04-1.01 1.88 0 2.42 1.01 4.07.98 1.68-.03 2.75-1.53 3.77-3.03 1.19-1.74 1.68-3.42 1.71-3.51-.04-.02-3.25-1.25-3.28-5.05ZM16.56 5.69c.86-1.04 1.44-2.49 1.28-3.94-1.24.05-2.74.83-3.63 1.87-.8.92-1.5 2.4-1.31 3.82 1.38.11 2.8-.71 3.66-1.75Z" />
        </svg>
        <span style={wordStyle}>Apple</span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <rect x="1" y="1" width="10" height="10" />
          <rect x="13" y="1" width="10" height="10" opacity="0.85" />
          <rect x="1" y="13" width="10" height="10" opacity="0.85" />
          <rect x="13" y="13" width="10" height="10" />
        </svg>
        <span style={wordStyle}>Microsoft</span>
      </div>
    ),
  },
  {
    name: "Google",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24Z" />
        </svg>
        <span style={wordStyle}>Google</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    render: () => (
      <div style={itemWrapStyle}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <span style={{ ...wordStyle, fontWeight: 700, letterSpacing: "-0.02em" }}>amazon</span>
          <svg viewBox="0 0 80 14" width="62" height="11" fill="none" aria-hidden style={{ marginTop: "-1px" }}>
            <path d="M6 3C24 12 50 12 70 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M65 2L72 4L68 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    name: "Meta",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 36 24" width="28" height="19" fill="none" aria-hidden>
          <path
            d="M10.2 5C6.4 5 3 9.2 3 14.3 3 17.8 5.2 20 8.1 20c3.1 0 5.3-2.9 7.9-7.2 2.6-4.3 4.8-7.8 8.3-7.8C28.8 5 33 9.2 33 14.3c0 3.5-2.2 5.7-5.1 5.7-3.2 0-5.4-2.8-8.1-7.4"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
        <span style={wordStyle}>Meta</span>
      </div>
    ),
  },
  {
    name: "NVIDIA",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 28 20" width="26" height="18" fill="none" aria-hidden>
          <path
            d="M2 10C6.5 4.2 12.2 2.5 18 3.6c3.8.7 6.5 3.1 8 6.4-2.2 3.8-6.4 6.2-11.2 6.2-3.4 0-6.5-1.1-8.8-3.1 2.2-2.6 5.4-4.1 8.8-4.1 2.5 0 4.6 1 5.8 2.6-1.2 1.1-3 1.8-5.1 1.8-2.2 0-4.1-.8-5.2-2.1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span style={{ ...wordStyle, fontWeight: 700, letterSpacing: "0.06em", fontSize: "16px" }}>NVIDIA</span>
      </div>
    ),
  },
  {
    name: "Tesla",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden>
          <path d="M12 5.5c4.1 0 7.7.7 10 1.9l-.9 1.6C18.8 7.9 15.6 7.3 12 7.3S5.2 7.9 2.9 9L2 7.4C4.3 6.2 7.9 5.5 12 5.5Zm-8.5 4.4c2.4-.9 5.4-1.4 8.5-1.4s6.1.5 8.5 1.4l-.8 1.4c-1.8-.6-3.9-.9-6-.9L12 22l-1.7-11.6c-2.1 0-4.2.3-6 .9l-.8-1.4Z" />
        </svg>
        <span style={{ ...wordStyle, letterSpacing: "0.24em", fontSize: "15px", fontWeight: 600 }}>TESLA</span>
      </div>
    ),
  },
  {
    name: "Netflix",
    render: () => (
      <div style={itemWrapStyle}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "19px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          NETFLIX
        </span>
      </div>
    ),
  },
  {
    name: "OpenAI",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden>
          <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07ZM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.49 4.49Zm-9.66-4.13a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97V11.6a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14a4.5 4.5 0 0 1-1.65-6.1Zm16.6 3.86-5.83-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.69Zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66ZM8.31 12.86 6.29 11.7a.08.08 0 0 1-.04-.06V6.06a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.8.8 0 0 0-.39.68Zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5Z" />
        </svg>
        <span style={wordStyle}>OpenAI</span>
      </div>
    ),
  },
  {
    name: "IBM",
    render: () => (
      <div style={itemWrapStyle}>
        <svg viewBox="0 0 64 26" width="54" height="22" fill="currentColor" aria-hidden>
          {/* Classic 8-bar IBM horizontal-stripe B&W emblem */}
          <rect x="2" y="2" width="12" height="2" />
          <rect x="2" y="5.5" width="12" height="2" />
          <rect x="5" y="9" width="6" height="2" />
          <rect x="5" y="12.5" width="6" height="2" />
          <rect x="5" y="16" width="6" height="2" />
          <rect x="2" y="19.5" width="12" height="2" />
          <rect x="2" y="23" width="12" height="2" />

          <rect x="18" y="2" width="16" height="2" />
          <rect x="18" y="5.5" width="18" height="2" />
          <rect x="21" y="9" width="5" height="2" />
          <rect x="31" y="9" width="5" height="2" />
          <rect x="21" y="12.5" width="13" height="2" />
          <rect x="21" y="16" width="5" height="2" />
          <rect x="31" y="16" width="5" height="2" />
          <rect x="18" y="19.5" width="18" height="2" />
          <rect x="18" y="23" width="16" height="2" />

          <rect x="40" y="2" width="7" height="2" />
          <rect x="55" y="2" width="7" height="2" />
          <rect x="40" y="5.5" width="9" height="2" />
          <rect x="53" y="5.5" width="9" height="2" />
          <rect x="42" y="9" width="18" height="2" />
          <rect x="42" y="12.5" width="18" height="2" />
          <rect x="42" y="16" width="5" height="2" />
          <rect x="49" y="16" width="4" height="2" />
          <rect x="55" y="16" width="5" height="2" />
          <rect x="40" y="19.5" width="7" height="2" />
          <rect x="50" y="19.5" width="2" height="2" />
          <rect x="55" y="19.5" width="7" height="2" />
          <rect x="40" y="23" width="7" height="2" />
          <rect x="55" y="23" width="7" height="2" />
        </svg>
      </div>
    ),
  },
];

const itemWrapStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: "rgba(255, 255, 255, 0.56)",
  transition: "color 0.25s ease",
  flexShrink: 0,
  userSelect: "none",
};

const wordStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "18px",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  whiteSpace: "nowrap",
};

export const BigTechLogos: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1120px",
        marginTop: "52px",
        overflow: "hidden",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className="animate-marquee"
        style={{
          alignItems: "center",
          padding: "14px 0",
        }}
      >
        {[0, 1].map((trackIdx) => (
          <div
            key={trackIdx}
            aria-hidden={trackIdx === 1}
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {BIG_TECH_LOGOS.map((logo) => (
              <div
                key={`${trackIdx}-${logo.name}`}
                title={logo.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                  marginRight: "68px",
                }}
              >
                {logo.render()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
