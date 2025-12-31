import PaymentTable from "@/src/components/shared/payments/PaymentTable";
import {getPayments} from "@/src/services/public/payment.service";

const PaymentsPage = async () => {
  const payments = await getPayments();
  const data = payments.data; // [{payments: [{amount, updatedAt, status, transactionId}], tour: {title}}]

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Payments</h2>

      <PaymentTable data={data}></PaymentTable>
    </div>
  );
};

export default PaymentsPage;
