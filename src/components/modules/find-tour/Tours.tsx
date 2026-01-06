import {ITour} from "@/src/types/tour.interface";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../ui/card";
import Image from "next/image";
import Link from "next/link";

const Tours = ({tours}: {tours: ITour[]}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours?.map((tour, idx) => (
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
  );
};

export default Tours;
