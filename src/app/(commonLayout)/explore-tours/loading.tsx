import {Skeleton} from "@/src/components/ui/skeleton";
import {Card, CardContent, CardFooter, CardHeader} from "@/src/components/ui/card";

const loading = () => {
  return (
    <section className="bg-gradient-to-r from-primary-foreground via-white to-primary-foreground min-h-screen">
      <div className="max-w-7xl pt-5 mx-auto space-y-8 max-md:px-5 px-5 max-xl:mx-10 max-md:mx-0">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-48" />
            </div>
            <Skeleton className="h-4 w-80 mx-auto" />
          </div>

          {/* Input Section */}
          <div className="shadow-sm rounded-lg p-6 max-md:p-4 space-y-4 border max-md:text-sm">
            <Skeleton className="h-24 w-full rounded-md" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 max-md:py-5 px-5 max-xl:mx-10 max-md:mx-0">
          {/* Search Button */}
          <div className="bg-secondary px-5 py-2 rounded-2xl flex justify-end">
            <div className="group flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary via-chart-3 to-chart-5 text-white font-semibold shadow-md transition-all duration-300 ease-in-out cursor-pointer">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          {/** Tours */}
          {Array.from({length: 3}).map((_, catIdx) => (
            <div key={catIdx} className="mt-8 border p-8 rounded-sm bg-clip-border max-md:px-2">
              {/* Category Title */}
              <Skeleton className="h-6 w-48 mb-4" />

              {/* Tours Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
                {Array.from({length: 3}).map((_, idx) => (
                  <Card key={idx} className="shadow-sm bg-white">
                    <CardHeader className="flex justify-between">
                      <Skeleton className="h-5 w-2/3" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default loading;
