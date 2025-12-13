import UpcomingTourTable from "@/src/components/modules/admin/upcoming-tours/UpcomingToursTable";
import {upcomingTours} from "@/src/services/tours/tours.service";

const UpcomingTourAdminPage = async () => {
  const tours = await upcomingTours();
  const data = tours.data || [];

  return (
    <section className="max-w-7xl mx-auto my-10 space-y-8">
      <UpcomingTourTable tours={data} />
    </section>
  );
};

export default UpcomingTourAdminPage;