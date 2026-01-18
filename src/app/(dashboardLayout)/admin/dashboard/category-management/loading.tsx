import {Skeleton} from "@/src/components/ui/skeleton";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const loading = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full">
        {/* Title + Description */}
        <div>
          <Skeleton className="h-8 w-48 mb-2" /> {/* Title */}
          <Skeleton className="h-4 w-64" /> {/* Description */}
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <Skeleton className="h-8 w-8 rounded-md mr-2" /> {/* Icon */}
          <Skeleton className="h-8 w-24 rounded-md" /> {/* Label */}
        </div>

        {/* Children placeholder */}
        <Skeleton className="h-6 w-32" />
      </div>

      <div className="my-10">
        {/* Header */}
        <h2 className="text-xl font-bold mb-4">Categories</h2>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Index</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Total Tours</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({length: 5}).map((_, idx) => (
              <TableRow key={idx}>
                {/* Index */}
                <TableCell>
                  <Skeleton className="h-4 w-6" />
                </TableCell>

                {/* Title */}
                <TableCell className="font-medium">
                  <Skeleton className="h-4 w-32" />
                </TableCell>

                {/* Total Tours */}
                <TableCell className="font-medium">
                  <Skeleton className="h-4 w-20" />
                </TableCell>

                {/* Action */}
                <TableCell className="font-medium">
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
