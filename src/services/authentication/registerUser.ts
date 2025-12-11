/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {loginUser} from "./loginUser";

import {registerZodSchema} from "@/src/zod/auth.validation";
import {server_fetch} from "@/src/lib/server-fetch";
import {zodValidator} from "@/src/lib/zodValidator";

export const registerTourist = async (_currentState: any, formData: any): Promise<any> => {
  try {
    const payload = {
      name: formData.get("name"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    
    if (zodValidator(payload, registerZodSchema).success === false) return zodValidator(payload, registerZodSchema);
    
    const validatedPayload: any = zodValidator(payload, registerZodSchema).data;
    
    const validatedPayloadData = {
      password: validatedPayload.password,
      tourist: {name: validatedPayload.name, contactNumber: validatedPayload.contactNumber, email: validatedPayload.email},
    };
  
    const res = await server_fetch.post("/user/create-tourist", {body: JSON.stringify(validatedPayloadData), headers: {"Content-Type": "application/json"}});

    const result = await res.json();

    if (result.success) await loginUser(_currentState, formData);

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) throw error;

    console.log(error);
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Registration failed. Please try again.",
    };
  }
};
