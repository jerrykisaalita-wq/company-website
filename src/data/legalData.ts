export interface LegalSection {
  title: string;
  intro?: string;
  bullets?: string[];
  outro?: string;
}

export interface LegalDoc {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  preamble: string;
  sections: LegalSection[];
}

export const legalData: Record<string, LegalDoc> = {
  "privacy-policy": {
    slug: "privacy-policy",
    tag: "POLICY",
    title: "Privacy Policy",
    subtitle:
      "We safeguard your data so you can focus on reimagining the enterprise.",
    effectiveDate: "Effective as of September 22, 2025",
    preamble:
      "This Privacy Policy (“Policy”) explains how FLEXIE (“we,” “our,” or “us”) collects, uses, and protects information in connection with the FLEXIE AI Agent platform and digital agency services (“Services”). By accessing or using our Services, you agree to the practices described in this Policy.",
    sections: [
      {
        title: "1. Information We Collect",
        intro:
          "We collect limited information necessary to operate and improve the Services, including:",
        bullets: [
          "Account Details: Name, email, company, and credentials you provide during registration.",
          "Usage Data: Device type, browser, IP address, and interactions with the platform.",
          "Content & Inputs: Data you submit, upload, or generate while using FLEXIE.",
          "Cookies & Tracking: To enhance functionality and provide personalized experiences.",
        ],
      },
      {
        title: "2. How We Use Information",
        intro: "Your information is used solely for legitimate purposes, including:",
        bullets: [
          "Delivering and maintaining the Services.",
          "Improving AI-driven features and user experiences.",
          "Communicating updates, insights, and support.",
          "Protecting against misuse, fraud, and unauthorized access.",
          "Complying with applicable legal and regulatory requirements.",
        ],
      },
      {
        title: "3. Data Ownership and Rights",
        intro:
          "You retain full ownership of the data you provide. By using the Services, you grant FLEXIE a limited right to store, process, and analyze your data exclusively for delivering and enhancing the Services.",
        outro:
          "You may request access, correction, deletion, or restriction of your personal information in line with applicable privacy laws.",
      },
      {
        title: "4. Sharing and Disclosure",
        intro: "We do not sell or trade your data. Information may be shared only:",
        bullets: [
          "With trusted third-party providers that enable our Services, under strict confidentiality.",
          "When required by law, regulation, or legal process.",
          "To safeguard the security, rights, and integrity of FLEXIE and its users.",
        ],
      },
      {
        title: "5. Data Security",
        intro:
          "We employ robust safeguards, including encryption, secure storage, and controlled access, to protect your information. While we take extensive precautions, you acknowledge that no online system is entirely risk-free.",
      },
      {
        title: "6. Data Retention",
        intro:
          "We retain your information only as long as necessary to provide the Services, comply with legal obligations, or resolve disputes.",
      },
      {
        title: "7. Cookies and Tracking",
        intro:
          "FLEXIE uses cookies and similar technologies to optimize performance, personalize features, and analyze usage trends.",
      },
      {
        title: "8. Policy Updates",
        intro:
          "We may revise this Policy periodically to reflect changes in technology, practices, or laws.",
      },
      {
        title: "9. Contact Us",
        intro:
          "If you have any questions or concerns about this Policy or your data, please contact us via our Contact page.",
      },
    ],
  },
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    tag: "POLICY",
    title: "Terms and Conditions",
    subtitle: "Your agreement with us for a secure, reliable experience.",
    effectiveDate: "Effective as of September 22, 2025",
    preamble:
      "These Terms and Conditions (“Terms”) govern your access to and use of the FLEXIE AI Agent platform and agency services (“Services”). By using our Services, you agree to comply with these Terms.",
    sections: [
      {
        title: "1. Eligibility and Access",
        intro:
          "To use the Services, you must be at least 18 years old and legally able to enter into binding agreements.",
        bullets: [
          "You are responsible for keeping your account credentials secure.",
          "Any activity under your account will be treated as your responsibility.",
          "You must provide accurate and up-to-date information when registering.",
        ],
      },
      {
        title: "2. Acceptable Use",
        intro:
          "The platform must be used only for lawful and authorized purposes in connection with your business or professional activities. You agree not to:",
        bullets: [
          "Upload or share unlawful, harmful, or infringing content.",
          "Attempt to interfere with, probe, or exploit the platform’s security.",
          "Copy, modify, resell, or distribute any part of the Services without written consent.",
          "Engage in fraudulent, misleading, or abusive activity.",
        ],
      },
      {
        title: "3. Intellectual Property",
        intro:
          "All software, content, branding, and technology related to FLEXIE are the property of FLEXIE or its licensors.",
      },
      {
        title: "4. Confidentiality and Data",
        intro: "We respect your privacy and safeguard your data as outlined in our Privacy Policy.",
      },
      {
        title: "5. Service Modifications",
        intro:
          "FLEXIE may update, modify, or discontinue features of the Services at any time to reflect evolving technology, business needs, or legal obligations.",
      },
      {
        title: "6. Termination of Use",
        intro:
          "We reserve the right to suspend or terminate your access without notice if you violate these Terms or pose a risk to system security.",
      },
      {
        title: "7. Limitation of Liability",
        intro:
          "To the fullest extent permitted by law, FLEXIE is not liable for indirect, incidental, or consequential damages resulting from use of the Services.",
      },
      {
        title: "8. Governing Law",
        intro:
          "These Terms are governed by the laws of the jurisdiction in which FLEXIE operates.",
      },
      {
        title: "9. Contact Us",
        intro: "For questions regarding these Terms, please contact us.",
      },
    ],
  },
};
