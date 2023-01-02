import * as z from "zod"
import * as imports from "../null"
import { Gender } from "@prisma/client"
import { CompleteImage, RelatedImageModel, CompleteUser, RelatedUserModel } from "./index"

export const ProfileModel = z.object({
  id: z.string(),
  firstname: z.string().nullish(),
  lastname: z.string().nullish(),
  gender: z.nativeEnum(Gender).nullish(),
  about: z.string().nullish(),
  address: z.string().nullish(),
  contact: z.string().nullish(),
  birthday: z.string().nullish(),
  age: z.number().int().nullish(),
  country: z.string().nullish(),
  userId: z.string(),
})

export interface CompleteProfile extends z.infer<typeof ProfileModel> {
  image?: CompleteImage | null
  user: CompleteUser
}

/**
 * RelatedProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProfileModel: z.ZodSchema<CompleteProfile> = z.lazy(() => ProfileModel.extend({
  image: RelatedImageModel.nullish(),
  user: RelatedUserModel,
}))
