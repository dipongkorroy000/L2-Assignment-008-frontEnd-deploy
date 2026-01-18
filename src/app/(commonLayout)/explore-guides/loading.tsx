import ExploreGuideTableSkeleton from "@/src/components/shared/skeletons/ExploreGuideTableSkeleton";
import {Skeleton} from "@/src/components/ui/skeleton";

const loading = () => {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground">
      <div className="max-w-7xl mx-auto min-h-dvh py-20 space-y-20 max-md:space-y-10 max-md:py-5 max-xl:mx-10 max-md:mx-0 px-5">
        <div className="w-full bg-white rounded-lg shadow-sm p-4 flex gap-4 max-lg:flex-col">
          <div className="flex gap-4 max-md:flex-col w-full">
            <div className="flex items-center gap-2 w-full md:w-72">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-2 md:flex-row md:gap-4 w-full">
              <Skeleton className="h-10 w-full md:w-52 rounded-md" />
              <Skeleton className="h-10 w-full md:w-52 rounded-md" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 md:flex-row md:gap-2 w-full md:w-auto">
            <Skeleton className="h-10 w-full md:w-24 rounded-md" />
            <Skeleton className="h-10 w-full md:w-24 rounded-md" />
          </div>
        </div>

        <ExploreGuideTableSkeleton></ExploreGuideTableSkeleton>
      </div>
    </section>
  );
};

export default loading;
