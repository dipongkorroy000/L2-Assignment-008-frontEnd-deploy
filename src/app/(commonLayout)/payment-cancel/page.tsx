import React, {Suspense} from "react";
import PaymentCancelClient from "./PaymentCancelClient";

export default function PaymentCancelPage() {
  return (
    <Suspense fallback={<div className="max-w-xl mx-auto my-10 text-center">Loading...</div>}>
      <PaymentCancelClient />
    </Suspense>
  );
}
