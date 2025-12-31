/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";

export const createCategory = async (payload: {title: string}) => {
  try {
    const res = await server_fetch.post(`/category`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: payload.title}),
    });

    const categories = await res.json();

    return categories;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};
