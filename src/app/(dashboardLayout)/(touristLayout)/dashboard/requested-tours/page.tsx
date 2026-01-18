import RequestedFormTable from "@/src/components/shared/requested-tourForm/RequestedFormTable";
import {getRequestedForm} from "@/src/services/public/tours.service";

const RequestedToursPage = async () => {
  const requestedTourForm = await getRequestedForm();

  return (
    <>
      <RequestedFormTable data={requestedTourForm.data}></RequestedFormTable>
    </>
  );
};

export default RequestedToursPage;
