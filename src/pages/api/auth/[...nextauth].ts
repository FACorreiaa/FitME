import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    redirect: async ({ baseUrl }) => {
      return baseUrl;
    },
    jwt: async ({ token, user }) => {
      if (typeof user !== typeof undefined) token.user = user;

      return token;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  //secret: process.env.SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // jwt: {
  //   secret: process.env.SECRET,
  // },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
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
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        if (user !== null) {
          return user;
        } else {
          throw new Error(
            "User does not exists. Please make sure you insert the correct email & password."
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    newUser: "/register"
  }
};
