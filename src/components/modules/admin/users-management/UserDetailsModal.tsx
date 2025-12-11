/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {useEffect, useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/src/components/ui/dialog";
import {Button} from "@/src/components/ui/button";
import {getUser} from "@/src/services/admin/users-management/users.service";

interface Props {
  open: boolean;
  onClose: () => void;
  userId: number | null;
}

export default function UserDetailsModal({open, onClose, userId}: Props) {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (userId) {
      getUser(Number(userId)).then((res) => setUserData(res.data));
    }
  }, [userId]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        {userData ? (
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Contact:</strong> {userData.contactNumber}
            </p>
            <p>
              <strong>Address:</strong> {userData.address || "N/A"}
            </p>
            <p>
              <strong>Gender:</strong> {userData.gender  || "N/A"}
            </p>
            <p>
              <strong>Languages:</strong> {userData.languages?.join(", ")}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
