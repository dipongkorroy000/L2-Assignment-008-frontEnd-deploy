import React from "react";
import {ITour} from "@/src/types/tour.interface";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../ui/card";
import Image from "next/image";
import Link from "next/link";
import {FileSearch} from "lucide-react";

interface CategoryGroup {
  id: number;
  title: string;
  tour: ITour[];
}

const Tours = ({tours}: {tours: CategoryGroup[]}) => {
  return (
    <div className="my-20">
      {/* Search Button */}
      <div className="bg-accent px-5 py-2 rounded-2xl flex justify-end">
        <Link href={"/find-tour"} className="flex text-chart-5 gap-1 items-center bg-white px-4 py-1 rounded-3xl hover:bg-chart-4 hover:text-white">
          <strong className="text-xl">Search Tour</strong>
          <FileSearch size={30} className="cursor-pointer" />
        </Link>
      </div>

      {/* Category Groups */}
      {tours.map((category) => (
        <div key={category.id} className="mt-8 bg-accent border p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-primary">{category.title}</h2>

          {category.tour.length === 0 ? (
            <p className="text-muted-foreground">No tours available in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {category.tour.map((tour, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href={`/explore-tours/${tour.id}`}>
                    <CardHeader>
                      <CardTitle>{tour.title}</CardTitle>
                      <CardDescription>
                        ⭐ {tour.averageRating} • {tour.city}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                        <Image height={200} width={200} src={tour.image} alt={tour.title} className="w-full h-40 object-cover rounded-md" />
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
