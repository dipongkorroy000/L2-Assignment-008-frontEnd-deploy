"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useState, useTransition} from "react";
import {Input} from "@/src/components/ui/input";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/src/components/ui/select";
import {Button} from "@/src/components/ui/button";
import {Search, Filter} from "lucide-react";

const FilterTours = ({categories}: {categories: {id: number; title: string}[]}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("searchTerm") || "");
  // ✅ এখন categoryId পড়বে
  const [selectedCategoryId, setSelectedCategoryId] = useState(searchParams.get("categoryId") || "");

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategoryId) params.set("categoryId", selectedCategoryId); // ✅ categoryId হিসেবে সেট করা হলো

    if (searchTerm) params.set("searchTerm", searchTerm);

    startTransition(() => router.push(`/find-tour?${params.toString()}`));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategoryId("");
    startTransition(() => router.push(window.location.pathname));
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center max-md:items-start">
      {/* Search Box */}
      <div className="flex items-center gap-2 w-72">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input type="text" placeholder="Search tours..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="flex gap-5 max-md:gap-1 max-md:text-sm">
        {/* Category Select */}
        <Select value={selectedCategoryId} onValueChange={(val) => setSelectedCategoryId(val)} disabled={isPending}>
          <SelectTrigger className="w-52 max-md:w-40">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={`${cat.id}`}>
                {cat.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button onClick={applyFilters} disabled={isPending}>
            <Filter className="h-4 w-4 mr-1" /> Apply
          </Button>
          <Button variant="outline" onClick={clearFilters} disabled={isPending}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterTours;
