import type { TypeOf } from "zod";
import { z } from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const GENDER = ["MALE", "FEMALE"] as const;

export const params = z.object({
  id: z.string(),
});

export const createProfileSchema = z.object({
  about: z.string().max(120, "120 characters allowed"),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  gender: z.enum(GENDER),
  firstname: z.string().max(20, "Only 20 characters allowed"),
  lastname: z.string().max(20, "Only 20 characters allowed"),
  address: z.string().max(80, "Only 80 characters allowed"),
  contact: z.string().max(15, "Invalid phone number"),
  birthday: z.date(),
  age: z.number().min(0),
  country: z.string(),
  profession: z
    .string()
    .min(5, "Min 5 characters")
    .max(80, "80 characters allowed"),
  hobbies: z
    .string()
    .min(5, "min 5 characters")
    .max(120, "120 characters allowed"),
  website: z
    .string()
    .startsWith("https://", { message: "Must provide secure URL" }),
});

export type GetProfileSchema = TypeOf<typeof createProfileSchema>;
