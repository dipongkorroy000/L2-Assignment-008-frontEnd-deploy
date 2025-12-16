import GuideDashboardComponent from "@/src/components/modules/guide/GuideDashboardComponent";
import {getReviews} from "@/src/services/guide/stats.service";
import {getTours, guideStats} from "@/src/services/guide/tour.service";

const GuideDashboardPage = async () => {
  const stats = await guideStats();
  const data = stats?.data?.meta ?? {totalEarning: 0, completedTours: 0};
  const tours = (await getTours()) ?? {data: {meta: {total: 0}}};
  const tourForms = await getReviews();

  return <GuideDashboardComponent data={data} tours={tours.data} tourForms={tourForms.data || []}></GuideDashboardComponent>;
};

export default GuideDashboardPage;
