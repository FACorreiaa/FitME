import * as z from "zod";
import { CompleteUser, RelatedUserModel } from "./index";

export const UserBioDataModel = z.object({
  id: z.string(),
  weight: z.number().int().nullish(),
  waist_width: z.number().int().nullish(),
  leg_width: z.number().int().nullish(),
  chest_wdith: z.number().int().nullish(),
  userId: z.string(),
});

export interface CompleteUserBioData extends z.infer<typeof UserBioDataModel> {
  user: CompleteUser;
}

/**
 * RelatedUserBioDataModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserBioDataModel: z.ZodSchema<CompleteUserBioData> = z.lazy(
  () =>
    UserBioDataModel.extend({
      user: RelatedUserModel,
    })
);
