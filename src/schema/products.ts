import { z } from "zod";

export const ProductsSchema = z.object({
  name: z.string(),
  description: z.string(),
  tags: z.string().array(),
  price: z.string(),
});
