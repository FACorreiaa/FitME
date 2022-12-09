import { UserModel } from "../../../../prisma/zod/user";
import { publicProcedure, router } from "../../../server/trpc/trpc";

export const signInRouter = router({
  getUser: publicProcedure.input(UserModel).query(async ({ ctx, input }) => {
    try {
      const { id } = input;
      return await ctx.prisma.user.findUnique({
        where: {
          id,
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
