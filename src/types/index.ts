export type {UserRole, IUserProfile} from "./auth.interface";
export type {IItinerary} from "./itinerary.interface";
export type {ICategory , ITour} from "./tour.interface";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
