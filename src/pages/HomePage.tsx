import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { HighlightedSection } from "../components/home/HighlightedSection";
import { ExceptionalitiesSection } from "../components/home/ExceptionalitiesSection";
import { EnterpriseFeaturesSection } from "../components/home/EnterpriseFeaturesSection";
import { ProductsSection } from "../components/home/ProductsSection";
import { AgencyServicesSection } from "../components/home/AgencyServicesSection";
import { StepsSection } from "../components/home/StepsSection";
import { SecuritySection } from "../components/home/SecuritySection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FaqSection } from "../components/home/FaqSection";
import { IntegrationSection } from "../components/home/IntegrationSection";

/**
 * FLEXIE Home Page — full cosmic experience with Top 10 Big Tech marquee,
 * AI Agent platform sections, and Agency Services (UI/UX, Mobile, Software, Branding).
 */
export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HighlightedSection />
      <ExceptionalitiesSection />
      <EnterpriseFeaturesSection />
      <ProductsSection />
      <AgencyServicesSection />
      <StepsSection />
      <SecuritySection />
      <TestimonialsSection />
      <FaqSection />
      <IntegrationSection />
    </>
  );
};
