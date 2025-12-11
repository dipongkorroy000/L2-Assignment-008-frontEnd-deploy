import BecomeAGuide from "@/src/components/home/BecomeAGuide";
import FeatureDestination from "@/src/components/home/FeatureDestination";
import HeroSection from "@/src/components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Featured Destinations */}
      <FeatureDestination></FeatureDestination>

      {/* Call to Action */}
      <BecomeAGuide></BecomeAGuide>
    </div>
  );
}
