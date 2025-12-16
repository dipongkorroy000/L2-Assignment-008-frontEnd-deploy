"use client";

import React, {useState} from "react";
import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from "@/src/components/ui/table";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/src/components/ui/dialog";
import {Button} from "@/src/components/ui/button";
import {Textarea} from "@/src/components/ui/textarea";
import {createReview} from "@/src/services/tourist/tourist.service";
import {DialogDescription} from "@radix-ui/react-dialog";
import {toast} from "sonner";

interface IRequestedForm {
  id: number;
  tour: {title: string};
  guide: {name: string};
  status: string;
  updatedAt: Date;
}

// ✅ Client Component for interactivity
const ReviewCreateComponent = ({data}: {data: IRequestedForm[]}) => {
  const [open, setOpen] = useState(false);
  const [selectedTourFormId, setSelectedTour] = useState<number>(Number || null);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");

  const handleRowClick = (requestedFormId: number) => {
    setSelectedTour(requestedFormId);
    setOpen(true);
  };

  const handleSubmit = async () => {
    if (!rating) return toast.error("Please rating provide");
    if (!comment) return toast.error("Please comment provide");
    const result = await createReview(selectedTourFormId, {rating, comment});

    if (result.success) toast.success("Review submit successfully");

    setOpen(false);
    setRating(0);
    setComment("");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 space-y-6">
      <h2 className="text-2xl font-bold">Provide Reviews</h2>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Guide</TableHead>
            <TableHead>Updated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.length > 0 ? (
            data.map((requestedForm) => (
              <TableRow key={requestedForm.id} className="cursor-pointer hover:bg-muted/50" onClick={() => handleRowClick(requestedForm.id)}>
                <TableCell>{requestedForm.tour?.title}</TableCell>
                <TableCell className="capitalize">{requestedForm.status}</TableCell>
                <TableCell>{requestedForm.guide?.name}</TableCell>
                <TableCell>{new Date(requestedForm.updatedAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground">
                No completed tours available for review.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Review Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Provide Review</DialogTitle>
            <DialogDescription>Provide review your completed tours</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Rating */}
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <Button
                  key={num}
                  variant="outline"
                  onClick={() => setRating(num)}
                  className={`h-8 w-8 p-0 text-md ${num <= rating ? "bg-chart-3 hover:bg-chart-5" : "bg-muted text-foreground"} rounded-full`}
                >
                  ⭐
                </Button>
              ))}
            </div>

            {/* Comment */}
            <Textarea placeholder="Write your comment..." value={comment} onChange={(e) => setComment(e.target.value)} rows={10} />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit Review</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewCreateComponent;
