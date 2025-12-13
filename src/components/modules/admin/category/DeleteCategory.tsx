import { Button } from "@/src/components/ui/button";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const DeleteCategory = ({id, tourCount}: {id: number; tourCount: number}) => {
  const handleCategory = async (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <Button disabled={tourCount > 0} onClick={() => handleCategory(id)} className="bg-none bg-accent cursor-pointer hover:bg-accent">
      <Trash2 className="text-red-500" />
    </Button>
  );
};

export default DeleteCategory;