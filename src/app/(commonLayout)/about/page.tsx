import AboutComponent from "@/src/components/about/AboutComponent";
import Chart from "@/src/components/chart/Chart";
import MyMap from "@/src/components/map/Map";

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 max-md:pt-0" style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <div className="max-w-7xl mx-auto max-md:py-10 max-xl:mx-10 max-md:mx-0 px-5">
        <AboutComponent />
      </div>

      <div>
        <Chart></Chart>
      </div>

      <div className="max-w-7xl mx-auto mt-20 max-xl:mx-10 max-md:mx-0 px-5">
        <h2 className="text-4xl font-semibold text-center text-primary mb-5 max-xl:text-2xl max-lg:text-xl max-md:mb-2">Our Location</h2>
        <MyMap></MyMap>
      </div>
    </section>
  );
}
