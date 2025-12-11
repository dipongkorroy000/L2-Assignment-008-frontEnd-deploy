/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import jwt from "jsonwebtoken";

export const verifyToken = async (token: string, secret: string) => {
  try {
    const verifiedToken = jwt.verify(token, secret) as jwt.JwtPayload;

    return {success: true, message: "Token is valid", payload: verifiedToken};
    //----
  } catch (error: any) {
    return {success: false, message: error?.message || "Invalid token"};
  }
};
