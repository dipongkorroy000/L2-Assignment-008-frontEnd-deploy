import { z } from "zod";

export const createTourValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tourFee: z.number().positive(),
  groupMembers: z.number().min(1),
  categoryId: z.number().min(1),
  duration: z.string().min(1),
  meetingPoint: z.string().min(1),
  destination: z.string().min(1),
  city: z.string().min(1),
});
