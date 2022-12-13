import * as z from "zod";
import { CompleteIngredients, RelatedIngredientsModel } from "./index";

export const MacrosModel = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number().int(),
  calories: z.number().int(),
  protein: z.number().int(),
  carbs: z.number().int(),
  fats: z.number().int(),
  ingredientsId: z.string().nullish(),
});

export interface CompleteMacros extends z.infer<typeof MacrosModel> {
  Ingredients?: CompleteIngredients | null;
}

/**
 * RelatedMacrosModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMacrosModel: z.ZodSchema<CompleteMacros> = z.lazy(() =>
  MacrosModel.extend({
    Ingredients: RelatedIngredientsModel.nullish(),
  })
);
