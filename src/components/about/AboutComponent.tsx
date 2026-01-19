import FeaturesCard from "./FeaturesCard";
import AboutCard from "./AboutCard";

const AboutComponent = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-semibold text-center text-primary mb-5 max-xl:text-2xl max-lg:text-xl max-md:mb-2">About Our Project</h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10 max-md:text-sm max-md:mb-5">
        This platform connects travelers with local guides across Bangladesh. Our mission is to make tourism authentic, accessible, and community-driven.
      </p>

      {/* Grid Features */}
      <div className="flex max-lg:flex-col gap-8 max-md:gap-5">
        <div className="flex-1">
          <AboutCard title="🌍 Vision" description="To build a trusted tourism ecosystem where travelers experience Bangladesh like locals."></AboutCard>
        </div>

        <div className="flex-1">
          <FeaturesCard />
        </div>

        <div className="flex-1">
          <AboutCard
            title="🎯 Mission"
            description="Empower local guides with digital tools, provide safe curated experiences, and promote sustainable tourism."
          ></AboutCard>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
