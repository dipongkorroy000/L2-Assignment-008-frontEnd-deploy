export interface ICanceledTour {
  status: string; // e.g. "CANCELED"
  tour: {
    title: string;
  };
  tourist?: {
    contactNumber: string;
    email: string;
  };
  guide?: {
    contactNumber: string;
    email: string;
  };
  updatedAt: string; // ISO date string
}

export interface ICompletedTours {
  status: string; // e.g. "CANCELED"
  tour: {
    title: string;
  };
  tourist?: {
    contactNumber: string;
    email: string;
  };
  guide?: {
    contactNumber: string;
    email: string;
  };
  date: string; // ISO date string
}
