import RequestedToursTable from "@/src/components/modules/guide/RequestedToursTable";
import {getRequestedForm} from "@/src/services/public/tours.service";
import React from "react";

const GuideRequestedToursPage = async () => {
  const requestedToursForm = await getRequestedForm();

  return (
    <>
      <RequestedToursTable data={requestedToursForm.data}></RequestedToursTable>
    </>
  );
};

export default GuideRequestedToursPage;
