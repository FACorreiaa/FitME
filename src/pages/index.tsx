import { useState } from "react";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { type Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";

import HeaderComponent from "../components/common/header";
import HeaderModal from "../components/common/header-modal";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

import Guest from "./guest";

import styles from "../styles/Index.module.css";

function Home() {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? (
        <AuthorizedUser session={session}>
          <div className="text-center">oi</div>
        </AuthorizedUser>
      ) : (
        <Guest />
      )}
    </div>
  );
}

export default Home;

//Auth User

type AuthorizedUserProps = {
  session: Session;
  children: React.ReactNode;
};

export const AuthorizedUser = ({ session, children }: AuthorizedUserProps) => {
  const handleSignOut = () => {
    signOut();
  };
  console.log("sesson", session);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <HeaderComponent
        loggedUser={session.user?.name as string}
        onMenuButtonClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <HeaderModal
          name={session?.user?.name as string}
          email={session?.user?.email as string}
          onClick={handleSignOut}
        />
      )}

      <main className={styles.main}>{children}</main>
    </div>
  );
};

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  if (!session) {
    return {
      redirect: { destination: "/login/signin", permanent: false },
    };
  }
  return {
    props: {
      session: JSON.stringify(session),
    },
  };
}
