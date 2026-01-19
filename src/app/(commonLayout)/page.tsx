import BecomeAGuide from "@/src/components/home/BecomeAGuide";
import FeatureDestination from "@/src/components/home/FeatureDestination";
import HeroSection from "@/src/components/home/HeroSection";
import AboutComponent from "@/src/components/about/AboutComponent";
import PrivacyComponent from "@/src/components/privacy/PrivacyComponent";

export default function HomePage() {
  return (
    <div style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <div className="max-xl:mx-10 max-md:mx-0">
        <section className="flex flex-col items-center justify-center text-center 2xl:py-20 xl:py-16 max-md:py-0">
          <HeroSection></HeroSection>
        </section>

        <section className="max-w-7xl mx-auto py-28 max-md:py-10 px-5">
          <FeatureDestination></FeatureDestination>
        </section>

        <section className="max-w-7xl mx-auto py-20 max-md:py-10 px-5">
          <AboutComponent></AboutComponent>
        </section>

        <section className="max-w-7xl mx-auto py-28 max-md:py-10 px-5">
          <PrivacyComponent></PrivacyComponent>
        </section>

        <section className="text-center pb-28 max-md:py-10 max-md:mx-10">
          <BecomeAGuide></BecomeAGuide>
        </section>
      </div>
    </div>
  );
}
