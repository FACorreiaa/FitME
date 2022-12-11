import * as z from "zod";
import { Gender } from "@prisma/client";
import { CompleteUser, RelatedUserModel } from "./index";

export const ProfileModel = z.object({
  id: z.string(),
  bio: z.string().nullish(),
  profession: z.string().nullish(),
  image: z.string().nullish(),
  userId: z.string(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
  gender: z.nativeEnum(Gender),
});

export interface CompleteProfile extends z.infer<typeof ProfileModel> {
  user: CompleteUser;
}

/**
 * RelatedProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProfileModel: z.ZodSchema<CompleteProfile> = z.lazy(() =>
  ProfileModel.extend({
    user: RelatedUserModel,
  })
);
