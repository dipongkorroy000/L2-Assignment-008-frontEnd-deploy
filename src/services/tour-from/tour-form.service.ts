"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {server_fetch} from "@/src/lib/server-fetch";
import {revalidateTag} from "next/cache";

export const updateRequestedTourFormStatus = async (id: number, payload: {status: string}) => {
  try {
    const res = await server_fetch.patch(`/request-tour/${id}`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    revalidateTag("requested-form-info", {expire: 0}); // recall tours

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Data Fetch Failed",
    };
  }
};
