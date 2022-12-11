// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { env } from "../../../env/server.mjs";
import { UserModel } from "../../../../prisma/zod/user";
import { prisma } from "../../../server/db/client";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  //   redirect: async ({ baseUrl }) => {
  //     return baseUrl;
  //   },
  //   jwt: async ({ token, user }) => {
  //     if (typeof user !== typeof undefined) token.user = user;

  //     return token;
  //   },
  // },
  // Configure one or more authentication providers
  //adapter: PrismaAdapter(prisma),
  //secret: process.env.SECRET,
  // session: {
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  // jwt: {
  //   secret: process.env.SECRET,
  // },
  session: {
    strategy: "jwt",
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   type: "credentials",
    //   credentials: {},
    //   authorize(credentials, req) {
    //     const { email, password } = credentials as {
    //       email: string;
    //       password: string;
    //     };
    //     if (
    //       email !== "fernandocorreia316@gmail.com" ||
    //       password !== "Kats0unam1"
    //     ) {
    //       return null;
    //     }

    //     return {
    //       id: "3sj1sj19sj19",
    //       name: "lol",
    //       email: "fernandocorreia316@gmail.com",
    //     };
    //   },
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "test@test.io",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      authorize: async (credentials: any) => {
        const user: any = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        console.log("user credentials", user);
        const checkPassword = await compare(
          credentials.password,
          user?.password
        );

        if (!checkPassword || user?.email !== credentials.email) {
          throw new Error("Username or Password doesnt match");
        }

        return user;
        // if (user !== null) {
        //   return user;
        // } else {
        //   throw new Error(
        //     "User does not exists. Please make sure you insert the correct email & password."
        //   );
        // }
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    // signOut: "/signout",
    // newUser: "/index",
    // error: '/error'
  },
};

export default NextAuth(authOptions);
