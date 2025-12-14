"use client";

import {useSearchParams, useRouter} from "next/navigation";
import {useEffect} from "react";

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get("transactionId");

  useEffect(() => {
    if (!transactionId) {
      // redirect to home if transactionId not found
      router.push("/");
    }
  }, [transactionId, router]);

  return (
    <div className="max-w-xl mx-auto my-10 text-center">
      <h2 className="text-2xl font-bold mb-4 text-chart-4">Payment Success</h2>
      <p>Transaction ID: {transactionId}</p>
    </div>
  );
}
