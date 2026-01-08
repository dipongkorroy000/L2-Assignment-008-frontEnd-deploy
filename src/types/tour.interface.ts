export interface ICategory {
  id: number;
  title: string;
}

export interface ITour {
  id?: number;
  title: string;
  description: string;
  tourFee: number;
  groupMembers: number;
  category?: ICategory;
  duration: string;
  meetingPoint: string;
  destination: string;
  city: string;
  image?: string;
  averageRating?: number;
  createdAt?: Date;
  isActive: boolean;
  totalRequestForm?: number;
  guide?: {email: string};
}
