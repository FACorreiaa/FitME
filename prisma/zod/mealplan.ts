import * as z from "zod"
import * as imports from "../null"
import { CompleteMealList, RelatedMealListModel, CompleteUser, RelatedUserModel, CompleteUserSuggestedPlan, RelatedUserSuggestedPlanModel } from "./index"

export const MealplanModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  active: z.boolean(),
  authorId: z.string(),
  mealListId: z.string(),
})

export interface CompleteMealplan extends z.infer<typeof MealplanModel> {
  meal_list: CompleteMealList
  author: CompleteUser
  UserSuggestedPlan: CompleteUserSuggestedPlan[]
}

/**
 * RelatedMealplanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMealplanModel: z.ZodSchema<CompleteMealplan> = z.lazy(() => MealplanModel.extend({
  meal_list: RelatedMealListModel,
  author: RelatedUserModel,
  UserSuggestedPlan: RelatedUserSuggestedPlanModel.array(),
}))
