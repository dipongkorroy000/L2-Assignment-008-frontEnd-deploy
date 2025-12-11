import RequestedFormTable from "@/src/components/shared/requested-tourForm/RequestedFormTable";
import {getRequestedForm} from "@/src/services/tours/tours.service";
import React from "react";

const RequestedToursPage = async () => {
  const requestedTourForm = await getRequestedForm();

  // console.log(requestedTourForm.data);
  return (
    <>
      <RequestedFormTable data={requestedTourForm.data}></RequestedFormTable>
    </>
  );
};

export default RequestedToursPage;
