import type { TypeOf } from "zod";
import { object, string, z } from "zod";

export const createUserSchema = z
  .object({
    username: string({ required_error: "Name is required" }),
    email: string({ required_error: "Email is required" }).email(
      "Invalid email"
    ),
    //photo: string({ required_error: "Photo is required" }),
    password: string({ required_error: "Password is required" })
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    cpassword: string({ required_error: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.cpassword, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export const loginUserSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email or password"
  ),
  password: string({ required_error: "Password is required" }).min(
    8,
    "Invalid email or password"
  ),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type LoginUserInput = TypeOf<typeof loginUserSchema>;
