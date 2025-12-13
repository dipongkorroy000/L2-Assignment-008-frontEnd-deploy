import {server_fetch} from "@/src/lib/server-fetch";

export const getAllUsers = async (queryString?: string) => {
  try {
    const res = await server_fetch.get(`/user?${queryString ? queryString : ""}`);
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: number) => {
  try {
    const res = await server_fetch.get(`/user/${id}`);
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const userStats = async () => {
  try {
    const res = await server_fetch.get("/stats/admin");
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};