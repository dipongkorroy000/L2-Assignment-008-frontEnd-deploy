import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/src/components/ui/table";
import {IPayment, ITourPayment} from "@/src/types/payment.interface";

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
        {data?.map(
          (item: ITourPayment, idx: number) =>
            item.payments &&
            item.payments.length > 0 &&
            item.payments.map((payment: IPayment, pIdx: number) => (
              <TableRow key={`${idx}-${pIdx}`}>
                <TableCell>{payment.transactionId}</TableCell>
                <TableCell>{payment.amount} BDT</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{new Date(payment.updatedAt).toLocaleString("en-GB")}</TableCell>
              </TableRow>
            ))
        )}
      </TableBody>
    </Table>
  );
};

export default PaymentTable;
