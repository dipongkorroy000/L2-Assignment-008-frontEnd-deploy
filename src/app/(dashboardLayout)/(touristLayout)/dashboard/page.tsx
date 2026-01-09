import ReviewCreateComponent from "@/src/components/shared/ReviewCreateComponent";
import {completedToursReviewProvide} from "@/src/services/public/tours.service";

const TouristDashboardPage = async () => {
  const completedToursForReview = await completedToursReviewProvide();

  const data = completedToursForReview.data || [];

  return (
    <>
      <ReviewCreateComponent data={data}></ReviewCreateComponent>
    </>
  );
};

export default TouristDashboardPage;
