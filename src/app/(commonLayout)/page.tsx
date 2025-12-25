import BecomeAGuide from "@/src/components/home/BecomeAGuide";
import FeatureDestination from "@/src/components/home/FeatureDestination";
import HeroSection from "@/src/components/home/HeroSection";
import AboutComponent from "@/src/components/about/AboutComponent";
import PrivacyComponent from "@/src/components/privacy/PrivacyComponent";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="xl:mx-20 mx-10">
        <section className="flex flex-col items-center justify-center text-center py-24 max-md:py-10">
          <HeroSection></HeroSection>
        </section>

        <section className="max-w-7xl mx-auto py-28 max-md:py-10">
          <FeatureDestination></FeatureDestination>
        </section>

        <section className="max-w-7xl mx-auto py-20 max-md:py-10">
          <AboutComponent></AboutComponent>
        </section>

        <section className="max-w-7xl mx-auto py-20 max-md:py-10">
          <PrivacyComponent></PrivacyComponent>
        </section>

        <section className="text-center pb-28 max-md:py-10 max-md:mx-10">
          <BecomeAGuide></BecomeAGuide>
        </section>
      </div>
    </div>
  );
}
