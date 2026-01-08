"use client";

import {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import UserDetailsModal from "./UserDetailsModal";
import {updateUserStatus} from "@/src/services/admin/users.service";
import {Button} from "@/src/components/ui/button";
import {UserStats} from "@/src/types/auth.interface";
import {toast} from "sonner";

interface Props {
  users: {id: number; email: string; role: string; status: string; createdAt: Date}[];
  userId: number;
}

export default function RoleWiseTable({users, userId}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  const handleUserStatus = async (id: number, status: string) => {
    const result = await updateUserStatus(id, {status});

    if (result.success) toast.success("Successfully Update User Status");
    else toast.error("Failed action");
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">All Users</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>CreatedAt</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id} className="hover:bg-muted">
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleString("en-GB")}</TableCell>
                <TableCell>
                  {user.status == UserStats.ACTIVE && user.id != userId && (
                    <Button onClick={() => handleUserStatus(user.id, UserStats.BANNED)} className="bg-red-400 cursor-pointer">
                      Banned
                    </Button>
                  )}
                  {user.status == UserStats.BANNED && (
                    <Button onClick={() => handleUserStatus(user.id, UserStats.ACTIVE)} className="cursor-pointer">
                      Active
                    </Button>
                  )}
                </TableCell>
                <TableCell className="underline cursor-pointer" onClick={() => handleRowClick(user.id)}>
                  View
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="text-center text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* ✅ Modal */}
      <UserDetailsModal open={open} onClose={() => setOpen(false)} userId={selectedUserId} />
    </div>
  );
}
