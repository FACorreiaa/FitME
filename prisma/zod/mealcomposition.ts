import * as z from "zod";
import {
  CompleteIngredients,
  CompleteMealList,
  RelatedIngredientsModel,
  RelatedMealListModel,
} from "./index";

export const MealCompositionModel = z.object({
  id: z.string(),
  mealListId: z.string().nullish(),
});

export interface CompleteMealComposition
  extends z.infer<typeof MealCompositionModel> {
  MealList?: CompleteMealList | null;
  ingredients: CompleteIngredients[];
}

/**
 * RelatedMealCompositionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMealCompositionModel: z.ZodSchema<CompleteMealComposition> =
  z.lazy(() =>
    MealCompositionModel.extend({
      MealList: RelatedMealListModel.nullish(),
      ingredients: RelatedIngredientsModel.array(),
    })
  );
