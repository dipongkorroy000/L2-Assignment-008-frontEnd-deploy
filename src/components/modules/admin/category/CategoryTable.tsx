import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

interface Category {
  title: string;
}

const CategoryTable = ({categories}: {categories: Category[]}) => {
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Index</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.length > 0 ? (
            categories.map((cat, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell className="font-medium">{cat.title}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="text-center text-muted-foreground">
                No categories found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryTable;
