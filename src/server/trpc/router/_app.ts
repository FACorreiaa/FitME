import { router } from "../trpc";
import { authRouter } from "./auth";
import { userLoginRouter } from "./user-login";

export const appRouter = router({
  userLogin: userLoginRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
