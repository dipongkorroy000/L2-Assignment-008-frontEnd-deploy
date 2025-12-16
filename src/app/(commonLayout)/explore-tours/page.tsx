import Tours from "@/src/components/modules/tours/Tours";
import {getCateWithTours} from "@/src/services/tours/tours.service";

const ExploreToursPage = async () => {
  const tour = await getCateWithTours();

  const toursData = tour?.data ?? [];

  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <Tours tours={toursData}></Tours>
    </section>
  );
};

export default ExploreToursPage;
