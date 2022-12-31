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
  bio: z.string().max(120, "Only 120 caharcters allowed"),
  profession: z.string(),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  first_name: z.string(),
  last_name: z.string(),
  gender: z.enum(GENDER),
});

export type GetProfileSchema = TypeOf<typeof createProfileSchema>;

// model Profile {
//   id         String  @id @default(cuid())
//   bio        String?
//   profession String?
//   image      String?
//   user       User    @relation(fields: [userId], references: [id])
//   userId     String  @unique
//   first_name String?
//   last_name  String?
//   gender     Gender
// }
