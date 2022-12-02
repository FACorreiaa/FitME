import { z } from "zod";
import { UserModel } from '../../../../prisma/zod/user'
import { router, publicProcedure } from "../trpc";

export const userLoginRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      select: {
        first_name: true,
        last_name: true,
        nickname: true,
        email: true
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  }),
  getUser: publicProcedure.input(UserModel).query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.user.findUnique({
      where: {
        id
      }
    })
  }),
  createUser: publicProcedure.input(UserModel).mutation(({ ctx, input }) => {
    const { first_name, last_name, nickname, email, password, gender } = input;

    return ctx.prisma.user.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        nickname: nickname,
        email: email,
        password: password,
        gender: gender
      },
    });
  }),
  deleteUser: publicProcedure.input(UserModel).mutation(({ ctx, input }) => {
    const { id } = input;

    return ctx.prisma.user.delete({
      where: {
        id: id,
      },
    });
  })
});
