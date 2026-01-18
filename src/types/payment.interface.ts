export interface IPayment {
  amount: number;
  updatedAt: string; // ISO date string from DB
  status: "PAID" | "UNPAID";
  transactionId: string;
}

export interface ITourPayment {
  payments: IPayment;
}

export interface PaymentPropsAdmin {
  transactionId: string;
  amount: number;
  status: string;
  updatedAt: string;
  requestForm?: {
    guide?: {
      email?: string;
    };
    tourist?: {
      email?: string;
    };
  };
}