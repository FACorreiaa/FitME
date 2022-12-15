import { useState } from "react";
import { HiDevicePhoneMobile, HiEnvelope } from "react-icons/hi2";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import Layout from "../layout/layout";

import styles from "../styles/Form.module.css";

export const LoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);
  //
  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;
  const [showMoreButtons, setShowMoreButtons] = useState(false);
  const { data: session } = useSession();
  console.log("session", session);

  async function handleGoogleSignin() {
    signIn("google", {
      callbackUrl: process.env.NEXTAUTH_URL,
    });
  }

  async function handleGithubSignin() {
    signIn("github", {
      callbackUrl: process.env.NEXTAUTH_URL,
    });
  }
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <div className="title">
          <h1 className="font-body py-4 text-4xl text-gray-800">
            Fitness Tracker App!
          </h1>
          <p className="mx-auto w-3/4 text-gray-400">
            Manage your mean plans, plan your workouts and conquer your
            objectives!
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className={styles.input_button}>
            <Link href={"/signin-email"} className={styles.button_custom}>
              Sign in with SMS <HiDevicePhoneMobile size={25} />
            </Link>
          </div>
          <div className={styles.input_button}>
            <Link href={"/phone"} className={styles.button_custom}>
              Sign in with Email <HiEnvelope size={25} />
            </Link>
          </div>
          <div className={styles.input_button}>
            <button
              onClick={handleGoogleSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign in with Google{" "}
              <Image
                alt="google"
                src={"/assets/google.svg"}
                width="20"
                height="20"
              />
            </button>
          </div>
          <div className={styles.input_button}>
            <button
              onClick={handleGithubSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign in with Apple{" "}
              <Image
                alt="github"
                src={"/assets/apple.svg"}
                width="20"
                height="20"
              />
            </button>
          </div>
          <div
            className="pb-10 text-base font-medium"
            onClick={() => setShowMoreButtons(!showMoreButtons)}
          >
            <p className="pb-5">Show more options</p>
            {showMoreButtons && (
              <div className={styles.input_button}>
                <div className="flex flex-row justify-center">
                  <Image
                    alt="github"
                    src={"/assets/github.svg"}
                    width="20"
                    height="20"
                    className="mx-5"
                  />
                  <Image
                    alt="github"
                    src={"/assets/twitter.svg"}
                    width="20"
                    height="20"
                    className="mx-5"
                  />
                  <Image
                    alt="github"
                    src={"/assets/discord.svg"}
                    width="20"
                    height="20"
                    className="mx-5"
                  />
                </div>
              </div>
            )}
          </div>

          {/*<div className={styles.input_button}>
            <button
              onClick={handleGithubSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign in with Github{" "}
              <Image
                alt="github"
                src={"/assets/github.svg"}
                width="20"
                height="20"
              />
            </button>
          </div>

           <div className={styles.input_button}>
            <button
              onClick={handleGithubSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign in with Twitter{" "}
              <Image
                alt="github"
                src={"/assets/twitter.svg"}
                width="20"
                height="20"
              />
            </button>
          </div>
          <div className={styles.input_button}>
            <button
              onClick={handleGithubSignin}
              className={styles.button_custom}
              type="button"
            >
              Sign in with Discord{" "}
              <Image
                alt="github"
                src={"/assets/discord.svg"}
                width="20"
                height="20"
              />
            </button>
          </div> */}
        </div>
        <p className="text-grey-400 text-centere">
          Dont have an account yet?{" "}
          <Link className="text-blue-700" href={"/signup"}>
            Sign up!
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default LoginPage;
