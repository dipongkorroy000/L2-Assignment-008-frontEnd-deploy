import BecomeAGuide from "@/src/components/home/BecomeAGuide";
import FeatureDestination from "@/src/components/home/FeatureDestination";
import HeroSection from "@/src/components/home/HeroSection";
import AboutComponent from "@/src/components/about/AboutComponent";
import PrivacyComponent from "@/src/components/privacy/PrivacyComponent";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 max-md:py-20">
        <HeroSection></HeroSection>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto py-28 max-md:py-10 max-md:w-sm">
        <FeatureDestination></FeatureDestination>
      </section>

      <section className="max-w-7xl mx-auto py-20 max-md:py-10 max-md:w-sm">
        <AboutComponent></AboutComponent>
      </section>

      <section className="max-w-7xl mx-auto py-20 max-md:py-10 max-md:w-sm">
        <PrivacyComponent></PrivacyComponent>
      </section>

      {/* Call to Action */}
      <section className="text-center pb-28 max-md:py-10">
        <BecomeAGuide></BecomeAGuide>
      </section>
    </div>
  );
}
