/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";

export const getChartData = async () => {
  try {
    const res = await server_fetch.get(`/stats/chart`);

    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getGuidesLanguages = async () => {
  try {
    const res = await server_fetch.get(`/user/guides-languages`);

    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getGuides = async (queryString?: string): Promise<any> => {
  try {
    const res = await server_fetch.get(`/user/guides${queryString ? `?${queryString}` : ""}`);

    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};
