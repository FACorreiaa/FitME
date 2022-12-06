import { UserModel } from "../../../../prisma/zod/user";
import { publicProcedure, router } from "../../../server/trpc/trpc";

export const userLoginRouter = router({
  signup: publicProcedure.input(UserModel).mutation(async ({ ctx, input }) => {
    try {
      const { nickname, email, password } = input;

      return await ctx.prisma.user.create({
        data: {
          nickname,
          email,
          password,
        },
      });
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }),
});

// const user = await ctx.prisma.user.authenticate({
//   email: input.email,
//   password: input.password
// });
