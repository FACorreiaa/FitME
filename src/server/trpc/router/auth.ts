import { TRPCError } from "@trpc/server";
import { hash } from "bcryptjs";

import { createUserSchema, loginUserSchema } from "../../schema/user.schema";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const authRouter = router({
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
  signUp: publicProcedure
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
          return { message: "User already exists..." };
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
  changePassword: publicProcedure
    .input(loginUserSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { email, password } = input;

        //check if email exists
        const checkingUsers = await ctx.prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!checkingUsers) {
          return { message: "Email not found" };
        }

        return await ctx.prisma.user.update({
          where: {
            email,
          },
          data: {
            password: await hash(password, 12),
            updatedAt: new Date(),
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
