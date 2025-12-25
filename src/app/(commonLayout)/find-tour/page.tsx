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
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="max-w-7xl mx-auto min-h-dvh py-20 space-y-20 max-md:w-sm max-md:space-y-10 max-md:py-5 max-2xl:px-10 max-md:px-2">
        {categories && <FilterTours categories={categories.data}></FilterTours>}

        <Tours tours={data} />
      </div>
    </section>
  );
};

export default FindTour;
