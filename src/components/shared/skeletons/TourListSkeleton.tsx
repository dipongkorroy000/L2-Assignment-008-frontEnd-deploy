import {Skeleton} from "@/src/components/ui/skeleton";
import {Card, CardContent, CardFooter, CardHeader} from "@/src/components/ui/card";

const TourListSkeleton = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col xl:flex-row sm:justify-between gap-4 xl:items-center">
        {/* Left Section */}
        <div className="flex lg:flex-row flex-col gap-6 justify-start lg:items-center">
          <div className="flex gap-6 sm:flex-row flex-col">
            {/* Search Box Skeleton */}
            <div className="flex items-center gap-2 w-full sm:w-72">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Category Select Skeleton */}
            <div className="w-full sm:w-52">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* Price Range Slider Skeleton */}
          <div className="w-full sm:w-72 space-y-2">
            <Skeleton className="h-4 w-24" /> {/* Label */}
            <Skeleton className="h-2 w-full rounded-md" /> {/* Slider track */}
            <div className="flex justify-between text-sm mt-1">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex gap-2">
          <Skeleton className="h-10 w-20 rounded-md" />
          <Skeleton className="h-10 w-20 rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        {Array.from({length: 6}).map((_, idx) => (
          <Card key={idx} className="shadow-sm bg-white">
            <CardHeader className="flex justify-between">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-12" />
            </CardHeader>
            <CardContent className="py-3 max-md:py-1 max-md:text-sm space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="w-full h-40 max-md:h-32 rounded-md" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TourListSkeleton;
