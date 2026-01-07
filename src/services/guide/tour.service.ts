/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import {server_fetch} from "@/src/lib/server-fetch";
import {zodValidator} from "@/src/lib/zodValidator";
import {createTourValidation} from "@/src/zod/tour.validation";
import getProfile from "../authentication/profile";
import {revalidateTag} from "next/cache";

export const createTour = async (_prevState: any, formData: FormData) => {
  const rawFile = formData.get("file") as File | null;
  const userData = await getProfile();

  const payload = {
    title: formData.get("title"),
    description: formData.get("description"),
    tourFee: Number(formData.get("tourFee")),
    groupMembers: Number(formData.get("groupMembers")),
    categoryId: Number(formData.get("categoryId")),
    duration: formData.get("duration"),
    meetingPoint: formData.get("meetingPoint"),
    destination: formData.get("destination"),
    city: formData.get("city"),
  };

  const validatedPayload = zodValidator(payload, createTourValidation);

  if (!validatedPayload.data) {
    return {success: false, message: "Validation failed", formData: validatedPayload};
  }

  const newFormData = new FormData();
  newFormData.append("data", JSON.stringify(validatedPayload.data));

  // ✅ Only append if file exists
  if (rawFile && rawFile instanceof File && rawFile.size > 0) {
    newFormData.append("file", rawFile, rawFile.name);
  }

  const response = await server_fetch.post(`/tours/${userData.email}`, {
    body: newFormData,
    // ✅ Ensure no Content-Type override
    headers: {},
  });

  const result = await response.json();

  revalidateTag("get-tours", {expire: 0}); // recall tours

  return result;
};

export const getTours = async (queryString?: string) => {
  try {
    const toursResponse = await server_fetch.get(`/tours/guide?${queryString ? queryString : ""}`, {
      cache: "force-cache",
      next: {tags: ["get-tours"]},
    });
    const toursData = await toursResponse.json();

    return toursData;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Data Fetch Failed",
    };
  }
};

export const tourDeleteById = async (id: number) => {
  try {
    const res = await server_fetch.delete(`/tours/${id}`);
    const result = await res.json();

    revalidateTag("get-tours", {expire: 0}); // recall tours

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

export const updateTour = async (id: number, payload: any) => {
  try {
    const toursResponse = await server_fetch.put(`/tours/${id}`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });
    const toursData = await toursResponse.json();

    revalidateTag("get-tours", {expire: 0}); // recall tours

    return toursData;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Data Fetch Failed",
    };
  }
};

export const updateTourStatusByGuide = async (id: number) => {
  try {
    const toursResponse = await server_fetch.put(`/tours/${id}/status`);

    const toursData = await toursResponse.json();

    revalidateTag("get-tours", {expire: 0}); // recall tours

    return toursData;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Data Fetch Failed",
    };
  }
};

export const guideStats = async () => {
  try {
    const res = await server_fetch.get("/stats/guide");
    const result = await res.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed Data Fetching",
    };
  }
};

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
