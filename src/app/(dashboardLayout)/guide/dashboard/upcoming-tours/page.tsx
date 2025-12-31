import UpcomingToursTable from "@/src/components/shared/requested-tourForm/UpcomingToursTable";
import {upcomingTours} from "@/src/services/public/tours.service";
import React from "react";

const GuideUpcomingToursPage = async () => {
  const tours = await upcomingTours();

  return (
    <div>
      <UpcomingToursTable data={tours.data} role="GUIDE"></UpcomingToursTable>
    </div>
  );
};

export default GuideUpcomingToursPage;
