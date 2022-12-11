import { UserModel } from "../../../../prisma/zod/user";
import { publicProcedure, router } from "../../../server/trpc/trpc";
import { LoginUserInput } from "../../../server/schema/user.schema";
import { Context } from "../../../server/trpc/context";
export const signInRouter = router({
  getUser: publicProcedure
    .input(UserModel)
    .query(async ({ ctx, input }: { ctx: Context; input: LoginUserInput }) => {
      try {
        const { email, password } = input;
        const user = await ctx.prisma.user.findFirst({
          where: {
            email,
            password,
          },
        });
        console.log("user", user);
        return user;
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
