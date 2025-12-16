import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {ITourPayment} from "@/src/types/payment.interface";

const PaymentTable = ({data}: {data: ITourPayment[]}) => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment At</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((item: ITourPayment, idx: number) => (
          <TableRow key={idx}>
            <TableCell>{item.payments.transactionId}</TableCell>
            <TableCell>{item.payments.amount} BDT</TableCell>
            <TableCell>{item.payments.status}</TableCell>
            <TableCell>{new Date(item.payments.updatedAt).toLocaleString("en-GB")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PaymentTable;
