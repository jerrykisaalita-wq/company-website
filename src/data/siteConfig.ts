export interface NavLink {
  label: string;
  to: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; to: string; external?: boolean }[];
}

export const siteConfig = {
  brandName: "FLEXIE",
  brandTagline: "AI Agents, Design, Software & Brand Studio",
  logoSvgPath: "/assets/flexie-logo.svg",
  faviconPath: "/assets/favicon.png",

  navLinks: [
    { label: "AI Solutions", to: "/ai-solutions" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ] as NavLink[],

  primaryCta: {
    label: "Get Started",
    to: "/contact",
  },

  footerCta: {
    heading: "Step Into FLEXIE The Future of Intelligent Agents",
    subtext:
      "Everything your brand needs — AI agents, software engineering, mobile apps, UI/UX design, and identity in one studio.",
    ctaLabel: "Get Started",
    ctaTo: "/contact",
    bgImage: "/assets/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp",
  },

  footerColumns: [
    {
      title: "Navigation",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Integration", to: "/integration" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Documentation",
      links: [
        { label: "Blogs", to: "/blog" },
        { label: "Changelog", to: "/changelog" },
        { label: "Privacy policy", to: "/privacy-policy/privacy-policy" },
        {
          label: "Terms and Conditions",
          to: "/privacy-policy/terms-and-conditions",
        },
      ],
    },
    {
      title: "Social Connect",
      links: [
        { label: "Instagram", to: "https://www.instagram.com/", external: true },
        { label: "X/twitter", to: "https://x.com/", external: true },
        { label: "Linkedin", to: "https://www.linkedin.com/", external: true },
        { label: "Reddit", to: "https://www.reddit.com/", external: true },
      ],
    },
  ] as FooterColumn[],

  copyrightText: "All rights reserved for @FLEXIE",
};
