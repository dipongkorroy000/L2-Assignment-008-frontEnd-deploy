"use client";

import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";
import {Button} from "@/src/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Input} from "@/src/components/ui/input";
import {Label} from "@/src/components/ui/label";
import {updateProfile} from "@/src/services/authentication/auth.service";
import {IUserProfile} from "@/src/types";
import {nameFormate} from "@/src/utils/formatter";
import {Camera, ChevronLeft, Loader2, Save} from "lucide-react";
import {useRouter} from "next/navigation";
import {useState, useTransition} from "react";
import {Check} from "lucide-react";
import Link from "next/link";

interface MyProfileProps {
  userInfo: IUserProfile;
}

const MyProfile = ({userInfo}: MyProfileProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getProfilePhoto = () => {
    if (userInfo?.role === "ADMIN") return userInfo.admin?.profilePhoto;
    else if (userInfo?.role === "GUIDE") return userInfo.guide?.profilePhoto;
    else if (userInfo?.role === "TOURIST") return userInfo.tourist?.profilePhoto;
    else return null;
  };

  const getProfileInitDate = () => {
    if (userInfo?.role === "ADMIN") return userInfo.admin?.createdAt;
    else if (userInfo?.role === "GUIDE") return userInfo.guide?.createdAt;
    else if (userInfo?.role === "TOURIST") return userInfo.tourist?.createdAt;
    else return null;
  };

  const createdAt = new Date(getProfileInitDate() as string);
  const now = new Date();

  const diffMs = now.getTime() - createdAt.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30); // rough month calc
  const diffYears = Math.floor(diffDays / 365); // rough year calc

  let memberSince = "";
  if (diffYears > 0) memberSince = `${diffYears} Years`;
  else if (diffMonths > 0) memberSince = `${diffMonths} Months`;
  else if (diffDays > 0) memberSince = `${diffDays} Days`;

  const languages = userInfo?.role === "GUIDE" || userInfo?.role === "TOURIST" ? userInfo.guide?.languages || userInfo.tourist?.languages : [];

  const getProfileData = () => {
    if (userInfo?.role === "ADMIN") return userInfo.admin;
    else if (userInfo?.role === "GUIDE") return userInfo.guide;
    else if (userInfo?.role === "TOURIST") return userInfo.tourist;
    else return null;
  };

  const profilePhoto = getProfilePhoto();
  const profileData = getProfileData();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await updateProfile(formData);

      if (result.success) {
        setSuccess(result.message);
        setPreviewImage(null);

        router.refresh();
      } else setError(result.message);
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <Link href={"/"}>
          <ChevronLeft size={30} className="text-chart-5" />
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-16">
          <div className="col-span-5 flex flex-col gap-10">
            {/* Profile Card */}
            <Card className="lg:col-span-1 shadow-md rounded-xl">
              <CardContent className="flex justify-around items-center">
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <Avatar className="h-32 w-32 ring-2 ring-primary">
                      {previewImage || profilePhoto ? (
                        <AvatarImage src={previewImage || (profilePhoto as string)} alt={userInfo.name} />
                      ) : (
                        <AvatarFallback className="text-3xl">{nameFormate(userInfo?.name)}</AvatarFallback>
                      )}
                    </Avatar>
                    <label
                      htmlFor="file"
                      className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Camera className="h-4 w-4" />
                      <Input type="file" id="file" name="file" accept="image/*" className="hidden" onChange={handleImageChange} disabled={isPending} />
                    </label>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-semibold text-lg mt-3">{userInfo?.name}</p>
                    <span className="inline-block text-sm bg-muted px-3 py-1 rounded-full capitalize text-primary">{userInfo?.role.replace("_", " ")}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span>
                    <span className="text-3xl">{memberSince}</span>
                    <br /> on Local Guide
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-1 p-10 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-xl">
                  See {userInfo?.name}&apos;s confirmed <br /> information
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                <div className="text-center space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check />
                    Identity
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check />
                    Verified Profile
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check />
                    Verified Email
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check />
                    Languages: {languages?.join(", ") || "N/A"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1"></div>

          {/* Profile Information Card */}
          <Card className="col-span-10 border-none shadow-none bg-accent p-10">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>

            <CardContent className="">
              {error && <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">{error}</div>}

              {success && <div className="bg-green-500/10 text-green-600 px-4 py-3 rounded-md text-sm">{success}</div>}

              <div className="grid gap-4 md:grid-cols-2">
                {/* Common Fields for All Roles */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" defaultValue={profileData?.name || userInfo?.name} required disabled={isPending} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={userInfo?.email} disabled className="bg-muted" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input id="contactNumber" name="contactNumber" defaultValue={profileData?.contactNumber || ""} required disabled={isPending} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" defaultValue={profileData?.address || ""} disabled={isPending} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    name="gender"
                    defaultValue={profileData?.gender}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isPending}
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="languages">Add Language</Label>
                  <select
                    id="languages"
                    name="languages"
                    defaultValue={"Bengali"}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isPending}
                  >
                    <option value="Bengali">Bengali</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Russian">Russian</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
