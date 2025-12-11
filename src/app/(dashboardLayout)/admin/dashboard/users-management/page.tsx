import FilterUsers from "@/src/components/modules/admin/users-management/FilterUsers";
import RoleWiseTable from "@/src/components/modules/admin/users-management/RoleWiseTable";
import Pagination from "@/src/components/shared/pagination/Pagination";
import {queryStringFormatter} from "@/src/lib/formatters";
import {getAllUsers} from "@/src/services/admin/users-management/users.service";
import { getDefaultDashboardRoute } from "@/src/utils/auth-utils";

const UsersManagement = async ({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  const defaultPath = getDefaultDashboardRoute("ADMIN");

  const users = await getAllUsers(queryString);
  const data = users?.data?.data || [];

  const totalPages = Math.ceil((users?.data.meta?.total || 1) / (users?.data.meta?.limit || 1));

  return (
    <section className="max-w-6xl mx-auto mt-10 space-y-8">
      <FilterUsers defaultPath={defaultPath} userRoles={[{role: "ADMIN"}, {role: "GUIDE"}, {role: "TOURIST"}]}></FilterUsers>

      <RoleWiseTable users={data} />

      <Pagination currentPage={users.data.meta?.page || 5} totalPages={totalPages || 5}></Pagination>
    </section>
  );
};

export default UsersManagement;
