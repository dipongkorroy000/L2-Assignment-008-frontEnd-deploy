"use client";

import {useEffect, useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/src/components/ui/dialog";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";
import {Button} from "@/src/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";
import {ITour} from "@/src/types";
import {DialogDescription} from "@radix-ui/react-dialog";

interface Props {
  open: boolean;
  onClose: () => void;
  tourId: number | null;
  getTourData: (id: number) => Promise<ITour>;
  handleEdit: (id: number, payload: Partial<ITour>) => void;
  categories: {title: string; id: number}[];
}

export default function EditTourModal({open, onClose, tourId, getTourData, handleEdit, categories}: Props) {
  const [formData, setFormData] = useState<Partial<ITour>>({});

  useEffect(() => {
    if (tourId) getTourData(tourId).then((data) => setFormData(data));
  }, [tourId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tourId) handleEdit(tourId, formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Tour</DialogTitle>
          <DialogDescription>Update this tour</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input value={formData.title || ""} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Title" required />
          <Input value={formData.city || ""} onChange={(e) => setFormData({...formData, city: e.target.value})} placeholder="City" required />

          {/* ✅ Category Select */}
          <Select
            value={formData.category?.id ? String(formData.category.id) : ""}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                category: {id: Number(value), title: categories.find((c) => c.id === Number(value))?.title || ""},
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={String(cat.id)}>
                  {cat.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            value={formData.destination || ""}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
            placeholder="Destination"
            required
          />
          <Input value={formData.duration || ""} onChange={(e) => setFormData({...formData, duration: e.target.value})} placeholder="Duration" required />
          <Input
            type="number"
            value={formData.groupMembers || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                groupMembers: Number(e.target.value),
              })
            }
            placeholder="Group Members"
            required
          />
          <Input
            value={formData.meetingPoint || ""}
            onChange={(e) => setFormData({...formData, meetingPoint: e.target.value})}
            placeholder="Meeting Point"
            required
          />
          <Textarea
            value={formData.description || ""}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Description"
            required
          />

          <DialogFooter className="mt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
