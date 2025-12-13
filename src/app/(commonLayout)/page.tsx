import BecomeAGuide from "@/src/components/home/BecomeAGuide";
import FeatureDestination from "@/src/components/home/FeatureDestination";
import HeroSection from "@/src/components/home/HeroSection";
import AboutPage from "./about/page";
import PrivacyPage from "./privacy/page";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32">
        <HeroSection></HeroSection>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto py-36">
        <FeatureDestination></FeatureDestination>
      </section>

      <section className="text-center py-20">
        <AboutPage></AboutPage>
      </section>

      <section className="max-lg:mx-10">
        <PrivacyPage></PrivacyPage>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20">
        <BecomeAGuide></BecomeAGuide>
      </section>
    </div>
  );
}
