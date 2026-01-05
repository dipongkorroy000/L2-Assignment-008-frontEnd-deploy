/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";

export const getCategories = async () => {
  try {
    const res = await server_fetch.get(`/category`, {
        next: {tags: ["get-categories"]},
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
