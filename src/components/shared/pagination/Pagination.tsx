"use client";

import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";
import {useTransition} from "react";
import {Button} from "../../ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../ui/select";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({currentPage, totalPages}: TablePaginationProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  const navigateToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    startTransition(() => router.push(`?${params.toString()}`));
  };

  const changeLimit = (newLimit: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", newLimit);
    params.set("page", "1"); // Reset to first page when changing limit

    startTransition(() => router.push(`?${params.toString()}`));
  };

  const currentLimit = searchParams.get("limit") || "10";

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <Button variant="outline" size="sm" onClick={() => navigateToPage(currentPage - 1)} disabled={currentPage <= 1 || isPending}>
        <ChevronLeft/>
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({length: Math.min(5, totalPages)}, (_, index) => {
          let png;

          if (totalPages <= 5) png = index + 1;
          else if (currentPage <= 3) png = index + 1;
          else if (currentPage >= totalPages - 2) png = totalPages - 4 + index;
          else png = currentPage - 2 + index;

          return (
            <Button
              key={png}
              variant={png === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => navigateToPage(png)}
              disabled={isPending}
              className="w-10"
            >
              {png}
            </Button>
          );
        })}
      </div>

      <Button variant="outline" size="sm" onClick={() => navigateToPage(currentPage + 1)} disabled={currentPage === totalPages || isPending}>
        <ChevronRight/>
      </Button>

      <span className="text-sm max-md:text-clip text-muted-foreground ml-2">
        {/* Page 9 of 20 */}
        Page {currentPage} of {totalPages}
      </span>

      {/* Items per page selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Items per page:</span>
        <Select value={currentLimit} onValueChange={changeLimit} disabled={isPending}>
          <SelectTrigger className="w-[70px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Pagination;
