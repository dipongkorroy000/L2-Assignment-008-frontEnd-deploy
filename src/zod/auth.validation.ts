/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

export const registerZodSchema = z
  .object({
    name: z.string("Name is required").min(3, {message: "Name  must be at least 6 characters long"}),
    contactNumber: z.string("Contact Number is required").min(11, {message: "Contact Number  have 11 characters long"}),
    email: z.email({message: "Valid email is required"}),
    password: z
      .string("Password is required")
      .min(6, {error: "Password must be at least 6 characters long"})
      .max(100, {error: "Password must be at most 100 characters long"}),
    confirmPassword: z.string("Confirm Password is required").min(6, {error: "Confirm Password must be at least 6 characters long"}),
  })
  .refine((data: any) => data.password === data.confirmPassword, {error: "Passwords do not match", path: ["confirmPassword"]});

export const loginValidationZodSchema = z.object({
  email: z.email({message: "Email is required"}),
  password: z
    .string("Password is required")
    .min(6, {error: "Password must be at least 6 characters long"})
    .max(100, {error: "Password must be at most 100 characters long"}),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z.string("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string("Confirm Password is required").min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
