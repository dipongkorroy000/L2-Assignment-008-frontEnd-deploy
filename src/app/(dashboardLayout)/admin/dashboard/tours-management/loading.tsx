import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const loading = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="mt-8">
        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Tours Management</h2>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Requests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({length: 5}).map((_, idx) => (
              <TableRow key={idx}>
                {/* Title */}
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>

                {/* Category */}
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>

                {/* City */}
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>

                {/* Fee */}
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>

                {/* Requests */}
                <TableCell>
                  <Skeleton className="h-4 w-12" />
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>

                {/* Created At */}
                <TableCell>
                  <Skeleton className="h-4 w-28" />
                </TableCell>

                {/* Action */}
                <TableCell>
                  <Skeleton className="h-8 w-24 rounded-md" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default loading;
