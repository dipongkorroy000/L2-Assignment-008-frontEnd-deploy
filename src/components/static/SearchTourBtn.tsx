"use client";

import {FileSearch, Loader2} from "lucide-react";
import {useRouter} from "next/navigation";
import {useTransition} from "react";
import {Button} from "../ui/button";

const SearchTourBtn = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      router.push("/find-tour");
    });
  };

  return (
    <Button
      onClick={handleClick}
      className="group flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary via-chart-3 to-chart-5 text-white font-semibold shadow-md hover:from-chart-3 hover:via-chart-4 hover:to-chart-5 transition-all duration-300 ease-in-out cursor-pointer"
    >
      {isPending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="text-sm">Loading...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FileSearch size={22} className="transition-transform group-hover:scale-110" />
          <span className="text-sm md:text-base">Search Tour</span>
        </div>
      )}
    </Button>
  );
};

export default SearchTourBtn;
