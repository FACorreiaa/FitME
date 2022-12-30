import { TRPCError } from "@trpc/server";
import { hash } from "bcryptjs";

import { getUserDataSchema } from "../../schema/profile.schema";
import { createUserSchema, loginUserSchema } from "../../schema/user.schema";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const profileRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  // signIn: publicProcedure
  //   .input(UserModel)
  //   .query(async ({ ctx, input }: { ctx: Context; input: LoginUserInput }) => {
  //     try {
  //       const { email, password } = input;
  //       const user = await ctx.prisma.user.findFirst({
  //         where: {
  //           email,
  //           password,
  //         },
  //       });
  //       console.log("user", user);
  //       return user;
  //     } catch (error) {
  //       throw new TRPCError({
  //         code: "INTERNAL_SERVER_ERROR",
  //         cause: error,
  //       });
  //     }
  //   }),

  createUserProfile: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { username, email, password } = input;

        //check duplicate users
        const checkingUsers = await ctx.prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (checkingUsers) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
          });
        }

        //hash password
        return await ctx.prisma.user.create({
          data: {
            username,
            email,
            password: await hash(password, 12),
            createdAt: new Date(),
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }
    }),
  getUserData: publicProcedure
    .input(getUserDataSchema)
    .query(async ({ ctx, input }) => {
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
});
