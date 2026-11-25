export interface IntegrationRecommendation {
  badge: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaTo: string;
}

export interface IntegrationGroup {
  id: string;
  label: string;
  icon: string;
  recommendation?: IntegrationRecommendation;
  items: { id: string; name: string }[];
}

export const integrationData = {
  tag: "INTEGRATION",
  tagIcon: "/assets/A2kRK4SXq8SQGtD1igJ3QJKmUH4.svg",
  title: "Freedom to choose\nyour integrations",
  subtitle:
    "Connect leading enterprise cloud, AI, CRM, and IT platforms — or unlock peak performance on FLEXIE’s native CRM & IT Service suite.",
  floatingBadges: [
    "/assets/tvQfBEg3hB7cPLbocYEcF5EWk.svg",
    "/assets/uDiEITHc5AxrEHktxqnkewtKyOI.svg",
    "/assets/s2WmwiK8dvHjojSKwekURV4cihk.svg",
    "/assets/9A8GWfaPfDTNJf961Cb2wGCA0.svg",
  ],
  groups: [
    {
      id: "cloud",
      label: "Cloud providers",
      icon: "/assets/FxEOil6nX0O1YiT8NqBA6CuPjk.svg",
      items: [
        { id: "aws", name: "AWS" },
        { id: "azure", name: "Microsoft Azure" },
        { id: "gcp", name: "Google Cloud" },
        { id: "ibm-cloud", name: "IBM Cloud" },
        { id: "oracle-cloud", name: "Oracle Cloud" },
        { id: "cloudflare", name: "Cloudflare" },
        { id: "vercel", name: "Vercel" },
      ],
    },
    {
      id: "models",
      label: "AI Models",
      icon: "/assets/DpJgc41fQAQ6G7aGAPrOIUeqc1o.svg",
      items: [
        { id: "openai", name: "OpenAI" },
        { id: "anthropic", name: "Anthropic" },
        { id: "gemini", name: "Google Gemini" },
        { id: "meta-llama", name: "Meta AI" },
        { id: "nvidia", name: "NVIDIA" },
        { id: "mistral", name: "Mistral AI" },
      ],
    },
    {
      id: "crm",
      label: "CRM",
      icon: "/assets/bu7RlsAfODHvovRK0wCcZpyl02Q.svg",
      recommendation: {
        badge: "RECOMMENDED · FLEXIE NATIVE CRM",
        headline: "Built for peak performance with FLEXIE AI Agents",
        body: "While FLEXIE integrates seamlessly with major third-party CRMs, we offer a native FLEXIE CRM built specifically to operate in lockstep with our AI Agents — delivering real-time customer context, zero sync latency, and deeper autonomous execution. For the smoothest, most reliable experience, we recommend switching to FLEXIE’s built-in CRM.",
        ctaLabel: "Switch to FLEXIE CRM",
        ctaTo: "/contact",
      },
      items: [
        { id: "salesforce", name: "Salesforce" },
        { id: "hubspot", name: "HubSpot" },
        { id: "dynamics", name: "Microsoft Dynamics 365" },
        { id: "zoho", name: "Zoho CRM" },
        { id: "sap", name: "SAP" },
        { id: "oracle-cx", name: "Oracle CX" },
      ],
    },
    {
      id: "itsm",
      label: "IT Service",
      icon: "/assets/6RkZMrElNkxVTrZwmfDuExPXvtg.svg",
      recommendation: {
        badge: "RECOMMENDED · FLEXIE NATIVE IT SERVICE",
        headline: "Engineered end-to-end for autonomous IT operations",
        body: "FLEXIE connects smoothly with leading external ITSM tools, yet our native FLEXIE IT Service suite is engineered from the ground up around our AI Agents — unlocking instant ticket resolution, automated triage, and frictionless escalations. For a faster, smoother experience, we recommend switching to FLEXIE’s native IT Service platform.",
        ctaLabel: "Switch to FLEXIE IT Service",
        ctaTo: "/contact",
      },
      items: [
        { id: "servicenow", name: "ServiceNow" },
        { id: "jira", name: "Jira Service" },
        { id: "zendesk", name: "Zendesk" },
        { id: "freshservice", name: "Freshservice" },
        { id: "pagerduty", name: "PagerDuty" },
        { id: "datadog", name: "Datadog" },
      ],
    },
  ] as IntegrationGroup[],
};
