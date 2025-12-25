import Tours from "@/src/components/modules/tours/Tours";
import {getCateWithTours} from "@/src/services/tours/tours.service";

const ExploreToursPage = async () => {
  const tour = await getCateWithTours();

  const toursData = tour?.data ?? [];

  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen max-md:px-1 max-2xl:px-10">
      <Tours tours={toursData}></Tours>
    </section>
  );
};

export default ExploreToursPage;
