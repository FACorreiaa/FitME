import * as z from "zod"
import { CompleteProfile, RelatedProfileModel, CompleteMealplan, RelatedMealplanModel, CompleteExercisePlan, RelatedExercisePlanModel, CompleteUserBioData, RelatedUserBioDataModel, CompleteUserSuggestedPlan, RelatedUserSuggestedPlanModel, CompleteAccount, RelatedAccountModel, CompleteSession, RelatedSessionModel } from "./index"

export const UserModel = z.object({
  id: z.number().int(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
  gender: z.string(),
  email: z.string(),
  nickname: z.string(),
  password: z.string(),
  emailVerified: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  profile?: CompleteProfile | null
  mealplan: CompleteMealplan[]
  exercise_plan: CompleteExercisePlan[]
  userBioData?: CompleteUserBioData | null
  userSuggestedPlan: CompleteUserSuggestedPlan[]
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  profile: RelatedProfileModel.nullish(),
  mealplan: RelatedMealplanModel.array(),
  exercise_plan: RelatedExercisePlanModel.array(),
  userBioData: RelatedUserBioDataModel.nullish(),
  userSuggestedPlan: RelatedUserSuggestedPlanModel.array(),
  accounts: RelatedAccountModel.array(),
  sessions: RelatedSessionModel.array(),
}))
