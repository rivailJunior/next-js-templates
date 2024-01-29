import { z } from "zod";

const envSchema = z.object({
  WELCOME_MESSAGE: z.string(),
});

export const env = envSchema.parse(process.env);
