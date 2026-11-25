import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { HomePage } from "./pages/HomePage";
import { AiSolutionsPage } from "./pages/AiSolutionsPage";
import { AiSolutionDetailPage } from "./pages/AiSolutionDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { IntegrationPage } from "./pages/IntegrationPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { ChangelogPage } from "./pages/ChangelogPage";
import { ContactPage } from "./pages/ContactPage";
import { LaunchingSoonPage } from "./pages/LaunchingSoonPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-solutions" element={<AiSolutionsPage />} />
          <Route path="/ai-solutions/:slug" element={<AiSolutionDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/integration" element={<IntegrationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/launchin-soon..." element={<LaunchingSoonPage />} />
          <Route path="/privacy-policy/:slug" element={<LegalPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
};

export default App;
