"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";

export default function PaymentCancelClient() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");

  const router = useRouter();

  useEffect(() => {
    if (!transactionId) {
      // redirect to home if transactionId not found
      router.push("/");
    }
  }, [transactionId, router]);

  return (
    <div className="max-w-xl mx-auto my-10 text-center">
      <h2 className="text-2xl font-bold mb-4 text-chart-4">Payment Failed</h2>
      <p>Transaction ID: {transactionId}</p>
    </div>
  );
}
