import DashboardStats from "@/src/components/modules/admin/stats/DashboardStats";
import {userStats} from "@/src/services/admin/users-management/users.service";

const AdminDashboardPage = async () => {
  const userStat = await userStats();
  const data = userStat.data.meta;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard Page</h2>
      <DashboardStats data={data} />
    </div>
  );
};

export default AdminDashboardPage;