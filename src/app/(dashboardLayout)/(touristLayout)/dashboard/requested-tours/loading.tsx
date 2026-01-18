import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Requested Tours</h2>

      <Table>
        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead>Tour Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Guide Email</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Requested At</TableHead>
          </TableRow>
        </TableHeader>

        {/* Skeleton Rows */}
        <TableBody>
          {Array.from({length: 5}).map((_, idx) => (
            <TableRow key={idx} className="hover:bg-muted/50">
              {/* Tour Title */}
              <TableCell>
                <Skeleton className="h-4 w-40" />
              </TableCell>

              {/* Status */}
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>

              {/* Guide Email */}
              <TableCell>
                <Skeleton className="h-4 w-48" />
              </TableCell>

              {/* Payment Status */}
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>

              {/* Requested At */}
              <TableCell>
                <Skeleton className="h-4 w-36" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default loading;
