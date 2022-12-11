import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const Profile = () => {
  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold">Profile Page</h3>

      <Link href={"/"}>Home Page</Link>
    </section>
  );
};

export default Profile;

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
