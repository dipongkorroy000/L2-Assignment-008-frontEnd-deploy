"use client";
import React from "react";
import {Button} from "../ui/button";
import Swal from "sweetalert2";
import {tourDeleteById} from "@/src/services/guide/tour.service";

const TourDeleteBtn = ({id}: {id: number}) => {
  const handleDelete = async (tourId: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await tourDeleteById(tourId);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <Button variant="destructive" size="sm" className="cursor-pointer" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  );
};

export default TourDeleteBtn;
