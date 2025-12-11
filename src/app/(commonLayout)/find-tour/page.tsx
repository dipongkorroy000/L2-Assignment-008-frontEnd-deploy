import FilterTours from "@/src/components/modules/find-tour/FilterTour";
import Tours from "@/src/components/modules/find-tour/Tours";
import {queryStringFormatter} from "@/src/lib/formatters";
import {getCategories} from "@/src/services/category/category.service";
import {tours} from "@/src/services/tours/tours.service";

const FindTour = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const categories = await getCategories(); // categories.data = [{id: number, title: string}]

  const tour = await tours(queryString);
  const data = tour.data?.data || [];

  return (
    <section className="max-w-7xl mx-auto">
      {categories && <FilterTours categories={categories.data}></FilterTours>}

      <Tours tours={data} />
    </section>
  );
};

export default FindTour;
