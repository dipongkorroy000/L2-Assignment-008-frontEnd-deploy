"use server";
import {server_fetch} from "@/src/lib/server-fetch";

export const paymentInit = async (id: number) => {
  try {
    const res = await server_fetch.post(`/payment/${id}`);
    const result = await res.json();

    return result;
  } catch (error) {
    // console.log(error);
  }
};
