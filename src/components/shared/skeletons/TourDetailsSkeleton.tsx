import {Skeleton} from "@/src/components/ui/skeleton";
import {Card, CardContent, CardFooter, CardHeader} from "@/src/components/ui/card";

const TourDetailsSkeleton = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-foreground via-white to-primary-foreground max-md:py-5">
      <div className="max-w-4xl mx-auto bg-clip-border max-lg:mx-10 max-md:mx-0 px-5">
        <Card className="shadow-sm bg-clip-border">
          {/* Tour Header */}
          <CardHeader>
            <Skeleton className="h-6 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>

          {/* Tour Image */}
          <CardContent>
            <Skeleton className="w-full h-64 rounded-md mb-6 max-md:mb-2 max-md:h-40" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-5" />

            <div className="space-y-2 max-md:space-y-1 max-md:text-sm">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-3 items-center">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-16 rounded-2xl" />
                <Skeleton className="h-6 w-16 rounded-2xl" />
              </div>
            </div>
          </CardContent>

          {/* Guide Info */}
          <CardContent>
            <Skeleton className="h-5 w-1/3 mb-3" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </CardContent>

          {/* Request Modal */}
          <CardContent>
            <div className="p-6 border rounded-lg bg-muted/30 space-y-3">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-8 w-24" />
            </div>
          </CardContent>

          {/* Reviews */}
          <CardFooter className="flex flex-col items-start gap-2 py-10 max-md:py-5">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            {Array.from({length: 2}).map((_, idx) => (
              <div key={idx} className="space-y-3 border p-5 rounded-sm w-full mb-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto bg-clip-border mt-5 max-lg:mx-10 max-md:mx-0 px-5">
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </section>
  );
};

export default TourDetailsSkeleton;
