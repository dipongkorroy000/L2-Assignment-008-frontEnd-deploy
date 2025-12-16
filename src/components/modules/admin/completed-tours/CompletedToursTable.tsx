import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

export interface ICompletedTour {
  id: number;
  tour: {title: string};
  status: string;
  tourist: {email: string};
  guide: {email: string};
  payments: {transactionId: string};
  updatedAt: Date;
}

const CompletedToursTable = ({data}: {data: ICompletedTour[]}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tour Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Guide Email</TableHead>
          <TableHead>Tourist Email</TableHead>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Completed At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map((tour: ICompletedTour) => (
            <TableRow key={tour.id}>
              <TableCell>{tour.tour?.title}</TableCell>
              <TableCell>{tour.status}</TableCell>
              <TableCell>{tour.guide?.email}</TableCell>
              <TableCell>{tour.tourist?.email}</TableCell>
              <TableCell>{tour.payments?.transactionId}</TableCell>
              <TableCell>{new Date(tour.updatedAt).toLocaleString("en-GB")}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center text-muted-foreground">
              No completed tours found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CompletedToursTable;