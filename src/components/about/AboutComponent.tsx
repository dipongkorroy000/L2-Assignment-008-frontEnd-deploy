import FeaturesCard from "./FeaturesCard";
import AboutCard from "./AboutCard";

const AboutComponent = () => {
  return (
    <div className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <h2 className="text-4xl font-semibold text-center text-primary mb-5 max-md:text-2xl max-md:mb-2">About Our Project</h2>

      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10 max-md:text-sm max-md:mb-5">
        This platform connects travelers with local guides across Bangladesh. Our mission is to make tourism authentic, accessible, and community-driven.
      </p>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:p-5 max-md:gap-5">
        <AboutCard title="🌍 Vision" description="To build a trusted tourism ecosystem where travelers experience Bangladesh like locals."></AboutCard>
        <AboutCard
          title="🎯 Mission"
          description="Empower local guides with digital tools, provide safe curated experiences, and promote sustainable tourism."
        ></AboutCard>
        <FeaturesCard />
      </div>
    </div>
  );
};

export default AboutComponent;
