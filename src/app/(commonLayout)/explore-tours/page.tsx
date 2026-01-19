import AIToursSuggestion from "@/src/components/ai-tour-suggestion/AIToursSuggestion";
import Tours from "@/src/components/modules/tours/Tours";
import {getCateWithTours} from "@/src/services/public/tours.service";

const ExploreToursPage = async () => {
  const tour = await getCateWithTours();

  const toursData = tour?.data ?? [];

  return (
    <section className="min-h-screen" style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <AIToursSuggestion />

      <Tours tours={toursData}></Tours>
    </section>
  );
};

export default ExploreToursPage;
