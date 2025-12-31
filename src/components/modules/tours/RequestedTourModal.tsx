"use client";

import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/src/components/ui/dialog";
import {Button} from "@/src/components/ui/button";
import {Textarea} from "@/src/components/ui/textarea";

import {tourRequested} from "@/src/services/public/tours.service";
import {toast} from "sonner";
import {Calendar} from "../../ui/calendar";

export default function RequestModal({guideId, tourId}: {guideId: number; tourId: number}) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [tourDate, setTourDate] = useState<Date | undefined>(undefined);

  // calculate min/max date
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 3); // আজকের দিন থেকে ৩ দিন পর
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 15); // আজকের দিন থেকে ১৫ দিনের মধ্যে

  const handleConfirm = async () => {
    if (!tourDate) {
      toast.error("Please select a tour date");
      return;
    }

    const loading = toast.loading("Requesting...");
    const request = await tourRequested({tourId, guideId, comment, tourDate});

    if (request.success) toast.success("Tour Requested Successfully", {id: loading});
    else toast.error(request.message || "Fetch failed", {id: loading});

    setOpen(false);
    setComment("");
    setTourDate(undefined);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} className="w-full">
        Request Tour
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Tour</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <label className="text-sm font-medium">Your Comment</label>
            <Textarea placeholder="Write your comment..." value={comment} onChange={(e) => setComment(e.target.value)} className="min-h-[100px]" />

            <label className="text-sm font-medium">Select Tour Date</label>
            <Calendar mode="single" selected={tourDate} onSelect={setTourDate} disabled={(date) => date < minDate || date > maxDate} />
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
