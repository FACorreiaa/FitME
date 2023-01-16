// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import NextAuth, { type NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

type CredentialsType = {
  email: string;
  password: string;
};

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
    TwitterProvider({
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
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No user found");
        }
        const checkPassword = await compare(
          credentials.password,
          user?.password
        );

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
  // callbacks: {
  //   jwt(params) {
  //     if (params.user?.role) {
  //       params.token.role = params.user.role;
  //     }
  //     return params.token;
  //   },
  // },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     session.accessToken = token.accessToken
  //     session.user.id = token.id

  //     return session
  //   }
  // }
  pages: {
    signIn: "/signin",
    newUser: "/",
    signOut: "/signout",
    error: "/error",
  },
};

export default NextAuth(authOptions);
