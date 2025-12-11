/* eslint-disable @typescript-eslint/no-explicit-any */
import { server_fetch } from "@/src/lib/server-fetch";

export const getPayments = async () => {
  try {
    const res = await server_fetch.get("/payment");
    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Data Fetch Failed",
    };
  }
};
