import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import DeleteCategory from "./DeleteCategory";

interface Category {
  id: number;
  title: string;
  tourCount?: number;
}

const CategoryTable = ({categories}: {categories?: Category[]}) => {
  const cats = categories ?? [];
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
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
          {cats.length > 0 ? (
            cats.map((cat, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell className="font-medium">{cat.title}</TableCell>
                  <TableCell className="font-medium">{cat.tourCount}</TableCell>
                <TableCell className="font-medium">
                  <DeleteCategory id={cat.id} tourCount={cat.tourCount!}></DeleteCategory>
                </TableCell>
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
