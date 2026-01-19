import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const ExploreGuideTableSkeleton = () => {
  return (
    <div className="w-full rounded-md shadow-sm">
      <div className="">
        <Table className="w-full">
          {/* Table Header */}
          <TableHeader className="sticky top-0 bg-white dark:bg-secondary z-10 shadow-sm rounded-md">
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead></TableHead>
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
  );
};

export default ExploreGuideTableSkeleton;
