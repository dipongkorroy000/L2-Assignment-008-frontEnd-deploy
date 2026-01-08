/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {ITour} from "@/src/types";
import {Button} from "@/src/components/ui/button";
import {toast} from "sonner";
import {updateTourStatusByGuide} from "@/src/services/guide/tour.service";

const ToursManagement = ({data}: {data: ITour[]}) => {
  const handleToggleStatus = async (id: number) => {
    try {
      const result = await updateTourStatusByGuide(id);
      if (result.success) {
        toast.success("Tour status updated!");
      } else {
        toast.error(result.message || "Failed to update status");
      }
    } catch (error: any) {
      toast.error("Error updating tour status");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Tours Management</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Requests</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell>{tour.title}</TableCell>
                <TableCell>{tour.category?.title || "-"}</TableCell>
                <TableCell>{tour.city}</TableCell>
                <TableCell>৳ {tour.tourFee.toLocaleString()}</TableCell>
                <TableCell>{tour.totalRequestForm ?? 0}</TableCell>
                <TableCell>
                  {tour.isActive ? <span className="text-green-600 font-medium">Active</span> : <span className="text-red-600 font-medium">Inactive</span>}
                </TableCell>
                <TableCell>{tour.createdAt ? new Date(tour.createdAt).toLocaleDateString("en-GB") : "-"}</TableCell>
                <TableCell>
                  <Button className="cursor-pointer" variant={tour.isActive ? "destructive" : "default"} onClick={() => handleToggleStatus(tour.id as number)}>
                    {tour.isActive ? "Deactivate" : "Activate"}
                  </Button>
                </TableCell>
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
};

export default ToursManagement;
