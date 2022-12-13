import * as z from "zod";
import {
  CompleteExerciseList,
  CompleteUser,
  CompleteUserSuggestedPlan,
  RelatedExerciseListModel,
  RelatedUserModel,
  RelatedUserSuggestedPlanModel,
} from "./index";

export const ExercisePlanModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  created_at: z.date(),
  updated: z.date(),
  active: z.boolean(),
  authorId: z.string(),
  exerciseListId: z.string(),
});

export interface CompleteExercisePlan
  extends z.infer<typeof ExercisePlanModel> {
  exercise_list: CompleteExerciseList;
  author: CompleteUser;
  UserSuggestedPlan: CompleteUserSuggestedPlan[];
}

/**
 * RelatedExercisePlanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExercisePlanModel: z.ZodSchema<CompleteExercisePlan> =
  z.lazy(() =>
    ExercisePlanModel.extend({
      exercise_list: RelatedExerciseListModel,
      author: RelatedUserModel,
      UserSuggestedPlan: RelatedUserSuggestedPlanModel.array(),
    })
  );
