import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi2";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";

import Layout from "../layout/layout";

import styles from "../styles/Form.module.css";

function RegisterPage() {
  const [show, setShow] = useState({ password: false, cpassword: false });

  async function onSumitRegisterValues(values: any) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: onSumitRegisterValues,
  });
  const onPasswordIconClick = () => {
    setShow({ ...show, password: !show.password });
  };

  const onPasswordConfirmIconClick = () => {
    setShow({ ...show, cpassword: !show.cpassword });
  };

  return (
    <Layout>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <div className="title">
          <h1 className="font-body py-4 text-4xl text-gray-800">Register</h1>
          <p className="mx-auto w-3/4 text-gray-400">
            Manage your mean plans, plan your workouts and conquer your
            objectives!
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="username"
              placeholder="Username"
              {...formik.getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
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
              type={show.password ? "text" : "password"}
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
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={show.cpassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...formik.getFieldProps("cpassword")}
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
          <Link className="text-blue-700" href={"/signin"}>
            Sign In!
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default RegisterPage;
