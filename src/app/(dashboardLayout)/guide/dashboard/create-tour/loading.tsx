import {Skeleton} from "@/src/components/ui/skeleton";
import {Button} from "@/src/components/ui/button";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-center text-2xl font-bold my-8">Create a New Tour</h2>

      <form className="flex flex-col flex-1 min-h-0">
        <div className="flex-1 overflow-y-auto space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Tour Fee */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Group Members */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Category Select */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Meeting Point */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* City Select */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {/* Image Upload */}
        <div className="mt-10 space-y-2">
          <Skeleton className="h-4 w-32" />
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
            <Skeleton className="h-10 w-10 rounded-md mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Submit Button */}
        <Button disabled className="mt-6 w-full">
          <Skeleton className="h-10 w-full rounded-md" />
        </Button>
      </form>
    </div>
  );
};

export default loading;
