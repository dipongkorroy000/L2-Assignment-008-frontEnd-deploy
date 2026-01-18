import CreateTour from "@/src/components/modules/guide/CreateTour";
import {getCategories} from "@/src/services/public/category.service";

const TourCreatePage = async () => {
  const categories = await getCategories();
  return (
    <>
      <CreateTour categories={categories.data} />
    </>
  );
};

export default TourCreatePage;
