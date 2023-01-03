import { TRPCError } from "@trpc/server";

import { createProfileSchema } from "../../schema/profile.schema";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const profileRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  updateProfileSchema: protectedProcedure
    .input(createProfileSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const {
          about,
          firstname,
          image,
          gender,
          lastname,
          address,
          contact,
          birthday,
          age,
          country,
          profession,
          hobbies,
          website,
        } = input;
        return await ctx.prisma.profile.create({
          data: {
            about,
            firstname,
            lastname,
            address,
            image,
            gender,
            contact,
            birthday,
            age,
            country,
            profession,
            hobbies,
            website,
            user: { connect: { name: ctx.session?.user?.name as string } },
          },
        });
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }
    }),
  getProfileData: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.user.findUnique({
        where: {
          name: ctx.session?.user.name as string,
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
});
