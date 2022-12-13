// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

const JWT = "jwt";
export const authOptions: NextAuthOptions = {
  //Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: env.APPLE_CLIENT_ID,
      clientSecret: env.APPLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
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
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: JWT,
  },
  pages: {
    signIn: "/signin",
    newUser: "/",
    signOut: "/signout",
    error: "/error",
  },
};

export default NextAuth(authOptions);
