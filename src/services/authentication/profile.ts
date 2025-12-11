/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";
import {IUserProfile} from "@/src/types/auth.interface";

const getProfile = async (): Promise<IUserProfile | any> => {
  let userProfile: IUserProfile | any;

  try {
    const response = await server_fetch.get("/auth/profile", {
      cache: "force-cache",
      next: {tags: ["user-info"]}, // when update user data then call this api again-> user-info
    });

    const result = await response.json();

    userProfile = {name: result.data.admin?.name || result.data.guide?.name || result.data.tourist?.name, ...result.data};

    return userProfile;
  } catch (error: any) {
    // console.log(error);

    return null;
  }
};

export default getProfile;
