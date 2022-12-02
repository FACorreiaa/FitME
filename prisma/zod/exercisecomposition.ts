import * as z from "zod"
import * as imports from "../null"
import { CompleteExercises, RelatedExercisesModel, CompleteExerciseList, RelatedExerciseListModel } from "./index"

export const ExerciseCompositionModel = z.object({
  id: z.number().int(),
  exerciseListId: z.number().int().nullish(),
})

export interface CompleteExerciseComposition extends z.infer<typeof ExerciseCompositionModel> {
  Exercises: CompleteExercises[]
  ExerciseList?: CompleteExerciseList | null
}

/**
 * RelatedExerciseCompositionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExerciseCompositionModel: z.ZodSchema<CompleteExerciseComposition> = z.lazy(() => ExerciseCompositionModel.extend({
  Exercises: RelatedExercisesModel.array(),
  ExerciseList: RelatedExerciseListModel.nullish(),
}))
