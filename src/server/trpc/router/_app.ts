import { router } from "../trpc";

import { userLoginRouter } from "./subroutes/user-login";
import { authRouter } from "./auth";
import { signInRouter } from "../../../pages/api/auth/signin";
import { signUpRouter } from "../../../pages/api/auth/signup";

export const appRouter = router({
  userLogin: userLoginRouter,
  auth: authRouter,
  signin: signInRouter,
  signup: signUpRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
