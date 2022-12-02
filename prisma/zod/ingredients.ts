import * as z from "zod"
import * as imports from "../null"
import { CompleteMacros, RelatedMacrosModel, CompleteMealComposition, RelatedMealCompositionModel } from "./index"

export const IngredientsModel = z.object({
  id: z.number().int(),
  ingredients_name: z.string(),
  mealCompositionId: z.number().int().nullish(),
})

export interface CompleteIngredients extends z.infer<typeof IngredientsModel> {
  macros: CompleteMacros[]
  MealComposition?: CompleteMealComposition | null
}

/**
 * RelatedIngredientsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedIngredientsModel: z.ZodSchema<CompleteIngredients> = z.lazy(() => IngredientsModel.extend({
  macros: RelatedMacrosModel.array(),
  MealComposition: RelatedMealCompositionModel.nullish(),
}))
