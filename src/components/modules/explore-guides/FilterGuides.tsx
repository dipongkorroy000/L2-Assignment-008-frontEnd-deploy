"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useState, useTransition} from "react";
import {Input} from "@/src/components/ui/input";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/src/components/ui/select";
import {Button} from "@/src/components/ui/button";
import {Search, Filter} from "lucide-react";

const FilterGuides = ({languages, categories}: {languages: string[]; categories: {id: number; title: string}[]}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("searchTerm") || "");
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get("language") || "");
  const [selectedCategoryId, setSelectedCategoryId] = useState(searchParams.get("categoryId") || "");

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (selectedLanguage) params.set("language", selectedLanguage);
    if (selectedCategoryId) params.set("categoryId", selectedCategoryId);
    if (searchTerm) params.set("searchTerm", searchTerm);

    startTransition(() => router.push(`/explore-guides?${params.toString()}`));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLanguage("");
    setSelectedCategoryId("");
    startTransition(() => router.push(window.location.pathname));
  };

  return (
    <section className="w-full bg-white rounded-lg shadow-sm p-4 flex gap-4 max-lg:flex-col">
      {/* Search Box */}
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex items-center gap-2 w-full md:w-72">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search Guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-md:text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 w-full">
          <Select value={selectedLanguage} onValueChange={(val) => setSelectedLanguage(val)} disabled={isPending}>
            <SelectTrigger className="w-full md:w-52">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang, idx) => (
                <SelectItem key={idx} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCategoryId} onValueChange={(val) => setSelectedCategoryId(val)} disabled={isPending}>
            <SelectTrigger className="w-full md:w-52">
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
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-2 w-full md:w-auto">
        <Button onClick={applyFilters} disabled={isPending} className="w-full md:w-auto">
          <Filter className="h-4 w-4 mr-1 max-md:text-sm" /> Apply
        </Button>
        <Button variant="outline" onClick={clearFilters} disabled={isPending} className="w-full md:w-auto max-md:text-sm">
          Clear
        </Button>
      </div>
    </section>
  );
};

export default FilterGuides;
