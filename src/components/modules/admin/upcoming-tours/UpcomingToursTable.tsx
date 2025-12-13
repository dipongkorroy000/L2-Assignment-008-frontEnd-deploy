"use client";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

export interface IUpcomingTour {
  tour: {
    id: number;
    title: string;
    groupMembers: number;
    category: string;
    guide: {
      email: string;
      contactNumber: string;
    };
  };
  tourist: {
    email: string;
    contactNumber: string;
  };
  tourDate: Date;
}

interface Props {
  tours: IUpcomingTour[];
}

export default function UpcomingTourTable({tours}: Props) {
  return (
    <div className="mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Group Members</TableHead>
            <TableHead>Guide Email</TableHead>
            <TableHead>Guide Contact</TableHead>
            <TableHead>Tourist Email</TableHead>
            <TableHead>Tourist Contact</TableHead>
            <TableHead>Tour Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tours.length > 0 ? (
            tours.map((tour, idx) => (
              <TableRow key={idx}>
                <TableCell>{tour.tour.title}</TableCell>
                <TableCell>{tour.tour.category}</TableCell>
                <TableCell>{tour.tour.groupMembers}</TableCell>
                <TableCell>{tour.tour.guide.email}</TableCell>
                <TableCell>{tour.tour.guide.contactNumber}</TableCell>
                <TableCell>{tour.tourist.email}</TableCell>
                <TableCell>{tour.tourist.contactNumber}</TableCell>
                <TableCell>{new Date(tour.tourDate).toLocaleDateString("en-GB")}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center text-muted-foreground">
                No tours found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
