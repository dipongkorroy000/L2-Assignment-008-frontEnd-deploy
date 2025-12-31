import ToursTable from "@/src/components/modules/guide/ToursTable";
import Pagination from "@/src/components/shared/pagination/Pagination";
import {TableSkeleton} from "@/src/components/shared/skeletons/TableSkeleton";
import {queryStringFormatter} from "@/src/lib/formatters";
import {getCategories} from "@/src/services/public/category.service";
import {getTours} from "@/src/services/guide/tour.service";
import {Suspense} from "react";

const MYTours = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const categories = await getCategories();

  const tours = await getTours(queryString);

  const totalPages = Math.ceil((tours?.data.meta?.total || 1) / (tours?.data.meta?.limit || 1));

  return (
    <>
      <Suspense fallback={<TableSkeleton columns={5} rows={tours?.data?.meta?.limit || 5} />}>
        <ToursTable tours={tours.data.data} categories={categories.data}></ToursTable>

        <Pagination currentPage={tours.data.meta.page || 1} totalPages={totalPages}></Pagination>
      </Suspense>
    </>
  );
};

export default MYTours;
