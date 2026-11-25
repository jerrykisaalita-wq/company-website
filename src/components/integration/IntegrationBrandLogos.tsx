import React from "react";

interface IntegrationBrandLogoProps {
  id: string;
  name: string;
}

const wrapStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
  color: "rgba(255, 255, 255, 0.88)",
  userSelect: "none",
  maxWidth: "100%",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "-0.015em",
  whiteSpace: "nowrap",
  lineHeight: 1.1,
};

const BRAND_MARKS: Record<string, () => React.ReactNode> = {
  // ─── Cloud Providers ───────────────────────────────────────────────────────
  aws: () => (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1, color: "rgba(255,255,255,0.9)" }}>
      <span style={{ ...labelStyle, fontSize: "17px", fontWeight: 700, letterSpacing: "0.02em" }}>aws</span>
      <svg viewBox="0 0 64 14" width="46" height="10" fill="none" aria-hidden style={{ marginTop: "-1px" }}>
        <path d="M4 3C20 11 42 11 58 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M53 2L59 4L56 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ),
  azure: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <rect x="2" y="2" width="9" height="9" />
        <rect x="13" y="2" width="9" height="9" opacity="0.82" />
        <rect x="2" y="13" width="9" height="9" opacity="0.82" />
        <rect x="13" y="13" width="9" height="9" />
      </svg>
      <span style={labelStyle}>Azure</span>
    </div>
  ),
  gcp: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 28 22" width="22" height="17" fill="none" aria-hidden>
        <path
          d="M21.5 18.5H7.2a4.7 4.7 0 0 1-.6-9.36A6.5 6.5 0 0 1 19 7.8a5.3 5.3 0 0 1 2.5 10.7Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
      <span style={labelStyle}>Google Cloud</span>
    </div>
  ),
  "ibm-cloud": () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 64 26" width="44" height="18" fill="currentColor" aria-hidden>
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
      <span style={labelStyle}>Cloud</span>
    </div>
  ),
  "oracle-cloud": () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 32 18" width="26" height="15" fill="none" aria-hidden>
        <rect x="2" y="2" width="28" height="14" rx="7" stroke="currentColor" strokeWidth="3.2" />
      </svg>
      <span style={{ ...labelStyle, letterSpacing: "0.08em", fontWeight: 600 }}>ORACLE</span>
    </div>
  ),
  cloudflare: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 32 20" width="26" height="16" fill="currentColor" aria-hidden>
        <path d="M23.8 16.5H6.2a4.2 4.2 0 0 1-.4-8.38A5.8 5.8 0 0 1 17 5.2a4.9 4.9 0 0 1 5.6 4.1 3.7 3.7 0 0 1 1.2 7.2Z" />
      </svg>
      <span style={labelStyle}>Cloudflare</span>
    </div>
  ),
  vercel: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 22" width="18" height="16" fill="currentColor" aria-hidden>
        <path d="M12 2 23 21H1L12 2Z" />
      </svg>
      <span style={{ ...labelStyle, fontSize: "15px", fontWeight: 600 }}>Vercel</span>
    </div>
  ),

  // ─── AI Models ─────────────────────────────────────────────────────────────
  openai: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07ZM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.49 4.49Zm-9.66-4.13a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65ZM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97V11.6a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L3.99 14a4.5 4.5 0 0 1-1.65-6.1Zm16.6 3.86-5.83-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.69Zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66ZM8.31 12.86 6.29 11.7a.08.08 0 0 1-.04-.06V6.06a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.8.8 0 0 0-.39.68Zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5Z" />
      </svg>
      <span style={labelStyle}>OpenAI</span>
    </div>
  ),
  anthropic: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 26 20" width="21" height="16" fill="currentColor" aria-hidden>
        <path d="M15.4 2h3.2L25 18h-3.1l-6.5-16Zm-6.8 0h3.3L18.3 18h-3.1l-1.4-3.7H6.7L5.3 18H2.2L8.6 2Zm4.1 9.5L10.3 5 7.8 11.5h4.9Z" />
      </svg>
      <span style={{ ...labelStyle, letterSpacing: "0.03em" }}>Anthropic</span>
    </div>
  ),
  gemini: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden>
        <path d="M12 1C12 7.1 7.1 12 1 12c6.1 0 11 4.9 11 11 0-6.1 4.9-11 11-11-6.1 0-11-4.9-11-11Z" />
      </svg>
      <span style={labelStyle}>Gemini</span>
    </div>
  ),
  "meta-llama": () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 36 24" width="24" height="16" fill="none" aria-hidden>
        <path
          d="M10.2 5C6.4 5 3 9.2 3 14.3 3 17.8 5.2 20 8.1 20c3.1 0 5.3-2.9 7.9-7.2 2.6-4.3 4.8-7.8 8.3-7.8C28.8 5 33 9.2 33 14.3c0 3.5-2.2 5.7-5.1 5.7-3.2 0-5.4-2.8-8.1-7.4"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
      <span style={labelStyle}>Meta AI</span>
    </div>
  ),
  nvidia: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 28 20" width="22" height="16" fill="none" aria-hidden>
        <path
          d="M2 10C6.5 4.2 12.2 2.5 18 3.6c3.8.7 6.5 3.1 8 6.4-2.2 3.8-6.4 6.2-11.2 6.2-3.4 0-6.5-1.1-8.8-3.1 2.2-2.6 5.4-4.1 8.8-4.1 2.5 0 4.6 1 5.8 2.6-1.2 1.1-3 1.8-5.1 1.8-2.2 0-4.1-.8-5.2-2.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ ...labelStyle, fontWeight: 700, letterSpacing: "0.05em" }}>NVIDIA</span>
    </div>
  ),
  mistral: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 18" width="20" height="15" fill="currentColor" aria-hidden>
        <rect x="2" y="2" width="4" height="4" />
        <rect x="18" y="2" width="4" height="4" />
        <rect x="2" y="7" width="8" height="4" />
        <rect x="14" y="7" width="8" height="4" />
        <rect x="2" y="12" width="4" height="4" />
        <rect x="10" y="12" width="4" height="4" />
        <rect x="18" y="12" width="4" height="4" />
      </svg>
      <span style={labelStyle}>Mistral AI</span>
    </div>
  ),

  // ─── CRM ───────────────────────────────────────────────────────────────────
  salesforce: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 30 22" width="24" height="17" fill="currentColor" aria-hidden>
        <path d="M12.6 4.2a5.1 5.1 0 0 1 4.2-2.2 5.3 5.3 0 0 1 5 3.6 4.2 4.2 0 0 1 5.8 3.9 4.3 4.3 0 0 1-4.3 4.3h-.2a3.7 3.7 0 0 1-3.4 2.3 3.9 3.9 0 0 1-1.9-.5 4.5 4.5 0 0 1-8.2-.4 3.9 3.9 0 0 1-5-3.7 4 4 0 0 1 2.9-3.8 4.8 4.8 0 0 1 5.1-3.5Z" />
      </svg>
      <span style={labelStyle}>Salesforce</span>
    </div>
  ),
  hubspot: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden>
        <circle cx="14.5" cy="12" r="3.6" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="5.5" cy="8.5" r="2" fill="currentColor" />
        <circle cx="5.5" cy="16.5" r="1.6" fill="currentColor" />
        <circle cx="14.5" cy="4" r="1.8" fill="currentColor" />
        <path d="M14.5 5.8v2.6M7.3 9.2l3.8 1.5M7 15.8l4.1-2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
      <span style={labelStyle}>HubSpot</span>
    </div>
  ),
  dynamics: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <rect x="2" y="2" width="9" height="9" />
        <rect x="13" y="2" width="9" height="9" opacity="0.82" />
        <rect x="2" y="13" width="9" height="9" opacity="0.82" />
        <rect x="13" y="13" width="9" height="9" />
      </svg>
      <span style={labelStyle}>Dynamics 365</span>
    </div>
  ),
  zoho: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 28 20" width="22" height="16" fill="none" aria-hidden>
        <rect x="2" y="5" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="2" transform="rotate(-8 5.5 9.5)" />
        <rect x="11" y="5" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="2" transform="rotate(6 14.5 9.5)" />
        <rect x="19" y="5" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="2" transform="rotate(-6 22.5 9.5)" />
      </svg>
      <span style={labelStyle}>Zoho CRM</span>
    </div>
  ),
  sap: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 38 18" width="32" height="15" fill="none" aria-hidden>
        <path d="M2 2h34L27 16H2V2Z" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span style={{ ...labelStyle, fontWeight: 700, letterSpacing: "0.08em" }}>SAP</span>
    </div>
  ),
  "oracle-cx": () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 32 18" width="26" height="15" fill="none" aria-hidden>
        <rect x="2" y="2" width="28" height="14" rx="7" stroke="currentColor" strokeWidth="3.2" />
      </svg>
      <span style={labelStyle}>Oracle CX</span>
    </div>
  ),

  // ─── IT Service ────────────────────────────────────────────────────────────
  servicenow: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden>
        <path
          d="M12 3a9 9 0 0 1 9 9 8.9 8.9 0 0 1-2.3 6 3 3 0 0 1-4.1.2 4.2 4.2 0 0 0-5.2 0 3 3 0 0 1-4.1-.2A8.9 8.9 0 0 1 3 12a9 9 0 0 1 9-9Z"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle cx="12" cy="11.5" r="2.2" fill="currentColor" />
      </svg>
      <span style={labelStyle}>ServiceNow</span>
    </div>
  ),
  jira: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M12 2 22 12l-3.6 3.6L12 9.2l-2.8 2.8-3.6-3.6L12 2Zm0 9.6 5.6 5.6L14 20.8l-2-2-3.6-3.6L12 11.6Z" />
      </svg>
      <span style={labelStyle}>Jira Service</span>
    </div>
  ),
  zendesk: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 20" width="20" height="16" fill="currentColor" aria-hidden>
        <path d="M2 3h9L2 14V3Zm20 14h-9l9-11v11ZM11 17a4.5 4.5 0 0 1-9 0h9Zm2-14a4.5 4.5 0 0 1 9 0h-9Z" />
      </svg>
      <span style={labelStyle}>Zendesk</span>
    </div>
  ),
  freshservice: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path
          d="M12 3h6a3 3 0 0 1 3 3v6a9 9 0 1 1-9-9Z"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path d="M8.5 12.5 11 15l5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={labelStyle}>Freshservice</span>
    </div>
  ),
  pagerduty: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M6 3h7.2a5.3 5.3 0 0 1 0 10.6H9.4V21H6V3Zm3.4 3.1v4.4h3.7a2.2 2.2 0 1 0 0-4.4H9.4Z" />
      </svg>
      <span style={labelStyle}>PagerDuty</span>
    </div>
  ),
  datadog: () => (
    <div style={wrapStyle}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path
          d="M12 2 20 5.5v6.2c0 4.8-3.4 8.5-8 10.3-4.6-1.8-8-5.5-8-10.3V5.5L12 2Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path d="M7.5 12.5h2.5l1.5-3 2 5 1.5-2h1.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={labelStyle}>Datadog</span>
    </div>
  ),
};

export const IntegrationBrandLogo: React.FC<IntegrationBrandLogoProps> = ({
  id,
  name,
}) => {
  const renderMark = BRAND_MARKS[id];
  if (renderMark) return <>{renderMark()}</>;
  return <span style={labelStyle}>{name}</span>;
};
