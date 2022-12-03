import { UserModel } from "../../../../../prisma/zod/user";
import { router, publicProcedure, protectedProcedure } from "../../trpc";

export const userLoginRouter = router({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? "world"}`,
  //     };
  //   }),
  // me: protectedProcedure.query(async ({ ctx }) => {
  //   const userResponse = await ctx.prisma.user.findFirst({
  //     where: { id: ctx.session.user.id },
  //     select: { role: true },
  //   });

  //   return userResponse?.role;
  // }),
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.user.findMany({
        select: {
          first_name: true,
          last_name: true,
          nickname: true,
          email: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }),
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
  createUser: publicProcedure
    .input(UserModel)
    .mutation(async ({ ctx, input }) => {
      try {
        const { first_name, last_name, nickname, email, password, gender } =
          input;

        return await ctx.prisma.user.create({
          data: {
            first_name,
            last_name,
            nickname,
            email,
            password,
            gender,
          },
        });
      } catch (error: any) {
        console.log(error);
        throw new Error(error);
      }
    }),
  deleteUser: publicProcedure
    .input(UserModel)
    .mutation(async ({ ctx, input }) => {
      try {
        const { id } = input;

        return await ctx.prisma.user.delete({
          where: {
            id: id,
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
