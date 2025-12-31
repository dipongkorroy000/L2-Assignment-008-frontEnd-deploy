import CanceledPageComponent from "@/src/components/shared/tours/CanceledToursComponent";
import {canceledRequestedTours} from "@/src/services/public/tours.service";

const CanceledPage = async () => {
  const canceledRequested = await canceledRequestedTours();

  return <CanceledPageComponent data={canceledRequested.data}></CanceledPageComponent>;
};

export default CanceledPage;
