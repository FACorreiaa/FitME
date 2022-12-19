import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi2";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import CustomInput from "../../components/inputs/input";
import FormContainer from "../../components/login-form/form-container";
import FormFooterProps from "../../components/login-form/form-footer";
import FormHeader from "../../components/login-form/form-header";
import Layout from "../../layout/layout";
import loginValidate from "../../lib/login-validate";

import styles from "../../styles/Form.module.css";

type LoginValuesProps = {
  email: string;
  password: string;
};

export const EmailLoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);
  //
  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;
  const [show, setShow] = useState({ password: false });
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
    setShow({ password: !show.password });
  };

  async function onSubmitLoginValues(values: LoginValuesProps): Promise<any> {
    const result = await signIn("credentials", {
      email: values?.email,
      password: values?.password,
      redirect: false,
      callbackUrl: "/login",
    });
    if (result?.ok) router.push("/");
    return result;
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <FormHeader
          title="Fitness Tracker App!"
          subtitle="Login"
          description="Manage your mean plans, plan your workouts and conquer your
            objectives!"
        />

        <FormContainer onSubmit={formik.handleSubmit}>
          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter email"
            inputType={"email"}
            inputPlaceholder="Insert email"
            getFieldProps={formik.getFieldProps("email")}
            required
            hasError={formik.errors?.email && formik.touched?.email}
            errorMessage={formik.errors.email}
            hasLeftIcon
            LeftIcon={<HiAtSymbol size={25} />}
          />

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter password"
            inputType={show.password ? "text" : "password"}
            inputPlaceholder="Insert a secure password"
            getFieldProps={formik.getFieldProps("password")}
            required
            hasError={formik.errors?.password && formik.touched?.password}
            errorMessage={formik.errors.password}
            hasLeftIcon
            LeftIcon={<HiFingerPrint size={25} />}
            onPasswordIconClick={onPasswordIconClick}
            inputPassword
          />

          <div className={styles.input_button}>
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
        </FormContainer>
        <FormFooterProps
          message="Dont have an account yet?"
          link="/login/signup"
          linkMessage="Sign up!"
        />
      </section>
    </Layout>
  );
};

export default EmailLoginPage;
