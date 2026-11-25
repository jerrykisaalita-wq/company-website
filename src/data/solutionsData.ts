export interface SolutionFeature {
  title: string;
  description: string;
  image: string;
}

export interface SolutionUseCase {
  tab: string;
  heading: string;
  description: string;
  points: string[];
  image: string;
}

export interface SolutionBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionDetail {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  cardBanner: string;
  featuresTitle: string;
  features: SolutionFeature[];
  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: SolutionUseCase[];
  whyTitle: string;
  whySubtitle: string;
  benefits: SolutionBenefit[];
}

export const solutionsOverviewData = {
  tag: "SOLUTIONS",
  tagIcon: "/assets/kSe62iNOdnrgkLKL07t29GUEak.svg",
  title: "Discover the Power\nof Flexie",
  subtitle:
    "Explore our suite of AI-driven solutions, product design, software engineering, and branding services.",
  cards: [
    {
      slug: "ai-for-work",
      title: "AI for Work",
      description: "Search silos, automate workflows, and govern confidently.",
      banner: "/assets/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
      rightTitle: "Productivity at scale",
      bullets: [
        "Enterprise Search",
        "AI Agent Builder",
        "Intelligent Orchestrator",
        "Admin Controls",
      ],
    },
    {
      slug: "ai-for-service",
      title: "AI for Service",
      description: "Leverage AI agents to empower customers and personalize.",
      banner: "/assets/pSxYz80kLUKNMKdnW99z0alJYJ0.png",
      rightTitle: "Redefine the CX",
      bullets: [
        "Agentic Contact Center",
        "Agent AI Assistance",
        "Quality Assurance",
        "Outbound Campaigns",
      ],
    },
    {
      slug: "ai-for-process",
      title: "AI for Process",
      description:
        "Simplify complex business processes with autonomous AI agents.",
      banner: "/assets/yxLTC9cANtOH1hhf7cA7mlRT8.png",
      rightTitle: "Process Intelligence",
      bullets: [
        "Process automation",
        "AI analytics + monitoring",
        "Pre-built process templates",
        "Seamless System Integration",
      ],
    },
  ],
  agencyCards: [
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "Craft intuitive interfaces, interactive prototypes, and cohesive multi-platform design systems.",
      banner: "/assets/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
      rightTitle: "Experience Architecture",
      bullets: [
        "Product & Interface Design",
        "Scalable Design Systems",
        "UX Research & Wireframing",
        "Interactive Motion Prototypes",
      ],
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Build flagship iOS and Android applications powered by native performance and embedded AI.",
      banner: "/assets/pSxYz80kLUKNMKdnW99z0alJYJ0.png",
      rightTitle: "Mobile Engineering",
      bullets: [
        "iOS & Android Native Apps",
        "React Native Cross-Platform",
        "On-Device AI & Voice UX",
        "App Store Launch & Telemetry",
      ],
    },
    {
      slug: "software-development",
      title: "Software Development",
      description:
        "Architect resilient web platforms, enterprise APIs, and production AI-native software systems.",
      banner: "/assets/yxLTC9cANtOH1hhf7cA7mlRT8.png",
      rightTitle: "Full-Stack Systems",
      bullets: [
        "Web Platforms & SaaS",
        "Distributed Cloud & APIs",
        "Custom LLM & Agent Backends",
        "Security & DevOps Automation",
      ],
    },
    {
      slug: "branding",
      title: "Branding",
      description:
        "Shape memorable brand identities, visual languages, and launch assets built for modern tech leaders.",
      banner: "/assets/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
      rightTitle: "Identity & Narrative",
      bullets: [
        "Brand Strategy & Positioning",
        "Logos, Typography & Color Systems",
        "Motion & 3D Art Direction",
        "Comprehensive Brand Playbooks",
      ],
    },
  ],
};

export const solutionDetails: Record<string, SolutionDetail> = {
  "ai-for-work": {
    slug: "ai-for-work",
    tag: "PRODUCTS",
    title: "AI for Work",
    subtitle: "Search silos, automate workflows, and govern confidently.",
    cardBanner: "/assets/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
    featuresTitle: "Productivity at scale",
    features: [
      {
        title: "Enterprise Search",
        description:
          "Find information instantly across tools, teams, and systems. Turn scattered data into fast, unified, intelligent, actionable answers.",
        image: "/assets/JAFiHCatbTzsAuqWSmAKNN7zvsE.png",
      },
      {
        title: "AI Agent Builder",
        description:
          "Design, configure, and deploy custom AI agents without friction, enabling teams to automate repetitive workflows securely.",
        image: "/assets/UgBJAGjjD29VPKkOzaxCyabIMgU.png",
      },
      {
        title: "Intelligent Orchestrator",
        description:
          "Coordinate multi-step agent handoffs across enterprise apps, keeping context intact from prompt to completion.",
        image: "/assets/rrNtQU2aDjYf4aSs1WeRTIkZ3Ws.png",
      },
      {
        title: "Admin Controls",
        description:
          "Protect enterprise data with built-in guardrails, PII masking, and access controls, ensuring secure, compliant, and scalable AI deployment.",
        image: "/assets/jCSaG9tDLaK5W1D60NcPCLAvK78.png",
      },
    ],
    useCasesTitle: "Any use case, one solution",
    useCasesSubtitle:
      "Unify every workflow with one intelligent AI platform built for all teams.",
    useCases: [
      {
        tab: "Marketing",
        heading: "Marketing use cases",
        description:
          "Empower marketing teams to deploy AI agents that integrate with Salesforce Marketing Cloud, Adobe Marketo Engage, Oracle Eloqua, HubSpot, and Demandbase to create campaigns, automate testing, and optimize performance.",
        points: [
          "Discover and analyze campaign insights",
          "Generate high-performing landing page copy",
          "Track competitors and stay updated",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
      {
        tab: "Recruiting",
        heading: "Recruiting use cases",
        description:
          "Accelerate talent acquisition with AI agents that screen resumes, coordinate interviews, and surface top candidates across ATS platforms.",
        points: [
          "Automate candidate screening and matching",
          "Schedule interviews without back-and-forth",
          "Generate role-specific interview scorecards",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
      {
        tab: "Engineering",
        heading: "Engineering use cases",
        description:
          "Empower engineering teams with AI agents integrated with code repositories, testing frameworks, and developer tools to surface existing code, automate documentation, and maintain development speed.",
        points: [
          "Search architecture docs and codebases instantly",
          "Generate detailed feature documentation",
          "Triage incidents and summarize pull requests",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
    ],
    whyTitle: "Why AI for Work?",
    whySubtitle:
      "Simplify work, boost productivity, and unlock enterprise-wide efficiency.",
    benefits: [
      {
        title: "One-prompt control",
        description:
          "Trigger custom or FLEXIE agents to run workflows across apps, systems, and teams using natural language.",
        icon: "/assets/ONFFI40SIu5XBKpS7DpbI6AoFiQ.svg",
      },
      {
        title: "AI-powered productivity",
        description:
          "Access 200+ enterprise-ready AI templates to elevate employee performance and experience.",
        icon: "/assets/hUO59zHqoxPubqUshqfD4pUJeGs.svg",
      },
      {
        title: "Build AI agents easily",
        description:
          "Empower anyone, not just developers, to create, publish, and manage AI agents securely and seamlessly.",
        icon: "/assets/TySVWNut65QwJpR7GO4QnKD0.svg",
      },
    ],
  },

  "ai-for-service": {
    slug: "ai-for-service",
    tag: "PRODUCTS",
    title: "AI for Service",
    subtitle: "Leverage AI agents to empower customers and personalize.",
    cardBanner: "/assets/pSxYz80kLUKNMKdnW99z0alJYJ0.png",
    featuresTitle: "Redefine the CX",
    features: [
      {
        title: "Agentic Contact Center",
        description:
          "Retrieve real-time answers from structured and unstructured enterprise data sources while enforcing role-based access controls.",
        image: "/assets/Qp9zWMB3qCWxa1uXAgG1Hu0nF98.png",
      },
      {
        title: "Agent AI Assistance",
        description:
          "Equip human support teams with live suggestions, instant context summaries, and automated next-best actions.",
        image: "/assets/vcYzdIgVuL0Sa8NA5T3wViTU4us.png",
      },
      {
        title: "Quality Assurance",
        description:
          "Audit 100% of customer conversations automatically for sentiment, compliance, and resolution accuracy.",
        image: "/assets/pT3dLoHeu2ffJaj94Wt4blOSW4.png",
      },
      {
        title: "Outbound Campaigns",
        description:
          "Engage customers proactively with personalized follow-ups, renewals, and service updates at scale.",
        image: "/assets/ZCiMEO824CkzcSXDpbMciv6gM.png",
      },
    ],
    useCasesTitle: "Any use case, one solution",
    useCasesSubtitle:
      "From marketing to operations, manage everything with a single AI solution.",
    useCases: [
      {
        tab: "Retail",
        heading: "Retail Usecases",
        description:
          "An AI-driven retail assistant that delivers seamless, 24/7 support to boost engagement, increase retention, and drive business growth.",
        points: [
          "Always-available digital assistants",
          "Context-aware, human-like interactions",
          "Empowered and efficient contact teams",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
      {
        tab: "Banking",
        heading: "Banking Usecases",
        description:
          "Deliver secure, compliant financial support that resolves account inquiries, card controls, and fraud alerts in seconds.",
        points: [
          "Real-time identity & policy verification",
          "Instant dispute intake and routing",
          "24/7 multilingual customer resolution",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
      {
        tab: "Healthcare",
        heading: "Healthcare Usecases",
        description:
          "Streamline patient scheduling, intake triage, and benefits verification while maintaining strict privacy controls.",
        points: [
          "Automated appointment scheduling",
          "HIPAA-ready data handling",
          "Faster patient inquiry resolution",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
    ],
    whyTitle: "Why AI for Service?",
    whySubtitle:
      "Enhance service quality with powerful intelligent automation.",
    benefits: [
      {
        title: "Focus on What Matters",
        description:
          "Free up more valuable time for customer and member care with intelligent ultimate automation.",
        icon: "/assets/9VEHqiBLbBnuC2rj6VGEi6qisI.svg",
      },
      {
        title: "Human-Like Convo",
        description:
          "Deliver contextual, natural, and personalized interactions that feel truly engaging and human.",
        icon: "/assets/AGfyoLYdOpkk5zXHb1SF8HDHuUo.svg",
      },
      {
        title: "Smarter Service",
        description:
          "Use advanced AI-driven insights to streamline operations, boost efficiency, and enhance outcomes.",
        icon: "/assets/nSQOoqdEkkZYNeyUpQzFTIPaCpw.svg",
      },
    ],
  },

  "ai-for-process": {
    slug: "ai-for-process",
    tag: "PRODUCTS",
    title: "AI for Process",
    subtitle: "Simplify complex business processes with autonomous AI agents.",
    cardBanner: "/assets/yxLTC9cANtOH1hhf7cA7mlRT8.png",
    featuresTitle: "Process Intelligence",
    features: [
      {
        title: "Process automation",
        description:
          "Automate complex processes with expert AI reasoning, event triggers, and built-in security and compliance.",
        image: "/assets/7nFcs3y3i8L4BB1sIO0zwAnfxKo.png",
      },
      {
        title: "AI analytics + monitoring",
        description:
          "Track execution telemetry, bottlenecks, and agent SLAs in real time with actionable operational dashboards.",
        image: "/assets/32HzuT64SyArh6QGBEHvbT8a4wc.png",
      },
      {
        title: "Pre-built process templates",
        description:
          "Launch enterprise workflows faster using field-tested blueprints for finance, procurement, HR, and IT ops.",
        image: "/assets/egSJYMx3tRAnzj12cWFjQtsJA.png",
      },
      {
        title: "Seamless System Integration",
        description:
          "Connect effortlessly with enterprise apps, data sources, and clouds for unified, scalable, and secure automation.",
        image: "/assets/RQBJ1F2RPqlo57O4iQ9CUsP9WR0.png",
      },
    ],
    useCasesTitle: "Any use case, one solution",
    useCasesSubtitle:
      "Unify every workflow and process under one intelligent AI platform.",
    useCases: [
      {
        tab: "No-Code Tool",
        heading: "No-Code Use-cases",
        description:
          "Accelerate automation and simplify operations with no-code builders, ready-to-use templates, and powerful API triggers.",
        points: [
          "Workflow Builder",
          "Ready-to-use Process Templates",
          "Automated API Integrations",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
      {
        tab: "AI Analytics",
        heading: "AI Analytics Use-cases",
        description:
          "Detect anomalies, predict process delays, and surface real-time optimization opportunities across departments.",
        points: [
          "Live Bottleneck Detection",
          "Predictive SLA Forecasting",
          "Automated Executive Summaries",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
      {
        tab: "Cloud Agnostic",
        heading: "Cloud Agnostic Use-cases",
        description:
          "Deploy autonomous workflows across AWS, Azure, GCP, or private infrastructure without vendor lock-in.",
        points: [
          "Multi-Cloud Orchestration",
          "Zero-Trust API Connectors",
          "Elastic Enterprise Scaling",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
    ],
    whyTitle: "Why AI for Process?",
    whySubtitle:
      "Transform complex workflows into seamless and automated processes.",
    benefits: [
      {
        title: "Lower Operational Costs",
        description:
          "Automate complex workflows to cut operational expenses and maximize efficiency across departments.",
        icon: "/assets/x4OpVpQJ7Rjf9yHIzPL1ptLbGVo.svg",
      },
      {
        title: "Boost Productivity",
        description:
          "Eliminate repetitive manual reviews and empower employees to focus on creative, and high-impact initiatives.",
        icon: "/assets/6nDSodCrPyMjdlqfl4j3gXPNcI0.svg",
      },
      {
        title: "Accelerate Cycles",
        description:
          "Use intelligent workflow orchestration to streamline operations and enhance overall business agility.",
        icon: "/assets/VHPDAGVqlI1MSYfefJ2wIs7aO4.svg",
      },
    ],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    tag: "SERVICE",
    title: "UI/UX Design",
    subtitle:
      "Human-centered digital interfaces, design systems, and interactive motion crafted for clarity.",
    cardBanner: "/assets/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
    featuresTitle: "Design with precision",
    features: [
      {
        title: "Design Systems & Tokens",
        description:
          "Tokenized Figma-to-code component libraries that unify typography, spacing, dark-mode surfaces, and accessibility across every product.",
        image: "/assets/egSJYMx3tRAnzj12cWFjQtsJA.png",
      },
      {
        title: "AI-First Product UX",
        description:
          "Natural-language interfaces, agent canvases, copilot sidebars, and streaming feedback patterns engineered for high user trust.",
        image: "/assets/7nFcs3y3i8L4BB1sIO0zwAnfxKo.png",
      },
      {
        title: "Interactive Prototyping",
        description:
          "High-fidelity clickable flows and micro-interaction prototypes validated with real users before writing production code.",
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
      {
        title: "UX Audits & Conversion Lift",
        description:
          "Heuristic teardown, funnel instrumentation, and onboarding redesigns that turn drop-offs into retained customers.",
        image: "/assets/32HzuT64SyArh6QGBEHvbT8a4wc.png",
      },
    ],
    useCasesTitle: "Any product, elevated experience",
    useCasesSubtitle:
      "From zero-to-one MVP launches to enterprise design transformations.",
    useCases: [
      {
        tab: "SaaS & AI Apps",
        heading: "SaaS & AI Product UX",
        description:
          "Turn dense workflows into calm, high-velocity workspaces with crisp hierarchy and intuitive AI controls.",
        points: [
          "End-to-end information architecture",
          "Responsive web & tablet component specs",
          "WCAG-compliant contrast and keyboard flows",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
      {
        tab: "Consumer Mobile",
        heading: "Consumer Mobile UX",
        description:
          "Thumb-friendly gestures, spring physics, and fluid onboarding built for daily habit formation.",
        points: [
          "iOS Human Interface & Material guidelines",
          "Haptic & motion choreography specs",
          "Rapid usability testing sprints",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
      {
        tab: "Enterprise Portals",
        heading: "Enterprise Dashboards",
        description:
          "Data-rich analytics consoles, role-based views, and multi-tenant admin experiences.",
        points: [
          "Complex table & visualization patterns",
          "Multi-team design token governance",
          "Developer-ready handoff documentation",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
    ],
    whyTitle: "Why FLEXIE UI/UX?",
    whySubtitle:
      "Design that feels effortless to users and ships seamlessly with engineering.",
    benefits: [
      {
        title: "Designer-Engineer Pairing",
        description:
          "Every Figma component is built alongside our frontend engineers so zero fidelity is lost in handoff.",
        icon: "/assets/ONFFI40SIu5XBKpS7DpbI6AoFiQ.svg",
      },
      {
        title: "Signature Motion Craft",
        description:
          "Purposeful micro-interactions and transitions that guide attention and make software feel alive.",
        icon: "/assets/hUO59zHqoxPubqUshqfD4pUJeGs.svg",
      },
      {
        title: "Conversion Focused",
        description:
          "Every screen is anchored around measurable adoption, clarity, and user delight.",
        icon: "/assets/TySVWNut65QwJpR7GO4QnKD0.svg",
      },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    tag: "SERVICE",
    title: "Mobile App Development",
    subtitle:
      "Flagship iOS and Android apps with native speed, offline resilience, and embedded AI.",
    cardBanner: "/assets/pSxYz80kLUKNMKdnW99z0alJYJ0.png",
    featuresTitle: "Mobile at flagship quality",
    features: [
      {
        title: "Cross-Platform & Native",
        description:
          "Ship simultaneously on iOS and Android with React Native or native Swift & Kotlin modules tailored to your performance budget.",
        image: "/assets/Qp9zWMB3qCWxa1uXAgG1Hu0nF98.png",
      },
      {
        title: "On-Device & Cloud AI",
        description:
          "Embed voice assistants, real-time camera intelligence, semantic search, and streaming chat directly into mobile workflows.",
        image: "/assets/vcYzdIgVuL0Sa8NA5T3wViTU4us.png",
      },
      {
        title: "Offline-First Sync",
        description:
          "Local persistence, optimistic updates, and background sync so field and consumer apps stay instantaneous anywhere.",
        image: "/assets/pT3dLoHeu2ffJaj94Wt4blOSW4.png",
      },
      {
        title: "CI/CD & Store Delivery",
        description:
          "Automated test suites, crash telemetry, and streamlined App Store & Google Play release pipelines.",
        image: "/assets/ZCiMEO824CkzcSXDpbMciv6gM.png",
      },
    ],
    useCasesTitle: "Mobile built for every market",
    useCasesSubtitle:
      "Consumer experiences, fintech wallets, and field-ops companions.",
    useCases: [
      {
        tab: "Fintech & Commerce",
        heading: "Fintech & Commerce Apps",
        description:
          "Biometric auth, instant payments, live order tracking, and personalized AI shopping assistants.",
        points: [
          "FaceID / TouchID & hardware-backed security",
          "Sub-second checkout & wallet integrations",
          "Push notification engagement loops",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
      {
        tab: "AI Companion Apps",
        heading: "AI Voice & Copilot Apps",
        description:
          "Low-latency voice streaming, multimodal capture, and background agent task notifications.",
        points: [
          "Real-time WebRTC & audio pipelines",
          "Streaming token UI with haptic feedback",
          "Seamless cross-device session sync",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
      {
        tab: "Enterprise Field",
        heading: "Enterprise Field Apps",
        description:
          "Offline-capable inspection, logistics, and service apps synced with your ERP and CRM.",
        points: [
          "Offline SQLite & conflict resolution",
          "Barcode, NFC & geolocation workflows",
          "MDM & SSO enterprise authentication",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
    ],
    whyTitle: "Why FLEXIE Mobile?",
    whySubtitle:
      "Sixty-frames-per-second polish backed by battle-tested mobile architecture.",
    benefits: [
      {
        title: "One Codebase, Native Feel",
        description:
          "Accelerate time-to-market without sacrificing platform gestures, haptics, or animation fluidity.",
        icon: "/assets/9VEHqiBLbBnuC2rj6VGEi6qisI.svg",
      },
      {
        title: "Built-In Observability",
        description:
          "Real-time performance tracing, crash reporting, and feature-flag rollouts from day one.",
        icon: "/assets/AGfyoLYdOpkk5zXHb1SF8HDHuUo.svg",
      },
      {
        title: "End-to-End Ownership",
        description:
          "From wireframes and backend APIs to App Store review approval, our team handles every step.",
        icon: "/assets/nSQOoqdEkkZYNeyUpQzFTIPaCpw.svg",
      },
    ],
  },

  "software-development": {
    slug: "software-development",
    tag: "SERVICE",
    title: "Software Development",
    subtitle:
      "Custom full-stack web platforms, distributed APIs, and production AI infrastructure.",
    cardBanner: "/assets/yxLTC9cANtOH1hhf7cA7mlRT8.png",
    featuresTitle: "Engineering without bottlenecks",
    features: [
      {
        title: "Full-Stack Web Platforms",
        description:
          "Modern React, Next.js, and TypeScript applications architected for sub-second loads, accessibility, and maintainability.",
        image: "/assets/7nFcs3y3i8L4BB1sIO0zwAnfxKo.png",
      },
      {
        title: "Scalable Backend & APIs",
        description:
          "High-throughput Node, Python, and Go services, event-driven queues, and cleanly documented GraphQL/REST contracts.",
        image: "/assets/32HzuT64SyArh6QGBEHvbT8a4wc.png",
      },
      {
        title: "Production AI Pipelines",
        description:
          "RAG architectures, multi-agent tool orchestration, eval harnesses, and cost-optimized LLM routing.",
        image: "/assets/egSJYMx3tRAnzj12cWFjQtsJA.png",
      },
      {
        title: "Cloud, Security & DevOps",
        description:
          "Infrastructure-as-code on AWS, GCP, or Azure with automated CI/CD, zero-trust auth, and SOC2-aligned guardrails.",
        image: "/assets/RQBJ1F2RPqlo57O4iQ9CUsP9WR0.png",
      },
    ],
    useCasesTitle: "Built to ship, built to scale",
    useCasesSubtitle:
      "Custom software tailored to your exact operational and competitive edge.",
    useCases: [
      {
        tab: "SaaS Platforms",
        heading: "Multi-Tenant SaaS Platforms",
        description:
          "Launch B2B platforms with SSO, RBAC permissions, real-time collaboration, and extensible webhooks.",
        points: [
          "Modular TypeScript monorepo architecture",
          "Tenant isolation and audit logging",
          "Automated end-to-end test coverage",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
      {
        tab: "Internal Systems",
        heading: "Custom Enterprise Tools",
        description:
          "Replace brittle spreadsheets and disconnected legacy software with unified internal portals.",
        points: [
          "Two-way CRM, ERP, and warehouse sync",
          "Automated reporting and workflow engines",
          "Role-tailored operator dashboards",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
      {
        tab: "AI Infrastructure",
        heading: "AI & Data Infrastructure",
        description:
          "Turn proprietary data into reliable, observable, low-latency intelligence APIs.",
        points: [
          "Hybrid vector + structured retrieval",
          "Automated quality & regression evals",
          "PII redaction and policy guardrails",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
    ],
    whyTitle: "Why FLEXIE Engineering?",
    whySubtitle:
      "Senior product engineers who care as much about business outcomes as clean code.",
    benefits: [
      {
        title: "Zero Legacy Bloat",
        description:
          "Clean, documented codebases your internal team can own, extend, and scale effortlessly.",
        icon: "/assets/x4OpVpQJ7Rjf9yHIzPL1ptLbGVo.svg",
      },
      {
        title: "Weekly Shipped Milestones",
        description:
          "Continuous staging previews and transparent sprint demos keep velocity high and surprises zero.",
        icon: "/assets/6nDSodCrPyMjdlqfl4j3gXPNcI0.svg",
      },
      {
        title: "Security By Design",
        description:
          "Threat modeling, automated dependency scanning, and encrypted data flows baked into every PR.",
        icon: "/assets/VHPDAGVqlI1MSYfefJ2wIs7aO4.svg",
      },
    ],
  },

  branding: {
    slug: "branding",
    tag: "SERVICE",
    title: "Branding",
    subtitle:
      "Distinctive visual identities, verbal systems, and launch worlds built for ambitious teams.",
    cardBanner: "/assets/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
    featuresTitle: "Identity that commands attention",
    features: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Clarify your market wedge, audience narrative, and messaging pillars so every touchpoint speaks with authority.",
        image: "/assets/egSJYMx3tRAnzj12cWFjQtsJA.png",
      },
      {
        title: "Logo & Visual Systems",
        description:
          "Bespoke wordmarks, geometric symbols, color palettes, and editorial typography scales engineered for digital and print.",
        image: "/assets/JAFiHCatbTzsAuqWSmAKNN7zvsE.png",
      },
      {
        title: "Motion & 3D Direction",
        description:
          "Signature motion grammar, hero visuals, social kits, and interactive web aesthetics that set you apart.",
        image: "/assets/UgBJAGjjD29VPKkOzaxCyabIMgU.png",
      },
      {
        title: "Comprehensive Brand Books",
        description:
          "Living guidelines and ready-to-use asset libraries empowering marketing and product teams to stay consistent.",
        image: "/assets/rrNtQU2aDjYf4aSs1WeRTIkZ3Ws.png",
      },
    ],
    useCasesTitle: "Brands built to lead categories",
    useCasesSubtitle:
      "From stealth AI startups to enterprise rebrands ready for global scale.",
    useCases: [
      {
        tab: "Startup Launch",
        heading: "Zero-to-One Brand Launch",
        description:
          "Go from stealth concept to an unmistakable category brand, pitch deck, and flagship launch website.",
        points: [
          "Naming, tagline, and core narrative",
          "Complete logo suite & social templates",
          "Launch site & investor visual kit",
        ],
        image: "/assets/H41THCm5hzJ21MHFXgWOF0U1A8.png",
      },
      {
        tab: "Enterprise Rebrand",
        heading: "Modern Enterprise Rebrand",
        description:
          "Unify fragmented sub-brands into a sleek, forward-looking identity system.",
        points: [
          "Brand architecture & portfolio alignment",
          "Cross-platform digital design tokens",
          "Rollout playbook for global teams",
        ],
        image: "/assets/BwG93nledUeZU5TH8LY358GCbc.png",
      },
      {
        tab: "Campaign & Content",
        heading: "Campaign & Product Visuals",
        description:
          "High-impact product storytelling, keynotes, and launch visuals tailored to your brand.",
        points: [
          "Product launch key visuals & UI art",
          "Executive deck & event systems",
          "Consistent tone across web and social",
        ],
        image: "/assets/8DhrfI0aeLSSaHXexLgb268cj0.png",
      },
    ],
    whyTitle: "Why FLEXIE Branding?",
    whySubtitle:
      "Brand identity crafted by the same studio building your product and AI.",
    benefits: [
      {
        title: "Digital-Native Craft",
        description:
          "We design identities meant to live inside real interfaces, motion, and dark/light product surfaces.",
        icon: "/assets/ONFFI40SIu5XBKpS7DpbI6AoFiQ.svg",
      },
      {
        title: "Unified Voice & Visuals",
        description:
          "Strategy, copywriting, typography, and iconography aligned into one cohesive story.",
        icon: "/assets/hUO59zHqoxPubqUshqfD4pUJeGs.svg",
      },
      {
        title: "Ready-to-Deploy Kits",
        description:
          "Receive clean SVGs, Figma libraries, and CSS variables ready for immediate rollout.",
        icon: "/assets/TySVWNut65QwJpR7GO4QnKD0.svg",
      },
    ],
  },
};
