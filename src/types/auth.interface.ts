export type UserRole = "ADMIN" | "GUIDE" | "TOURIST";

export interface IUserProfile {
  id: string;
  email: string;
  role: UserRole;
  status: "ACTIVE" | "INACTIVE" | "BANNED";
  name: string;
  contactNumber: string;
  admin?: IAdminProfile;
  guide?: IGuideProfile;
  tourist?: ITouristProfile;
}

export interface IAdminProfile {
  id: number;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGuideProfile {
  id: number;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  gender: string;
  languages: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ITouristProfile {
  id: number;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  gender: string;
  languages: string[];
  createdAt: string;
  updatedAt: string;
}
