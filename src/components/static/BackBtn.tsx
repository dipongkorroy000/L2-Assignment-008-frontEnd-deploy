"use client";

import {useRouter} from "next/navigation";
import {Button} from "../ui/button";

const BackBtn = () => {
  const router = useRouter();

  return <Button onClick={() => router.back()} className="cursor-pointer">Back</Button>;
};

export default BackBtn;
