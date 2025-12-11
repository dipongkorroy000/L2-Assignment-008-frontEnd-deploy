"use client";

import {Plus} from "lucide-react";
import {useRouter} from "next/navigation";
import {useState, useTransition} from "react";
import CreateCategoryDialog from "./CreateCategory";
import ManagementPageHeader from "../../dashboard/Management/Header";

const CategoryManagement = () => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSuccess = () => {
    startTransition(() => router.refresh());
  };

  return (
    <>
      <CreateCategoryDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSuccess={handleSuccess} />

      <ManagementPageHeader
        title="Categories Management"
        description="Manage Categories information and details"
        action={{
          label: "Add Category",
          icon: Plus,
          onClick: () => setIsDialogOpen(true),
        }}
      />
    </>
  );
};

export default CategoryManagement;
