"use client";

import {useRouter} from "next/navigation";
import {ArrowLeft} from "lucide-react";

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors cursor-pointer"
    >
      <ArrowLeft />
      Back
    </button>
  );
};

export default BackBtn;
