import CreateTour from "@/src/components/modules/guide/CreateTour";
import {getCategories} from "@/src/services/category/category.service";
import React from "react";

const TourCreatePage = async () => {
  const categories = await getCategories();
  return (
    <>
      <CreateTour categories={categories.data} />
    </>
  );
};

export default TourCreatePage;
