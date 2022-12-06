import { router } from "../trpc";

import { userLoginRouter } from "./subroutes/user-login";
import { authRouter } from "./auth";

export const appRouter = router({
  userLogin: userLoginRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
