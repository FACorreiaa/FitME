import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
});

export const signUpSchema = signInSchema.extend({
  name: z.string(),
});

export type ILogin = z.infer<typeof signInSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;
