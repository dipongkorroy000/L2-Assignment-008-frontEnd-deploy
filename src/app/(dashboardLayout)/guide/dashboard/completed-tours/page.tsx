import CompletedToursComponent from "@/src/components/shared/tours/CompletedToursComponent";
import {completedRequestedTours} from "@/src/services/tours/tours.service";
import React from "react";

const CompletedToursPage = async () => {
  const completedRequested = await completedRequestedTours();

  return <CompletedToursComponent data={completedRequested.data}></CompletedToursComponent>;
};

export default CompletedToursPage;
