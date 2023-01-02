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
  about: z.string().max(120, "Only 120 caharcters allowed"),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  gender: z.enum(GENDER),
  firstname: z.string(),
  lastname: z.string(),
  address: z.string(),
  contact: z.string(),
  birthday: z.string(),
  age: z.number().min(0),
  country: z.string(),
});

export type GetProfileSchema = TypeOf<typeof createProfileSchema>;
