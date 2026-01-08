/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";
import {revalidateTag} from "next/cache";

export const getAllUsers = async (queryString?: string) => {
  try {
    const res = await server_fetch.get(`/user?${queryString ? queryString : ""}`, {
      next: {tags: ["all-users"]},
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

export const getUser = async (id: number) => {
  try {
    const res = await server_fetch.get(`/user/${id}`);
    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const userStats = async () => {
  try {
    const res = await server_fetch.get("/stats/admin");
    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const updateUserStatus = async (id: number, payload: {status: string}) => {
  try {
    const res = await server_fetch.patch(`/user/${id}/status`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({status: payload.status}),
    });
    const result = await res.json();

    revalidateTag("all-users", {expire: 0});

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};
