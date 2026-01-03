/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";
import {IRequestTour} from "@/src/types/requested-tour.interface";
import {revalidateTag} from "next/cache";

export const tours = async (queryString?: string): Promise<any> => {
  try {
    const toursResponse = await server_fetch.get(`/tours${queryString ? `?${queryString}` : ""}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    });

    const toursData = await toursResponse.json();

    return toursData;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getTour = async (id: number) => {
  try {
    const toursResponse = await server_fetch.get(`/tours/${id}`);
    const tour = await toursResponse.json();

    return tour.data;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getCateWithTours = async () => {
  try {
    const toursResponse = await server_fetch.get(`/category/tours`);

    const toursData = await toursResponse.json();

    return toursData;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const tourRequested = async (payload: IRequestTour) => {
  try {
    const toursResponse = await server_fetch.post("/request-tour", {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });
    const request = await toursResponse.json();

    revalidateTag("requested-form-info", {expire: 0}); // recall requestedForm info

    return request;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getRequestedForm = async () => {
  try {
    const req = await server_fetch.get("/request-tour", {
      cache: "force-cache",
      next: {tags: ["requested-form-info"]},
    });
    const result = await req.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const updateRequestedFormStatus = async (id: number, payload: {status: string}) => {
  try {
    const req = await server_fetch.patch(`/request-tour/${id}`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });

    const result = await req.json();

    revalidateTag("requested-form-info", {expire: 0}); // recall requestedForm info

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const upcomingTours = async () => {
  try {
    const req = await server_fetch.get("/request-tour/upcoming-tours");
    const result = await req.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const canceledRequestedTours = async () => {
  try {
    const req = await server_fetch.get("/request-tour/canceled-tours");
    const result = await req.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const completedRequestedTours = async () => {
  try {
    const req = await server_fetch.get("/request-tour/completed-tours");
    const result = await req.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const completedToursReviewProvide = async () => {
  try {
    const req = await server_fetch.get("/request-tour/completed-review-tours");
    const result = await req.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const getAIToursSuggestions = async (payload: {preferences: string}) => {
  try {
    const req = await server_fetch.post("/tours/ai-suggestions", {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });
    const result = await req.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};
