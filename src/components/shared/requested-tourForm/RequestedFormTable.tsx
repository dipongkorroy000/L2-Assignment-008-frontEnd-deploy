"use client";

import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription} from "@/src/components/ui/dialog";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {Button} from "@/src/components/ui/button";
import {ITourForm, TOUR_FROM_STATUS} from "@/src/types/requestedTourForm.interface";
import {updateRequestedFormStatus} from "@/src/services/public/tours.service";
import {toast} from "sonner";
import {paymentInit} from "@/src/services/guide/payment.service";

export default function RequestedFormTable({data}: {data: ITourForm[]}) {
  const [open, setOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string | null>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleRowClick = (id: number, comment: string, status: string, transactionId: string | null) => {
    setSelectedId(id);
    setSelectedComment(comment);
    setSelectedStatus(status);
    setTransactionId(transactionId);
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

  const handlePayment = async () => {
    if (!selectedId) return;

    const paymentInitiate = await paymentInit(selectedId);
    if (paymentInitiate.data.paymentUrl) window.open(paymentInitiate.data.paymentUrl);

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
            <TableHead>Guide Email</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Requested At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: ITourForm, idx: number) => (
            <TableRow
              key={idx}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => handleRowClick(item.id, item.comment, item.status, item.transactionId)}
            >
              <TableCell>{item.tour?.title}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.guide?.email}</TableCell>
              <TableCell>{item?.payments?.status || "NULL"}</TableCell>
              <TableCell>{new Date(item.updatedAt).toLocaleString("en-GB")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tour Comment</DialogTitle>
            <DialogDescription>Below is the comment left for this tour request.</DialogDescription>
            {transactionId && (
              <DialogDescription className="mt-5 font-bold text-md bg-chart-1 rounded-2xl px-5 py-1">Transaction ID : {transactionId}</DialogDescription>
            )}
          </DialogHeader>
          <p className="text-muted-foreground mt-4">{selectedComment}</p>

          <DialogFooter className="mt-6 flex gap-2">
            <Button variant="destructive" className="cursor-pointer" onClick={handleCancel}>
              Cancel Request
            </Button>
            {selectedStatus === TOUR_FROM_STATUS.CONFIRMED && (
              <Button onClick={handlePayment} className="cursor-pointer">
                Payment Now
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
