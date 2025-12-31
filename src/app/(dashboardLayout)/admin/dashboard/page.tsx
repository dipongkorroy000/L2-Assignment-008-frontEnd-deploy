import DashboardStats from "@/src/components/modules/admin/stats/DashboardStats";
import MessageSheetComponent from "@/src/components/shared/MessageSheet";
import {userStats} from "@/src/services/admin/users.service";
import {getMessages} from "@/src/services/tourist/tourist.service";

const AdminDashboardPage = async () => {
  const userStat = await userStats();
  const data = userStat.data.meta;

  const messages = await getMessages();

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard Page</h2>
      <DashboardStats data={data} />

      {messages?.data?.length > 0 &&
        messages.data.map((user: {name: string; email: string; message: string}, i: number) => (
          <MessageSheetComponent key={i} name={user.name} message={user.message} email={user.email}></MessageSheetComponent>
        ))}
    </div>
  );
};

export default AdminDashboardPage;
