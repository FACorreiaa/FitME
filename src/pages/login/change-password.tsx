import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi2";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import CustomInput from "../../components/inputs/input";
import ConfirmButton from "../../components/login-form/button/confirm-button";
import FormContainer from "../../components/login-form/form-container";
import FormFooterProps from "../../components/login-form/form-footer";
import FormHeader from "../../components/login-form/form-header";
import FormErrorMessage from "../../components/login-form/status/form-error-message";
import FormSuccessMessage from "../../components/login-form/status/form-success-message";
import Layout from "../../layout/layout";
import loginValidate from "../../lib/login-validate";
import { trpc } from "../../utils/trpc";

import styles from "../../styles/Form.module.css";

type ChangePasswordProps = {
  email: string;
  password: string;
};

export const ChangePasswordPage = () => {
  const mutation = trpc.auth.changePassword.useMutation();

  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);
  //
  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;
  const { data: session } = useSession();
  console.log("session", session);
  const [show, setShow] = useState({ password: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: onSubmitChangePassword,
  });

  const onPasswordIconClick = () => {
    setShow({ password: !show.password });
  };

  async function onSubmitChangePassword(values: ChangePasswordProps) {
    const { email, password } = values;
    try {
      mutation.mutate(
        { email, password },
        {
          onError: (error: any) => {
            throw new Error(error);
          },
          onSuccess: (data) => {
            console.log(data);
          },
        }
      );
      console.log("error", formik.errors);
      console.log("mutate", mutation);

      return (
        mutation.isSuccess &&
        setTimeout(() => {
          return router.push("http://localhost:5005/login/signin");
        }, 2500)
      );
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <FormHeader title="Change Password" />

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
          />
          <ConfirmButton
            label={mutation.isLoading ? "Loading" : "Change Password"}
          />
          {mutation.isSuccess ? (
            <FormSuccessMessage message="Success! Login with your new password" />
          ) : (
            <></>
          )}
          {mutation.isError ? (
            <FormErrorMessage message="Error! Try a different email or password" />
          ) : (
            <></>
          )}

          {/* {!mutation.isSuccess && mutation.isIdle ? (
            <FormWarningMessage message="An error occured. Try a different email or password" />
          ) : (
            <></>
          )} */}
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

export default ChangePasswordPage;
