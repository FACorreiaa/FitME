import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi2";

import Layout from "../layout/layout";
import loginValidate from "../lib/login-validate";

import styles from "../styles/Form.module.css";

type LoginValuesProps = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);
  //
  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;
  const { data: session } = useSession();
  console.log("session", session);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: onSubmitLoginValues,
  });

  const onPasswordIconClick = () => {
    setShow(!show);
  };

  async function onSubmitLoginValues(values: LoginValuesProps): Promise<any> {
    const result = await signIn("credentials", {
      email: values?.email,
      password: values?.password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log("result", result);
    if (result?.ok) router.push("/");
    return result;
  }

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

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors?.email && formik.touched?.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              className={styles.input_text}
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors?.email && formik.touched?.email ? (
            <span className="text-rose-400">{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <div
            className={`${styles.input_group} ${
              formik.errors?.password && formik.touched?.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              className={styles.input_text}
              type={show ? "text" : "password"}
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            <span
              onClick={onPasswordIconClick}
              className="icon flex items-center px-4"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors?.password && formik.touched?.password ? (
            <span className="text-rose-400">{formik.errors.password}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_button}>
            <button className={styles.button} type="submit">
              Login
            </button>
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
              Sign in with Github{" "}
              <Image
                alt="github"
                src={"/assets/github.svg"}
                width="20"
                height="20"
              />
            </button>
          </div>
        </form>
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
