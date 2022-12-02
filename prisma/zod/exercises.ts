import * as z from "zod"
import * as imports from "../null"
import { CompleteExercisesPeriod, RelatedExercisesPeriodModel, CompleteExerciseComposition, RelatedExerciseCompositionModel } from "./index"

export const ExercisesModel = z.object({
  id: z.number().int(),
  exercise_name: z.string(),
  exerciseCompositionId: z.number().int().nullish(),
})

export interface CompleteExercises extends z.infer<typeof ExercisesModel> {
  exercises_period: CompleteExercisesPeriod[]
  ExerciseComposition?: CompleteExerciseComposition | null
}

/**
 * RelatedExercisesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExercisesModel: z.ZodSchema<CompleteExercises> = z.lazy(() => ExercisesModel.extend({
  exercises_period: RelatedExercisesPeriodModel.array(),
  ExerciseComposition: RelatedExerciseCompositionModel.nullish(),
}))
