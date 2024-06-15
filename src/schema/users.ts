import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const AddressSchema = z.object({
  lineOne: z.string(),
  lineTwo: z.string().nullable(),
  pinCode: z.string().length(4),
  city: z.string(),
  country: z.string(),
  userId: z.number(),
});
