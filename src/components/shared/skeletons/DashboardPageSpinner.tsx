import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const DashboardPageSpinner = ({title}: {title: string}) => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="w-full">
        <div>
          <Table className="w-full">
            {/* Table Header */}
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Tour</TableHead>
                <TableHead>Tourist</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>CreatedAt</TableHead>
              </TableRow>
            </TableHeader>

            {/* Table Body Skeleton Rows */}
            <TableBody>
              {Array.from({length: 9}).map((_, idx) => (
                <TableRow key={idx}>
                  {/* Profile Photo */}
                  <TableCell>
                    <Skeleton className="w-10 h-10 rounded-full" />
                  </TableCell>

                  {/* Name */}
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>

                  {/* Email */}
                  <TableCell>
                    <Skeleton className="h-4 w-40" />
                  </TableCell>

                  {/* Rating */}
                  <TableCell>
                    <Skeleton className="h-4 w-12" />
                  </TableCell>

                  {/* Languages */}
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>

                  {/* Action Button */}
                  <TableCell>
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageSpinner;
