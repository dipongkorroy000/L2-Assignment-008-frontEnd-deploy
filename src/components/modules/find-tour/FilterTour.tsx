"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useState, useTransition} from "react";
import {Input} from "@/src/components/ui/input";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/src/components/ui/select";
import {Button} from "@/src/components/ui/button";
import {Search, Filter} from "lucide-react";
import {Slider} from "@/src/components/ui/slider";

const FilterTours = ({categories, tourFee}: {categories: {id: number; title: string}[]; tourFee: {_max: {tourFee: number}; _min: {tourFee: number}}}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("searchTerm") || "");
  const [selectedCategoryId, setSelectedCategoryId] = useState(searchParams.get("categoryId") || "");

  // ✅ Price range state
  const minFee = tourFee._min.tourFee || 0;
  const maxFee = tourFee._max.tourFee || 1000000;
  const [priceRange, setPriceRange] = useState<[number, number]>([minFee, maxFee]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategoryId) params.set("categoryId", selectedCategoryId);
    if (searchTerm) params.set("searchTerm", searchTerm);
    if (priceRange) params.set("price", `${priceRange[0]},${priceRange[1]}`);

    startTransition(() => router.push(`/find-tour?${params.toString()}`));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategoryId("");
    setPriceRange([minFee, maxFee]);
    startTransition(() => router.push(window.location.pathname));
  };

  return (
    <div className="flex flex-col xl:flex-row sm:justify-between gap-4 xl:items-center">
      <div className="flex lg:flex-row flex-col gap-6 justify-start lg:items-center">
        <div className="flex gap-6 sm:flex-row flex-col">
          {/* Search Box */}
          <div className="flex items-center gap-2 w-full sm:w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder="Search tours..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

          {/* Category Select */}
          <Select value={selectedCategoryId} onValueChange={(val) => setSelectedCategoryId(val)} disabled={isPending}>
            <SelectTrigger className="w-full sm:w-52">
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
        </div>

        {/* Price Range Slider */}
        <div className="w-full sm:w-72">
          <label className="text-sm font-medium text-muted-foreground mb-1 block">Price Range</label>
          <Slider min={minFee} max={maxFee} step={1000} value={priceRange} onValueChange={(val) => setPriceRange(val as [number, number])} />
          <div className="flex justify-between text-sm mt-1">
            <span>৳ {priceRange[0].toLocaleString()}</span>
            <span>৳ {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

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
  );
};

export default FilterTours;
