/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";
import {revalidateTag} from "next/cache";

export const createCategory = async (payload: {title: string}) => {
  try {
    const res = await server_fetch.post(`/category`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: payload.title}),
    });

    const categories = await res.json();

    revalidateTag("get-categories", {expire: 0});

    return categories;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const res = await server_fetch.delete(`/category/${id}`);

    const categories = await res.json();

    revalidateTag("get-categories", {expire: 0});

    return categories;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};
