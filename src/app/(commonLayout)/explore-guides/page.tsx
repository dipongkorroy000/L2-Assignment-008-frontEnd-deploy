import FilterGuides from "@/src/components/modules/explore-guides/FilterGuides";
import GuidesComponent from "@/src/components/modules/explore-guides/GuidesComponent";
import Pagination from "@/src/components/shared/pagination/Pagination";
import {queryStringFormatter} from "@/src/lib/formatters";
import {getCategories} from "@/src/services/public/category.service";
import {getGuides, getGuidesLanguages} from "@/src/services/public/chart.service";

const ExploreGuidesPage = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const categories = await getCategories(); // categories.data = [{id: number, title: string}]

  const guidesLanguages = await getGuidesLanguages();

  const guides = await getGuides(queryString);

  const totalPages = Math.ceil((guides?.data.meta?.total || 1) / (guides?.data.meta?.limit || 1));

  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="max-w-7xl mx-auto min-h-dvh py-20 space-y-20 max-md:space-y-10 max-md:py-5 max-2xl:px-10 max-md:px-4">
        {guidesLanguages.data && <FilterGuides languages={guidesLanguages.data} categories={categories.data}></FilterGuides>}

        <GuidesComponent guides={guides.data.data}></GuidesComponent>

        <Pagination currentPage={guides?.data.meta?.page || 1} totalPages={totalPages || 1}></Pagination>
      </div>
    </section>
  );
};

export default ExploreGuidesPage;
