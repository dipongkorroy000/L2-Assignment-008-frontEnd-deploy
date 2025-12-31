"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useState, useTransition} from "react";
import {Input} from "@/src/components/ui/input";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/src/components/ui/select";
import {Button} from "@/src/components/ui/button";
import {Search, Filter} from "lucide-react";

const FilterUsers = ({userRoles, defaultPath}: {userRoles: {role: string}[]; defaultPath: string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [email, setSearchTerm] = useState(searchParams.get("searchTerm") || "");
  const [selectedRole, setSelectedRole] = useState(searchParams.get("categoryId") || "");

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedRole) params.set("role", selectedRole);

    if (email) params.set("email", email);

    startTransition(() => router.push(`${defaultPath}/users-management?${params.toString()}`));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRole("");
    startTransition(() => router.push(window.location.pathname));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center my-6">
      {/* Search Box */}
      <div className="flex items-center gap-2 w-full md:w-1/3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input type="text" placeholder="Search user by email..." value={email} onChange={(e) => setSearchTerm(e.target.value)} className="w-full" />
      </div>

      {/* Category Select */}
      <Select value={selectedRole} onValueChange={(val) => setSelectedRole(val)} disabled={isPending}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Role" />
        </SelectTrigger>
        <SelectContent>
          {userRoles.map((cat) => (
            <SelectItem key={cat.role} value={`${cat.role}`}>
              {cat.role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button onClick={applyFilters} disabled={isPending}>
          <Filter className="h-4 w-4 mr-1" /> Apply
        </Button>
        <Button variant="outline" onClick={clearFilters} disabled={isPending}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default FilterUsers;
