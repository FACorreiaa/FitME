import * as z from "zod"
import * as imports from "../null"
import { CompleteProfile, RelatedProfileModel } from "./index"

export const ImageModel = z.object({
  id: z.string(),
  publicId: z.string(),
  format: z.string(),
  version: z.string(),
  profileId: z.string(),
})

export interface CompleteImage extends z.infer<typeof ImageModel> {
  profile: CompleteProfile
}

/**
 * RelatedImageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedImageModel: z.ZodSchema<CompleteImage> = z.lazy(() => ImageModel.extend({
  profile: RelatedProfileModel,
}))
