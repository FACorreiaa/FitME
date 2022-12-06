import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi2";
import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import Layout from "../layout/layout";
import { trpc } from "../utils/trpc";

import styles from "../styles/Form.module.css";

type LoginFormProps = {
  email: string;
  password: string;
};
export const LoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);
  //
  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;

  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onSubmitFormikValues,
  });

  const onPasswordIconClick = () => {
    setShow(!show);
  };

  async function onSubmitFormikValues(values: any) {
    console.log(values);
  }

  async function handleGoogleSignin() {
    signIn("google", {
      callbackUrl: "http://localhost:3001",
    });
  }

  async function handleGithubSignin() {
    signIn("github", {
      callbackUrl: "http://localhost:3001",
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
          <div className={styles.input_group}>
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
          <div className={styles.input_group}>
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
          <Link className="text-blue-700" href={"/register"}>
            Sign up!
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default LoginPage;
