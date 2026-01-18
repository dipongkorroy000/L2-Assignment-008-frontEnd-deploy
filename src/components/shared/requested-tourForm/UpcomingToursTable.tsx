"use client";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

interface UpcomingTour {
  tour: {
    id: number;
    title: string;
    groupMembers: number;
    category: {title: string};
    guide?: {
      contactNumber: string;
      email: string;
    };
  };
  tourist?: {email: string; contactNumber: string};
  tourDate: string;
}

export default function UpcomingToursTable({data, role}: {data: UpcomingTour[]; role: string}) {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Upcoming Tours</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour Title</TableHead>
            <TableHead>Group Members</TableHead>
            <TableHead>Category</TableHead>
            {(role === "TOURIST" || role === "ADMIN") && <TableHead>Guide Email</TableHead>}
            {(role === "GUIDE" || role === "ADMIN") && <TableHead>Tourist Email</TableHead>}
            {(role === "TOURIST" || role === "ADMIN") && <TableHead>Guide Contact</TableHead>}
            {(role === "GUIDE" || role === "ADMIN") && <TableHead>Tourist Contact</TableHead>}
            <TableHead>Tour Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.tour.title}</TableCell>
                <TableCell>{item.tour.groupMembers}</TableCell>
                <TableCell>{item.tour.category.title}</TableCell>
                {(role === "TOURIST" || role === "ADMIN") && <TableCell>{item.tour.guide?.email}</TableCell>}
                {(role === "GUIDE" || role === "ADMIN") && <TableCell>{item.tourist?.email}</TableCell>}
                {(role === "TOURIST" || role === "ADMIN") && <TableCell>{item.tour.guide?.contactNumber}</TableCell>}
                {(role === "GUIDE" || role === "ADMIN") && <TableCell>{item.tourist?.contactNumber}</TableCell>}
                <TableCell>{new Date(item.tourDate).toLocaleDateString("en-GB")}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                No upcoming tours found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
