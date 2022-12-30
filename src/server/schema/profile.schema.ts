import type { TypeOf } from "zod";
import { z } from "zod";

export const getUserDataSchema = z.object({
  id: z.string(),
});

export const createProfileSchema = z.object({});
export type GetUserInput = TypeOf<typeof getUserDataSchema>;

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
