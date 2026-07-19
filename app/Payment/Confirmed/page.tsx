import { Suspense } from "react";
import PaymentConfirmedContent from "./PaymentConfirmedContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentConfirmedContent />
    </Suspense>
  );
}
