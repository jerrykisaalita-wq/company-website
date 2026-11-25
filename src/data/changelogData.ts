export interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  summary: string;
  image: string;
  features: string[];
  paragraphs: string[];
}

export const changelogData = {
  tag: "CHANGELOG",
  tagIcon: "/assets/pvLg7Tz0DLy0eOOvS3aksAbHJ4.svg",
  title: "Updates and Future\nEnhancements",
  subtitle: "See what’s on our roadmap as we continue to evolve and improve.",
  entries: [
    {
      date: "Feb 21, 2025",
      version: "v1.2.0",
      title: "Enhanced Real-Time Insights & Dashboard Overhaul",
      summary:
        "This release introduces major improvements to our real-time data tracking dashboard, along with an upgraded UI for smoother navigation. We’ve also added enhanced filtering options, smarter notifications, and key performance boosts to elevate your analytics experience.",
      image: "/assets/XfsngAgXvedGQv2SV25C8lfdI.png",
      features: [
        "New visual dashboard layout with modular widgets.",
        "Live data stream optimization for faster sync across sources.",
        "Fixed timestamp syncing issue on custom reports.",
      ],
      paragraphs: [
        "We know that clean, real-time visibility is the backbone of smart decision-making. That’s why this release focuses on making your Flexie dashboard more intuitive and powerful. The newly designed interface includes customizable widgets that let users tailor their analytics view based on role, department, or data stream priority.",
        "In addition, real-time tracking has been optimized to deliver even faster data syncs — with latency reduced by 40% across major input channels. We've also resolved minor timestamp mismatches in exported reports and fine-tuned notifications to prevent alert fatigue.",
      ],
    },
    {
      date: "Jan 20, 2025",
      version: "v1.1.3",
      title: "Smart Alerts and Reporting Enhancements",
      summary:
        "This update focuses on smarter alert systems, better scheduled reporting, and behind-the-scenes system stability upgrades. Businesses can now configure intelligent alert conditions and schedule custom reports based on performance triggers.",
      image: "/assets/MWDjNGvP5t8oMLYclqkqtAa8Qw.png",
      features: [
        "Custom alert logic based on data thresholds and anomalies.",
        "Improved scheduled reports with flexible timing and formatting.",
        "Fixed export issue in PDF reports for filtered dashboards.",
      ],
      paragraphs: [
        "Flexie is all about putting timely, meaningful insights in your hands. With this release, users can define custom logic for alerts — whether it’s a traffic spike, inventory dip, or campaign milestone.",
        "Reporting also got a solid upgrade. Users can now schedule report exports daily, weekly, or on performance-based triggers — delivered in your preferred format.",
      ],
    },
    {
      date: "Dec 23, 2024",
      version: "v1.1.0",
      title: "Introducing Data Unification Engine",
      summary:
        "We’ve rolled out the Data Unification Engine — a core system update that brings fragmented data sources together in real time. Alongside it, this release includes backend performance boosts and API stability improvements.",
      image: "/assets/el0Ea7WwJQCwKTBznG42vw3oius.png",
      features: [
        "Launch of the Data Unification Engine for syncing across CRMs, IoT, and analytics tools.",
        "Optimized backend for faster cross-platform performance.",
        "Patched minor API timeout issues during peak traffic hours.",
      ],
      paragraphs: [
        "The Data Unification Engine is one of the biggest leaps forward for Flexie. It seamlessly brings together inputs from various tools—Salesforce, HubSpot, Shopify, IoT feeds, and more—into one synchronized stream of intelligence.",
        "This release also tightens backend performance across high-traffic scenarios, with a 25% reduction in load times across API-driven applications.",
      ],
    },
  ] as ChangelogEntry[],
};
