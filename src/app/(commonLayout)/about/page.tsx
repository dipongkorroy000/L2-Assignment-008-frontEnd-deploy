import AboutComponent from "@/src/components/about/AboutComponent";
import MyMap from "@/src/components/map/Map";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen py-20 max-md:pt-0">
      <div className="max-w-7xl mx-auto max-md:py-10 max-md:mx-10 max-2xl:mx-20">
        <AboutComponent />
      </div>

      <div className="max-w-7xl mx-auto mt-20 max-md:px-5 max-xl:px-10 max-2xl:px-16">
        <h2 className="text-4xl font-semibold text-center text-primary mb-5 max-xl:text-2xl max-lg:text-xl max-md:mb-2">Our Location</h2>
        <MyMap></MyMap>
      </div>
    </section>
  );
}
