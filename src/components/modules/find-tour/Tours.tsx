import React from "react";

import {ITour} from "@/src/types/tour.interface";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../../ui/card";
import Image from "next/image";
import Link from "next/link";

const Tours = ({tours}: {tours: ITour[]}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:mx-5">
      {tours?.map((tour, idx) => (
        <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
          <Link href={`/explore-tours/${tour.id}`}>
            <CardHeader>
              <CardTitle>{tour.averageRating}</CardTitle>
              <CardTitle>{tour.title}</CardTitle>

              <CardDescription>{tour.city}</CardDescription>
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
  );
};

export default Tours;
