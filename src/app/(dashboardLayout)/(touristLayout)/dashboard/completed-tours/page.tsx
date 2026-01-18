import CompletedToursComponent from "@/src/components/shared/tours/CompletedToursComponent";
import {completedRequestedTours} from "@/src/services/public/tours.service";

const CompletedToursPage = async () => {
  const toursFrom = await completedRequestedTours();

  return (
    <div>
      <CompletedToursComponent data={toursFrom.data}></CompletedToursComponent>
    </div>
  );
};

export default CompletedToursPage;
