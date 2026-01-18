import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const loading = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Payments</h2>
      <Table>
        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment At</TableHead>
          </TableRow>
        </TableHeader>

        {/* Skeleton Rows */}
        <TableBody>
          {Array.from({length: 5}).map((_, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-40" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default loading;
