import * as z from "zod";
import {
  CompleteExerciseComposition,
  CompleteExercisePlan,
  RelatedExerciseCompositionModel,
  RelatedExercisePlanModel,
} from "./index";

export const ExerciseListModel = z.object({
  id: z.string(),
  quantity: z.number().int(),
});

export interface CompleteExerciseList
  extends z.infer<typeof ExerciseListModel> {
  ExercisePlan: CompleteExercisePlan[];
  exercises: CompleteExerciseComposition[];
}

/**
 * RelatedExerciseListModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExerciseListModel: z.ZodSchema<CompleteExerciseList> =
  z.lazy(() =>
    ExerciseListModel.extend({
      ExercisePlan: RelatedExercisePlanModel.array(),
      exercises: RelatedExerciseCompositionModel.array(),
    })
  );
