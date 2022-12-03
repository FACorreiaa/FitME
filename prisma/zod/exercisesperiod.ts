import * as z from "zod"
import * as imports from "../null"
import { CompleteExercises, RelatedExercisesModel } from "./index"

export const ExercisesPeriodModel = z.object({
  id: z.string(),
  name: z.string(),
  series: z.number().int(),
  reps: z.number().int(),
  exercisesId: z.string(),
})

export interface CompleteExercisesPeriod extends z.infer<typeof ExercisesPeriodModel> {
  Exercises?: CompleteExercises | null
}

/**
 * RelatedExercisesPeriodModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExercisesPeriodModel: z.ZodSchema<CompleteExercisesPeriod> = z.lazy(() => ExercisesPeriodModel.extend({
  Exercises: RelatedExercisesModel.nullish(),
}))
