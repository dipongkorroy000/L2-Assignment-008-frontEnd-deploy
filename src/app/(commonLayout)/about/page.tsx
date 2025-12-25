import AboutComponent from "@/src/components/about/AboutComponent";

export default async function AboutPage() {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen">
      <div className="max-w-7xl mx-auto py-20 max-md:py-10 max-md:mx-10 max-2xl:mx-20">
        <AboutComponent></AboutComponent>
      </div>
    </section>
  );
}
