import UpcomingToursTable from "@/src/components/shared/requested-tourForm/UpcomingToursTable";
import {upcomingTours} from "@/src/services/public/tours.service";

const MyToursPage = async () => {
  const upcomingTour = await upcomingTours();


  return (
    <div>
      <UpcomingToursTable data={upcomingTour?.data} role="TOURIST"></UpcomingToursTable>
    </div>
  );
};

export default MyToursPage;
