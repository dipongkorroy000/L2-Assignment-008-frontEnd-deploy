import ToursManagement from "@/src/components/modules/admin/tours-management/ToursManagement";
import ManagementPageHeader from "@/src/components/modules/dashboard/Management/Header";
import Pagination from "@/src/components/shared/pagination/Pagination";
import {queryStringFormatter} from "@/src/lib/formatters";
import {tours} from "@/src/services/public/tours.service";

const ToursManagementPage = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const tour = await tours(queryString);

  const totalPages = Math.ceil((tour?.data?.meta?.total || 1) / (tour?.data?.meta?.limit || 1));

  return (
    <div className="max-w-7xl mx-auto">
      <ManagementPageHeader title="Tours Management" description="Manage Tours information and details" />

      <ToursManagement data={tour.data.data}></ToursManagement>

      <Pagination currentPage={tour.data?.meta?.page || 5} totalPages={totalPages || 5}></Pagination>
    </div>
  );
};

export default ToursManagementPage;
