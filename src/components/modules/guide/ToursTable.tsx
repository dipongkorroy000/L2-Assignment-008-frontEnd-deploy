"use client";

import {useState} from "react";
import {ICategory, ITour} from "@/src/types/tour.interface";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {Button} from "@/src/components/ui/button";
import TourDeleteBtn from "../../static/TourDeleteBtn";
import {getTour} from "@/src/services/public/tours.service";
import EditTourModal from "./EditTourModal";
import {updateTour, updateTourStatusByGuide} from "@/src/services/guide/tour.service";
import {toast} from "sonner";
import Swal from "sweetalert2";

const ToursTable = ({tours, categories}: {tours: ITour[]; categories: ICategory[]}) => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getTourData = async (id: number) => await getTour(id);

  const handleEdit = async (id: number, payload: Partial<ITour>) => {
    try {
      const result = await updateTour(id, payload);
      if (result.success) toast.success(result.message || "Updated successfully");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const handleActive = async (id: number, active: boolean) => {
    const result = await updateTourStatusByGuide(id);
    if (result.success) {
      Swal.fire({
        title: `${active ? "INACTIVE" : "ACTIVE"}`,
        icon: "success",
        draggable: true,
      });
    }
  };

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  return (
    <section className="mt-10 max-w-7xl mx-auto">
      <h2 className="text-2xl text-primary font-bold mb-5">My Tours</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Fee (BDT)</TableHead>
            <TableHead>Group Members</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tours?.length > 0 ? (
            tours.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell className="font-medium">{tour.title}</TableCell>
                <TableCell>{tour.tourFee}</TableCell>
                <TableCell>{tour.groupMembers}</TableCell>
                <TableCell>{tour.category?.title}</TableCell>
                <TableCell>{tour.city}</TableCell>
                <TableCell>{tour.isActive ? "ACTIVE" : "INACTIVE"}</TableCell>
                <TableCell>{tour.createdAt ? new Date(tour.createdAt).toLocaleDateString() : "-"}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleOpenModal(Number(tour.id))}>
                    Edit
                  </Button>
                  <TourDeleteBtn id={Number(tour.id)} />
                  <Button variant="link" size="sm" className="cursor-pointer" onClick={() => handleActive(Number(tour.id), tour.isActive)}>
                    {tour.isActive ? "INACTIVE" : "ACTIVE"}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                No tours found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* ✅ Modal */}
      <EditTourModal open={open} onClose={() => setOpen(false)} tourId={selectedId} getTourData={getTourData} handleEdit={handleEdit} categories={categories} />
    </section>
  );
};

export default ToursTable;
