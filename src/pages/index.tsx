import { useState } from "react";
import type { GetServerSidePropsContext } from "next";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { type Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";

import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";

import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const { data: session } = useSession();
  console.log("session", session);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? <AuthorizedUser session={session} /> : <Guest />}
    </div>
  );
};

export default Home;

//Guest
const Guest = () => {
  return (
    <main className="container mx-auto py-20 text-center">
      <h3 className="text-4xl font-bold">Guest Home Page</h3>

      <div className="flex justify-center">
        <Link
          href={"/signin"}
          className="text-gray mt-5 rounded-sm bg-indigo-500 px-10 py-1"
        >
          Sign In!
        </Link>
      </div>
    </main>
  );
};

//Auth User

type AuthorizedUserProps = {
  session: Session;
};

const AuthorizedUser = ({ session }: AuthorizedUserProps) => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <main className="container mx-auto py-20 text-center">
      <h3 className="text-4xl font-bold">User Home Page</h3>

      <div className="details">
        <h5>{session.user?.name}</h5>
        <h5>{session.user?.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 rounded-sm bg-indigo-200 px-10 py-1"
        >
          Sign out
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="text-gray mt-5 rounded-sm bg-indigo-500 px-10 py-1"
        >
          Profile
        </Link>
      </div>
    </main>
  );
};

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: { destination: "/signin", permanent: false },
    };
  }
  return {
    props: {
      session,
    },
  };
};
