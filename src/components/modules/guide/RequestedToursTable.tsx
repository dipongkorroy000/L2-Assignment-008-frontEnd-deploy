"use client";

import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription} from "@/src/components/ui/dialog";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {Button} from "@/src/components/ui/button";
import {ITourForm, PAYMENT_STATUS, TOUR_FROM_STATUS} from "@/src/types/requestedTourForm.interface";
import {updateRequestedFormStatus} from "@/src/services/tours/tours.service";
import {toast} from "sonner";
import {updateRequestedTourFormStatus} from "@/src/services/tour-from/tour-form.service";
import Swal from "sweetalert2";

export default function RequestedToursTable({data}: {data: ITourForm[]}) {
  const [open, setOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedItemPaymentStatus, setSelectedItemPaymentStatus] = useState<string>("");

  const handleRowClick = (id: number, comment: string, status: string, paymentStatus: string) => {
    setSelectedItemPaymentStatus(paymentStatus);
    setSelectedId(id);
    setSelectedComment(comment);
    setSelectedStatus(status);
    setOpen(true);
  };

  const handleCancel = async () => {
    if (!selectedId) return;
    if (selectedStatus === TOUR_FROM_STATUS.CANCELLED) {
      toast.error("Already canceled this requested");
      setOpen(false);
      return;
    }
    try {
      const result = await updateRequestedFormStatus(selectedId, {status: TOUR_FROM_STATUS.CANCELLED});

      if (result.success) {
        toast.success("Cancel Successfully");
      }
    } catch (err) {
      console.error("Cancel failed:", err);
      toast.error("Failed Canceled");
    } finally {
      setOpen(false);
    }
  };

  const handleAccept = async () => {
    if (!selectedId) return;

    const result = await updateRequestedTourFormStatus(selectedId, {status: TOUR_FROM_STATUS.CONFIRMED});

    if (result.success) {
      Swal.fire({
        title: `${TOUR_FROM_STATUS.CONFIRMED}`,
        icon: "success",
        draggable: true,
      });
    }

    setOpen(false);
  };

  const handleCompleted = async () => {
    if (!selectedId) return;

    const result = await updateRequestedTourFormStatus(selectedId, {status: TOUR_FROM_STATUS.COMPLETED});

    if (result.success) {
      Swal.fire({
        title: `${TOUR_FROM_STATUS.COMPLETED}`,
        icon: "success",
        draggable: true,
      });
    }

    setOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Requested Tours</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tourist Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Requested At</TableHead>
            <TableHead>Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: ITourForm, idx: number) => (
            <TableRow
              key={idx}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => handleRowClick(item.id, item.comment, item.status, item.payments?.status)}
            >
              <TableCell>{item.tour?.title}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.tourist?.email}</TableCell>
              <TableCell>{item.tourist?.contactNumber}</TableCell>
              <TableCell>{new Date(item.updatedAt).toLocaleString("en-GB")}</TableCell>
              <TableCell>{item?.payments?.status || "NULL"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tour Comment</DialogTitle>
            <DialogDescription>Below is the comment left for this tour request.</DialogDescription>
          </DialogHeader>
          <p className="text-muted-foreground mt-4">{selectedComment}</p>

          <DialogFooter className="mt-6 flex gap-2">
            {selectedStatus === TOUR_FROM_STATUS.CONFIRMED && selectedItemPaymentStatus === PAYMENT_STATUS.PAID && (
              <Button variant="default" className={`cursor-pointer`} onClick={handleCompleted}>
                Completed Tour
              </Button>
            )}
            <Button variant="default" className={`cursor-pointer`} disabled={selectedStatus === TOUR_FROM_STATUS.CONFIRMED} onClick={handleAccept}>
              Accept Request
            </Button>
            <Button variant="destructive" disabled={selectedItemPaymentStatus === PAYMENT_STATUS.PAID} className="cursor-pointer" onClick={handleCancel}>
              Cancel Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
