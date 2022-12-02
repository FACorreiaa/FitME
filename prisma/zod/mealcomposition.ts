import * as z from "zod"
import * as imports from "../null"
import { CompleteMealList, RelatedMealListModel, CompleteIngredients, RelatedIngredientsModel } from "./index"

export const MealCompositionModel = z.object({
  id: z.number().int(),
  mealListId: z.number().int().nullish(),
})

export interface CompleteMealComposition extends z.infer<typeof MealCompositionModel> {
  MealList?: CompleteMealList | null
  ingredients: CompleteIngredients[]
}

/**
 * RelatedMealCompositionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMealCompositionModel: z.ZodSchema<CompleteMealComposition> = z.lazy(() => MealCompositionModel.extend({
  MealList: RelatedMealListModel.nullish(),
  ingredients: RelatedIngredientsModel.array(),
}))
