import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi2";

import Layout from "../layout/layout";
import registerValidate from "../lib/register-validate";
import { trpc } from "../utils/trpc";

import styles from "../styles/Form.module.css";

type RegisterPageProps = {
  username: string;
  email: string;
  password: string;
  cpassword: string;
};
function RegisterPage() {
  const mutation = trpc.auth.signUp.useMutation();
  //console.log("data", data);

  //if (isLoading) return null;

  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  async function onSumitRegisterValues(values: RegisterPageProps) {
    const { username, email, password, cpassword } = values;
    console.log("values", values);

    mutation.mutate({ username, email, password, cpassword });
    console.log("mutation.isSuccess", mutation.isSuccess);
    mutation.isSuccess && router.push("http://localhost:3000");
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: registerValidate,
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
          <div
            className={`${styles.input_group} ${
              formik.errors?.username && formik.touched?.username
                ? "border-rose-600"
                : ""
            }`}
          >
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
          {formik.errors?.username && formik.touched?.username ? (
            <span className="text-rose-400">{formik.errors.username}</span>
          ) : (
            <></>
          )}
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
                : " "
            }`}
          >
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
          {formik.errors?.password && formik.touched?.password ? (
            <span className="text-rose-400">{formik.errors.password}</span>
          ) : (
            <></>
          )}
          <div
            className={`${styles.input_group} ${
              formik.errors?.cpassword && formik.touched?.cpassword
                ? "border-rose-600"
                : " "
            }`}
          >
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
          {formik.errors?.cpassword && formik.touched?.cpassword ? (
            <span className="text-rose-400">{formik.errors.cpassword}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_button}>
            <button className={styles.button} type="submit">
              Register
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
