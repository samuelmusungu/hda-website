import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/Index";
import ServicesPage from "@/pages/Services";
import ServiceDetailPage from "@/pages/ServiceDetail";
import PortfolioPage from "@/pages/Portfolio";
import CaseStudyPage from "@/pages/CaseStudy";
import TalentPage from "@/pages/Talent";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="services/:slug" element={<ServiceDetailPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="portfolio/:slug" element={<CaseStudyPage />} />
      <Route path="talent" element={<TalentPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
