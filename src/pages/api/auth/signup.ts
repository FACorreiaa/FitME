import { UserModel } from "../../../../prisma/zod/user";
import { publicProcedure, router } from "../../../server/trpc/trpc";
import { type NextApiRequest, type NextApiResponse } from "next";
import { hash } from "bcryptjs";
type SignupProps = {
  ctx: any;
  input: any;
  res: NextApiRequest;
};
export const signUpRouter = router({
  signup: publicProcedure.input(UserModel).mutation(async ({ ctx, input }) => {
    try {
      const { nickname, email, password } = input;

      //check duplicate users
      const checkingUsers = await ctx.prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (checkingUsers) {
        return { message: "User already exists..." };
      }

      //hash password

      return await ctx.prisma.user.create({
        data: {
          nickname,
          email,
          password: await hash(password, 12),
        },
      });
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }),
});

export default signUpRouter;
// const user = await ctx.prisma.user.authenticate({
//   email: input.email,
//   password: input.password
// });
