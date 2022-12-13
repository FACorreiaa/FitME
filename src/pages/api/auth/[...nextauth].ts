// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  //Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  //secret: process.env.SECRET,
  // session: {
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  // jwt: {
  //   secret: process.env.SECRET,
  // },
  // Include user.id on session
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  // session: {
  //   strategy: "jwt",
  // },
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
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "test@test.io",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials: any) {
        //check user
        const user: any = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No user found");
        }
        console.log("user credentials", user);
        const checkPassword = await compare(
          credentials.password,
          user?.password
        );
        console.log("user?.password", user?.password);

        if (!checkPassword || user.email !== credentials.email) {
          throw new Error("Password or Email dont match");
        }

        return user;

        // const response = await fetch("http://localhost:3000/auth/signin", {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: credentials.email,
        //     password: credentials.password,
        //   }),
        // });
        // console.log("response", response);
        // if (response !== null) {
        //   return await response?.json();
        // } else {
        //   throw new Error(
        //     "User does not exists. Please make sure you insert the correct email & password."
        //   );
        // }
      },
    }),
  ],
  // Include user.id on session
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  // pages: {
  // signIn: "/signin",
  // newUser: "/",

  //   signOut: "/signout",
  //   error: '/error'
  // },
};

export default NextAuth(authOptions);
