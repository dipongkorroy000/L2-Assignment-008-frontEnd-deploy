import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const loading = () => {
  return (
    <section className="mt-10 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl text-primary font-bold mb-5">My Tours</h2>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Fee (BDT)</TableHead>
            <TableHead>Group Members</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({length: 5}).map((_, idx) => (
            <TableRow key={idx}>
              {/* Title */}
              <TableCell className="font-medium">
                <Skeleton className="h-4 w-32" />
              </TableCell>

              {/* Fee */}
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>

              {/* Group Members */}
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>

              {/* Category */}
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>

              {/* City */}
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>

              {/* Status */}
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>

              {/* Created At */}
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>

              {/* Actions */}
              <TableCell className="text-right space-x-2 flex justify-end gap-2">
                <Skeleton className="h-8 w-12 rounded-md" />
                <Skeleton className="h-8 w-12 rounded-md" />
                <Skeleton className="h-8 w-16 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default loading;
