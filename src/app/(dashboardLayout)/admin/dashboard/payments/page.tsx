import {getPayments} from "@/src/services/public/payment.service";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";

const AdminPaymentsPage = async () => {
  const payments = await getPayments();
  const data = payments.data || [];
  // [{amount, updatedAt, transactionId, status, requestForm: {guide: {email}, tourist: {email}}}]

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">All Payments</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Guide Email</TableHead>
            <TableHead>Tourist Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((payment: any, idx: number) => (
              <TableRow key={idx}>
                <TableCell>{payment.transactionId}</TableCell>
                <TableCell>{payment.amount} BDT</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{new Date(payment.updatedAt).toLocaleString("en-GB")}</TableCell>
                <TableCell>{payment.requestForm?.guide?.email}</TableCell>
                <TableCell>{payment.requestForm?.tourist?.email}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                No payments found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPaymentsPage;
