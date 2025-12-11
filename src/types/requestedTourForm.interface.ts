export interface ITourForm {
  id: number; // assuming primary key
  tour: {title: string};
  comment: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  guide?: {
    contactNumber: string;
    email: string;
  };
  tourist?: {
    contactNumber: string;
    email: string;
  }
  payments: {
    status: PAYMENT_STATUS;
    transactionId: string;
  };
  transactionId: string | null;
  updatedAt: Date;
}

export enum PAYMENT_STATUS {
  PAID = "PAID",
  UNPAID = "UNPAID",
}

export enum TOUR_FROM_STATUS {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
