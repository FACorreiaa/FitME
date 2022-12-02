import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteMealplan, RelatedMealplanModel, CompleteExercisePlan, RelatedExercisePlanModel } from "./index"

export const UserSuggestedPlanModel = z.object({
  id: z.number().int(),
  userId: z.number().int().nullish(),
  mealplanId: z.number().int(),
  exercisePlanId: z.number().int(),
})

export interface CompleteUserSuggestedPlan extends z.infer<typeof UserSuggestedPlanModel> {
  User?: CompleteUser | null
  mealPlan: CompleteMealplan
  exercisePlan: CompleteExercisePlan
}

/**
 * RelatedUserSuggestedPlanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserSuggestedPlanModel: z.ZodSchema<CompleteUserSuggestedPlan> = z.lazy(() => UserSuggestedPlanModel.extend({
  User: RelatedUserModel.nullish(),
  mealPlan: RelatedMealplanModel,
  exercisePlan: RelatedExercisePlanModel,
}))
