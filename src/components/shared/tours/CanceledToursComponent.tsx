import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {ICanceledTour} from "@/src/types/tourForm.interface";

const CanceledPageComponent = async ({data}: {data: ICanceledTour[]}) => {
  // shape: [{status, tour: {title}, tourist: {contactNumber, email}, date}]

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Canceled Tours</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour Title</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data.map((item: ICanceledTour, idx: number) => (
              <TableRow key={idx}>
                <TableCell>{item.tour?.title}</TableCell>
                {item.tourist && <TableCell>{item.tourist?.email}</TableCell>}
                {item.tourist && <TableCell>{item.tourist?.contactNumber}</TableCell>}
                {item.guide && <TableCell>{item.guide?.email}</TableCell>}
                {item.guide && <TableCell>{item.guide?.contactNumber}</TableCell>}
                <TableCell>{item.status}</TableCell>
                <TableCell>{new Date(item.updatedAt).toLocaleDateString("en-GB")}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                No canceled tours found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CanceledPageComponent;
