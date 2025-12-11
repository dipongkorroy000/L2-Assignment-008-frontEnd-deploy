"use client";

import {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import UserDetailsModal from "./UserDetailsModal";

interface Props {
  users: {id: number; email: string; role: string; status: string; createdAt: Date}[];
}

export default function RoleWiseTable({users}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedUserId(id);
    setOpen(true);
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id} className="cursor-pointer hover:bg-muted" onClick={() => handleRowClick(user.id)}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleString("en-GB")}</TableCell>
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
