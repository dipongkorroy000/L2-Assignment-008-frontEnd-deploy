"use server";

import jwt from "jsonwebtoken";
import {revalidateTag} from "next/cache";
import {redirect} from "next/navigation";
import {zodValidator} from "@/src/lib/zodValidator";
import {server_fetch} from "@/src/lib/server-fetch";
import getProfile from "./profile";
import {UserRole} from "@/src/types";
import {getDefaultDashboardRoute, isValidRedirectForRole} from "@/src/utils/auth-utils";
import {resetPasswordSchema} from "@/src/zod/auth.validation";
import {getCookie} from "@/src/utils/serverToken";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function updateProfile(formData: FormData) {
  try {
    const uploadFormData = new FormData();

    const data: any = {};

    formData.forEach((value, key) => {
      if (key !== "file" && value) data[key] = value;
    });

    uploadFormData.append("data", JSON.stringify(data));

    const file = formData.get("file");

    if (file && file instanceof File && file.size > 0) uploadFormData.append("file", file);

    const response = await server_fetch.patch(`/user/update-profile`, {body: uploadFormData});

    const result = await response.json();

    revalidateTag("user-info", {expire: 0}); // recall user info

    return result;
  } catch (error: any) {
    // console.log(error);

    return {success: false, message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}`};
  }
}

export async function resetPassword(_prevState: any, formData: FormData) {
  const redirectTo = formData.get("redirect") || null;

  const validationPayload = {
    newPassword: formData.get("newPassword") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const validatedPayload = zodValidator(validationPayload, resetPasswordSchema);

  if (!validatedPayload.success && validatedPayload.errors) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
      errors: validatedPayload.errors,
    };
  }

  try {
    const accessToken = await getCookie("accessToken");

    if (!accessToken) throw new Error("User not authenticated");

    const verifiedToken = jwt.verify(accessToken as string, process.env.ACCESS_TOKEN_SECRET!) as jwt.JwtPayload;

    const userRole: UserRole = await verifiedToken.role;

    const user = await getProfile();

    const response = await server_fetch.post("/auth/reset-password", {
      body: JSON.stringify({id: user?.id, password: validationPayload.newPassword}),
      headers: {Authorization: accessToken, "Content-Type": "application/json"},
    });

    const result = await response.json();

    if (!result.success) throw new Error(result.message || "Reset password failed");

    if (result.success) revalidateTag("user-info", {expire: 0});

    if (redirectTo) {
      const requestedPath = redirectTo.toString();

      if (isValidRedirectForRole(requestedPath, userRole)) redirect(`${requestedPath}?loggedIn=true`);
      else redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
      // ---
    } else redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
    // ---
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) throw error;

    return {success: false, message: error?.message || "Something went wrong", formData: validationPayload};
  }
}
