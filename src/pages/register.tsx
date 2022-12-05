import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi2";
import Layout from "../layout/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Form.module.css";

function RegisterPage() {
  const [show, setShow] = useState({ password: false, cpassword: false });

  const onPasswordIconClick = () => {
    setShow({ ...show, password: !show.password });
  };

  const onPasswordConfirmIconClick = () => {
    setShow({ ...show, cpassword: !show.cpassword });
  };

  return (
    <Layout>
      <Head>
        <h1>Register</h1>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <div className="title">
          <h1 className="font-body py-4 text-4xl text-gray-800">Register</h1>
          <p className="mx-auto w-3/4 text-gray-400">
            Manage your mean plans, plan your workouts and conquer your
            objectives!
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="username"
              name="username"
              placeholder="Username"
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show.password ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <span
              onClick={onPasswordIconClick}
              className="icon flex items-center px-4"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show.cpassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm Password"
            />
            <span
              onClick={onPasswordConfirmIconClick}
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
          {/* <div className={styles.input_button}>
            <button className={styles.button_custom} type="button">
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
            <button className={styles.button_custom} type="button">
              Sign in with Github{" "}
              <Image
                alt="github"
                src={"/assets/github.svg"}
                width="20"
                height="20"
              />
            </button>
          </div> */}
        </form>
        <p className="text-grey-400 text-centere">
          Have an account yet?{" "}
          <Link className="text-blue-700" href={"/login"}>
            Sign In!
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default RegisterPage;
