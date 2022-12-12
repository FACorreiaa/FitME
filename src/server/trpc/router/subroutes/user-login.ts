import { TRPCError } from "@trpc/server";
import { UserModel } from "../../../../../prisma/zod/user";
import { protectedProcedure, publicProcedure, router } from "../../trpc";

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
          id: true,
          username: true,
          email: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        cause: error,
      });
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
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        cause: error,
      });
    }
  }),
  createUser: publicProcedure
    .input(UserModel)
    .mutation(async ({ ctx, input }) => {
      try {
        const { username, email, password } = input;

        return await ctx.prisma.user.create({
          data: {
            username,
            email,
            password,
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
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
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }
    }),
});

// const user = await ctx.prisma.user.authenticate({
//   email: input.email,
//   password: input.password
// });
