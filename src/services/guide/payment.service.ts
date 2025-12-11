import {server_fetch} from "@/src/lib/server-fetch";

export const paymentInit = async (id: number) => {
  try {
    const res = await server_fetch.post(`/payment/${id}`);
    const result = await res.json();

    // revalidateTag("get-tours", {expire: 0}); // recall tours

    return result;
  } catch (error) {
    console.log(error);
  }
};
