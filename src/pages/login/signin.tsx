import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import FormFooterProps from "../../components/login-form/form-footer";
import FormHeader from "../../components/login-form/form-header";
import SocialMediaButton from "../../components/login-form/social-media-button";
import Layout from "../../layout/layout";

import styles from "../../styles/Form.module.css";
export const LoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);
  //
  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;

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
      <section className="mx-auto flex w-3/4 flex-col gap-5">
        <FormHeader subtitle="Login method" />
        <div className="flex flex-col gap-5">
          <button className={styles.input_button}>
            <Link href={"/phone"} className={styles.button_custom}>
              Sign in with SMS{" "}
              <Image
                alt="email"
                src={"/assets/comment-sms-solid.svg"}
                width="15"
                height="15"
              />
            </Link>
          </button>
          <button className={styles.input_button}>
            <Link href={"/login/signin-email"} className={styles.button_custom}>
              Sign in with Email{" "}
              <Image
                alt="email"
                src={"/assets/envelope-solid.svg"}
                width="15"
                height="15"
              />
            </Link>
          </button>
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
                width="15"
                height="15"
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
                width="15"
                height="15"
              />
            </button>
          </div>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
            <p className="mx-4 mb-0 text-center font-semibold">Or</p>
          </div>
          <div className={styles.input_button}>
            <div className="flex flex-row justify-center">
              <SocialMediaButton>
                <Image
                  alt="instagram"
                  src={"/assets/instagram.svg"}
                  width="20"
                  height="20"
                />
              </SocialMediaButton>
              <SocialMediaButton>
                <Image
                  alt="github"
                  src={"/assets/twitter.svg"}
                  width="20"
                  height="20"
                />
              </SocialMediaButton>
              <SocialMediaButton>
                <Image
                  alt="github"
                  src={"/assets/discord.svg"}
                  width="20"
                  height="20"
                />
              </SocialMediaButton>
              <SocialMediaButton>
                <Image
                  src={"/assets/facebook.svg"}
                  alt="Facebook Icon"
                  width="20"
                  height="20"
                />
              </SocialMediaButton>
            </div>
          </div>
        </div>

        <FormFooterProps
          message="Dont have an account yet?"
          link="/login/signup"
          linkMessage="Sign up!"
        />
      </section>
    </Layout>
  );
};

export default LoginPage;
