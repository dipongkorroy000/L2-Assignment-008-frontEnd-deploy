import {server_fetch} from "@/src/lib/server-fetch";

export const getReviews = async () => {
  try {
    const res = await server_fetch.get("/review/guide");
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};