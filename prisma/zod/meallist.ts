import * as z from "zod"
import * as imports from "../null"
import { CompleteMealplan, RelatedMealplanModel, CompleteMealComposition, RelatedMealCompositionModel } from "./index"

export const MealListModel = z.object({
  id: z.number().int(),
  quantity: z.number().int(),
})

export interface CompleteMealList extends z.infer<typeof MealListModel> {
  meal_plan: CompleteMealplan[]
  meals: CompleteMealComposition[]
}

/**
 * RelatedMealListModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMealListModel: z.ZodSchema<CompleteMealList> = z.lazy(() => MealListModel.extend({
  meal_plan: RelatedMealplanModel.array(),
  meals: RelatedMealCompositionModel.array(),
}))
