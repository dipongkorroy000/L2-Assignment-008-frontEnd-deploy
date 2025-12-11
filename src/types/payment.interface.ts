export interface IPayment {
  amount: number;
  updatedAt: string; // ISO date string from DB
  status: "PAID" | "UNPAID";
  transactionId: string;
}

export interface ITourPayment {
  payments: IPayment[];
}
