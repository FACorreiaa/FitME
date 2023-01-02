import { TRPCError } from "@trpc/server";

import { createProfileSchema, params } from "../../schema/profile.schema";
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

  updateProfileSchema: protectedProcedure
    .input(createProfileSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { about, firstname, image, gender, lastname, address } = input;
        return await ctx.prisma.profile.create({
          data: {
            about,
            firstname,
            lastname,
            address,
            image,
            gender,
            user: { connect: { email: ctx.session?.user?.email as string } },
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }
    }),
  getProfileData: protectedProcedure
    .input(params)
    .query(async ({ ctx, input }) => {
      try {
        const { id } = input;
        return await ctx.prisma.user.findUnique({
          where: {
            id,
          },
          include: {
            profile: true,
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }
    }),
  getUserData: protectedProcedure
    .input(params)
    .query(async ({ ctx, input }) => {
      try {
        const { id } = input;
        return await ctx.prisma.user.findUnique({
          where: {
            id,
          },
          select: {
            name: true,
            email: true,
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
