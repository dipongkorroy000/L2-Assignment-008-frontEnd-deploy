import {ITour} from "@/src/types/tour.interface";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../ui/card";
import Image from "next/image";
import Link from "next/link";
import SearchTourBtn from "../../static/SearchTourBtn";

interface CategoryGroup {
  id: number;
  title: string;
  tour: ITour[];
}

const Tours = ({tours}: {tours: CategoryGroup[]}) => {
  return (
    <div className="max-w-7xl mx-auto py-20 max-md:py-5 px-5 max-xl:mx-10 max-md:mx-0">
      {/* Search Button */}
      <div className="bg-secondary px-5 py-2 rounded-2xl flex justify-end">
        <SearchTourBtn></SearchTourBtn>
      </div>

      {/* Category Groups */}
      {tours.map((category) => (
        <div key={category.id} className="mt-8 border p-8 rounded-sm bg-clip-border max-md:px-2">
          <h2 className="text-xl font-bold text-primary">{category.title}</h2>

          {category.tour.length === 0 ? (
            <p className="text-muted-foreground">No tours available in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
              {category.tour.map((tour, idx) => (
                <Card key={idx} className="shadow-sm hover:shadow-lg transition-shadow bg-white">
                  <Link href={`/explore-tours/${tour.id}`}>
                    <CardHeader className="flex justify-between">
                      <CardTitle className="md:text-xl">{tour.title}</CardTitle>
                      <CardDescription>⭐ {tour.averageRating}</CardDescription>
                    </CardHeader>
                    <CardContent className="py-3 max-md:py-1 max-md:text-sm">
                      <p>
                        <strong>Fee:</strong> {tour.tourFee} BDT
                      </p>
                      <p>
                        <strong>Group Members:</strong> {tour.groupMembers}
                      </p>
                      <p>
                        <strong>Destination:</strong> {tour.destination}
                      </p>
                    </CardContent>
                    {tour.image && (
                      <CardFooter>
                        <Image height={200} width={200} src={tour.image} alt={tour.title} className="w-full h-40 max-md:h-32 object-cover rounded-md" />
                      </CardFooter>
                    )}
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tours;
