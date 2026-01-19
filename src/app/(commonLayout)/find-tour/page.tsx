import FilterTours from "@/src/components/modules/find-tour/FilterTour";
import Tours from "@/src/components/modules/find-tour/Tours";
import {queryStringFormatter} from "@/src/lib/formatters";
import {getCategories} from "@/src/services/public/category.service";
import {tours} from "@/src/services/public/tours.service";

const FindTour = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const categories = await getCategories(); // categories.data = [{id: number, title: string}]

  const tour = await tours(queryString);
  const data = tour.data?.data || [];

  return (
    <section style={{backgroundImage: "var(--gradient-primary-foreground)"}}>
      <div className="max-w-7xl max-xl:mx-10 max-md:mx-0 px-5 mx-auto min-h-dvh py-10 max-md:py-5">
        {categories && <FilterTours categories={categories.data} tourFee={tour.data.meta.tourFee}></FilterTours>}

        <Tours tours={data} />
      </div>
    </section>
  );
};

export default FindTour;
