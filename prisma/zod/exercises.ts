import * as z from "zod";
import {
  CompleteExerciseComposition,
  CompleteExercisesPeriod,
  RelatedExerciseCompositionModel,
  RelatedExercisesPeriodModel,
} from "./index";

export const ExercisesModel = z.object({
  id: z.string(),
  exercise_name: z.string(),
  exerciseCompositionId: z.string(),
});

export interface CompleteExercises extends z.infer<typeof ExercisesModel> {
  exercises_period: CompleteExercisesPeriod[];
  ExerciseComposition?: CompleteExerciseComposition | null;
}

/**
 * RelatedExercisesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExercisesModel: z.ZodSchema<CompleteExercises> = z.lazy(
  () =>
    ExercisesModel.extend({
      exercises_period: RelatedExercisesPeriodModel.array(),
      ExerciseComposition: RelatedExerciseCompositionModel.nullish(),
    })
);
