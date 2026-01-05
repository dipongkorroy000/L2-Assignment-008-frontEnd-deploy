"use client";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {Button} from "@/src/components/ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/src/components/ui/dialog";
import Image from "next/image";
import {useState} from "react";
import {DialogDescription} from "@radix-ui/react-dialog";

type GuideDataProps = {
  email: string;
  name: string;
  profilePhoto: string;
  averageRating: number;
  languages: string[];
  tours: {
    title: string;
    destination: string;
  }[];
};

const GuidesComponent = ({guides}: {guides: GuideDataProps[]}) => {
  const [open, setOpen] = useState(false);
  const [selectedTours, setSelectedTours] = useState<{title: string; destination: string}[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<string>("");

  const handleViewTours = (guideName: string, tours: {title: string; destination: string}[]) => {
    setSelectedGuide(guideName);
    setSelectedTours(tours);
    setOpen(true);
  };

  return (
    <div className="w-full rounded-md shadow-sm">
      <div className="max-h-[500px] overflow-y-auto">
        <Table className="w-full">
          <TableHeader className="sticky top-0 bg-white z-10 shadow-sm rounded-md">
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guides.length > 0 ? (
              guides.map((guide, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    {guide.profilePhoto ? (
                      <Image src={guide.profilePhoto} alt={guide.name} width={40} height={40} className="rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm">{guide.name.charAt(0)}</div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{guide.name}</TableCell>
                  <TableCell>{guide.email}</TableCell>
                  <TableCell>{guide.averageRating.toFixed(1)}</TableCell>
                  <TableCell>{guide.languages.join(", ")}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleViewTours(guide.name, guide.tours)}>
                      View Tours
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-6">
                  No guides found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal for showing tours */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedGuide}’s Tours</DialogTitle>
            <DialogDescription>Tours Title — Tours Destination</DialogDescription>
          </DialogHeader>
          <div className="space-y-2 mt-2">
            {selectedTours.length > 0 ? (
              selectedTours.map((tour, i) => (
                <p key={i} className="text-sm text-gray-700">
                  • <span className="font-medium">{tour.title}</span> — <span className="text-muted-foreground">{tour.destination}</span>
                </p>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No tours available</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GuidesComponent;
