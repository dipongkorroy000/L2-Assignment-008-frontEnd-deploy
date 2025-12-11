// "use client";

import BenefitsSection from "@/src/components/become-guide-page/BenefitsSection";
import HeroSection from "@/src/components/become-guide-page/HeroSection";
import HowItWorksSection from "@/src/components/become-guide-page/HowItWorksSection";
import RequirementsSection from "@/src/components/become-guide-page/RequirementsSection";

export default async function BecomeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-secondary">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <RequirementsSection />
    </div>
  );
}
