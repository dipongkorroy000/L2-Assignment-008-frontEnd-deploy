import {server_fetch} from "@/src/lib/server-fetch";

export const createReview = async ( requestedFormId: number,payload : {rating: number, comment: string}) => {
  try {
    const res = await server_fetch.patch(`review/tourist-create-review/${requestedFormId}`, {
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};