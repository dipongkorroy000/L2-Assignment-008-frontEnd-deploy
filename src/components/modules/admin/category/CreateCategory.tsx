"use client";

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/src/components/ui/dialog";
import {Button} from "@/src/components/ui/button";
import {Field, FieldLabel} from "@/src/components/ui/field";
import {Input} from "@/src/components/ui/input";
import {createCategory} from "@/src/services/admin/category.service";
import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {Form} from "@/src/components/ui/form";

interface ISpecialtiesFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateCategoryDialog = ({open, onClose, onSuccess}: ISpecialtiesFormDialogProps) => {
  const form = useForm<{title: string}>({
    defaultValues: {title: ""},
  });

  const onSubmit = async (data: {title: string}) => {
    try {
      const result = await createCategory({title: data.title});

      if (result?.success) {
        toast.success("Category created successfully!");
        onSuccess(); // callback to refresh list
        onClose(); // close dialog
      } else {
        toast.error(result?.message || "Failed to create category");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input id="title" placeholder="Educational Tour" {...form.register("title", {required: "Title is required"})} />
              {/* ✅ Error message */}
              {form.formState.errors.title && <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>}
            </Field>

            <div className="flex justify-end gap-2">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;
