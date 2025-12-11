import Tours from "@/src/components/modules/tours/Tours";
import {getCateWithTours} from "@/src/services/tours/tours.service";

const ExploreToursPage = async () => {
  const tour = await getCateWithTours();

  return (
    <section className="max-w-7xl mx-auto">
      <Tours tours={tour.data}></Tours>
    </section>
  );
};

export default ExploreToursPage;
