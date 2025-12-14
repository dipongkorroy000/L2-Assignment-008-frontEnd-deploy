import React, {Suspense} from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-xl mx-auto my-10 text-center">Loading...</div>}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
