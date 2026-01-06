"use client";

import {useActionState, useEffect, useState} from "react";
import {toast} from "sonner";
import {createTour} from "@/src/services/guide/tour.service";
import {Field, FieldLabel} from "../../ui/field";
import {Button} from "../../ui/button";
import {Input} from "../../ui/input";
import InputFieldError from "../../shared/InputFieldError";
import {Camera} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {getDefaultDashboardRoute} from "@/src/utils/auth-utils";

interface Category {
  title: string;
  id: number;
}

const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barisal",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cox's Bazar",
  "Cumilla",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokati",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

const CreateTour = ({categories}: {categories: Category[]}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [state, formAction, pending] = useActionState(createTour, null);
  const router = useRouter();
  const defaultPath = getDefaultDashboardRoute("GUIDE");

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);

      router.push(`${defaultPath}/my-tours`);
    } else if (state && !state.success) {
      toast.error(state.message || state.error.message || "Invalid data");
    }
  }, [state]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold my-8">Create a New Tour</h2>
      <form action={formAction} className="flex flex-col flex-1 min-h-0">
        <div className="flex-1 overflow-y-auto space-y-6">
          {/* Title */}
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" name="title" placeholder="Sundarban Tour" defaultValue={state?.formData?.title || ""} />
            <InputFieldError state={state} field="title" />
          </Field>

          {/* Description */}
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="A beautiful tour of the Sundarban"
              defaultValue={state?.formData?.description || ""}
            />
            <InputFieldError state={state} field="description" />
          </Field>

          {/* Tour Fee */}
          <Field>
            <FieldLabel htmlFor="tourFee">Tour Fee</FieldLabel>
            <Input id="tourFee" name="tourFee" type="number" placeholder="1000" defaultValue={state?.formData?.tourFee || ""} />
            <InputFieldError state={state} field="tourFee" />
          </Field>

          {/* Group Members */}
          <Field>
            <FieldLabel htmlFor="groupMembers">Group Members</FieldLabel>
            <Input id="groupMembers" name="groupMembers" type="number" placeholder="10" defaultValue={state?.formData?.groupMembers || ""} />
            <InputFieldError state={state} field="groupMembers" />
          </Field>

          {/* ✅ Category Select */}
          <Field>
            <FieldLabel htmlFor="categoryId">Category</FieldLabel>
            <select
              id="categoryId"
              name="categoryId"
              defaultValue={state?.formData?.category || ""}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={pending}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories?.map((cat, i) => (
                <option key={i} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <InputFieldError state={state} field="category" />
          </Field>

          {/* Duration */}
          <Field>
            <FieldLabel htmlFor="duration">Duration</FieldLabel>
            <Input id="duration" name="duration" placeholder="5 days" defaultValue={state?.formData?.duration || ""} />
            <InputFieldError state={state} field="duration" />
          </Field>

          {/* Meeting Point */}
          <Field>
            <FieldLabel htmlFor="meetingPoint">Meeting Point</FieldLabel>
            <Input id="meetingPoint" name="meetingPoint" placeholder="Dhaka" defaultValue={state?.formData?.meetingPoint || ""} />
            <InputFieldError state={state} field="meetingPoint" />
          </Field>

          {/* Destination */}
          <Field>
            <FieldLabel htmlFor="destination">Destination</FieldLabel>
            <Input id="destination" name="destination" placeholder="Sundarban" defaultValue={state?.formData?.destination || ""} />
            <InputFieldError state={state} field="destination" />
          </Field>

          <Field>
            <FieldLabel htmlFor="city">Tour City</FieldLabel>
            <select
              id="city"
              name="city"
              defaultValue={state?.formData?.city || ""}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={pending}
            >
              <option value="" disabled>
                Select district
              </option>
              {districts?.map((district, i) => (
                <option key={i} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <InputFieldError state={state} field="city" />
          </Field>
        </div>

        {/* Image Upload */}
        <div className="mt-10">
          <Field>
            <FieldLabel htmlFor="file">Upload Tour Image</FieldLabel>
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-primary transition-colors cursor-pointer">
              {previewImage ? (
                <div className="w-full">
                  <Image height={300} width={300} src={previewImage} alt="Tour Preview" className="w-full h-64 object-cover rounded-md shadow-md" />
                  <Button type="button" variant="outline" className="mt-3" onClick={() => setPreviewImage(null)}>
                    Remove Image
                  </Button>
                </div>
              ) : (
                <label htmlFor="file" className="flex flex-col items-center justify-center gap-2 cursor-pointer">
                  <Camera className="h-10 w-10 text-gray-400 hover:text-primary transition-colors" />
                  <p className="text-sm text-muted-foreground">Click the icon to upload</p>
                </label>
              )}

              {/* Hidden File Input */}
              <Input type="file" id="file" name="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </div>
          </Field>
        </div>

        {/* Submit */}
        <Button type="submit" disabled={pending} className="mt-6">
          {pending ? "Uploading..." : "Create Tour"}
        </Button>
      </form>
    </div>
  );
};

export default CreateTour;
