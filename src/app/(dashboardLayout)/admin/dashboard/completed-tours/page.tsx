import {completedRequestedTours} from "@/src/services/public/tours.service";
import CompletedToursTable from "@/src/components/modules/admin/completed-tours/CompletedToursTable";

const CompletedTours = async () => {
  const tours = await completedRequestedTours();
  const data = tours.data || [];
  // [{id, tour:{title}, status, tourist:{email}, guide:{email}, payments:{transactionId}, updatedAt}]

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Completed Tours</h2>

      <CompletedToursTable data={data}></CompletedToursTable>
    </div>
  );
};

export default CompletedTours;