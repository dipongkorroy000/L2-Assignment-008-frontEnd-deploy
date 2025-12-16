import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {ReviewsList} from "./ReviewList";

interface IGuideDashboardProps {
  data: {totalEarning: number; completedTours: number};
  tours: {meta: {total: number}};
  tourForms: {
    review: {
      comment: string;
      rating: number;
      updatedAt: string;
    };
  }[];
}

const GuideDashboardComponent = async ({data, tours, tourForms}: IGuideDashboardProps) => {

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Guide Dashboard</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Stats Cards */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{data.totalEarning} BDT</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Completed Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{data.completedTours}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Total Tours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{tours.meta.total || 0}</p>
          </CardContent>
        </Card>
      </div>

      <ReviewsList tourForms={tourForms} ></ReviewsList>

      {/* Reviews Section */}
      {/* <ReviewsList tourForms={tourForms || []} /> */}
    </div>
  );
};

export default GuideDashboardComponent;
