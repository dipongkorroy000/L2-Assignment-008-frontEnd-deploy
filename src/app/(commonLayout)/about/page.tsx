// app/about/page.tsx  (Server Component)

import MissionCard from "@/src/components/about/MissionCard";
import FeaturesCard from "@/src/components/about/FeaturesCard";
import VisionCard from "@/src/components/about/VisionCard";

export default async function AboutPage() {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-primary mb-6">About Our Project</h2>

        {/* Intro */}
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          This platform connects travelers with local guides across Bangladesh. Our mission is to make tourism authentic, accessible, and community-driven.
        </p>

        {/* Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VisionCard />
          <MissionCard />
          <FeaturesCard />
        </div>
      </div>
    </section>
  );
}
