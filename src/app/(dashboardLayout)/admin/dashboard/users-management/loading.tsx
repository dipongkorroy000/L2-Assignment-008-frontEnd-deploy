import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const loading = () => {
  return (
    <section className="max-w-6xl mx-auto mt-10 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center my-6">
        {/* Search Box */}
        <div className="flex items-center gap-2 w-full md:w-1/3">
          <Skeleton className="h-4 w-4 rounded" /> {/* Search icon */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>

        {/* Category Select */}
        <div className="w-[200px]">
          <Skeleton className="h-10 w-full rounded-md" /> {/* Select */}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Skeleton className="h-10 w-20 rounded-md" /> {/* Apply */}
          <Skeleton className="h-10 w-20 rounded-md" /> {/* Clear */}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">All Users</h2>

        <Table>
          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>

          {/* Skeleton Rows */}
          <TableBody>
            {Array.from({length: 5}).map((_, idx) => (
              <TableRow key={idx} className="hover:bg-muted">
                {/* Email */}
                <TableCell>
                  <Skeleton className="h-4 w-48" />
                </TableCell>

                {/* Role */}
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>

                {/* CreatedAt */}
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>

                {/* Action Button */}
                <TableCell>
                  <Skeleton className="h-8 w-20 rounded-md" />
                </TableCell>

                {/* Details Link */}
                <TableCell>
                  <Skeleton className="h-4 w-16" />
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
