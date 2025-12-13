import ReviewCreateComponent from "@/src/components/shared/ReviewCreateComponent";
import {completedToursReviewProvide} from "@/src/services/tours/tours.service";
import React from "react";

const TouristDashboardPage = async () => {
  const completedToursForReview = await completedToursReviewProvide();

  const data = completedToursForReview.data || []; // [{id, tour: {title}, status, guide: {name}, updatedAt}]

  //   const demodeta = [{id: 4, status: "COMPLETED", tour: {title: "title provide"}, guide: {name: "Abul kalam"}, updatedAt: new Date()}];

  console.log(data);
  return (
    <div>
      <ReviewCreateComponent data={data}></ReviewCreateComponent>
    </div>
  );
};

export default TouristDashboardPage;
