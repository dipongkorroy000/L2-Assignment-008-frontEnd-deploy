/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";
import {revalidateTag} from "next/cache";

export const createReview = async (requestedFormId: number, payload: {rating: number; comment: string}) => {
  try {
    const res = await server_fetch.patch(`/review/tourist-create-review/${requestedFormId}`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    revalidateTag("reviews", {expire: 0}); // recall requestedForm info

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const postContactMessage = async (payload: {message: string; email: string; name: string}) => {
  try {
    const res = await server_fetch.post("/message", {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getMessages = async () => {
  try {
    const res = await server_fetch.get("/message");
    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};
