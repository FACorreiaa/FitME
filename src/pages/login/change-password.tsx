import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi2";
import Head from "next/head";
import { useRouter } from "next/router";

import CustomInput from "../../components/inputs/input";
import ConfirmButton from "../../components/login-form/button/confirm-button";
import FormContainer from "../../components/login-form/form-container";
import FormFooterProps from "../../components/login-form/form-footer";
import FormHeader from "../../components/login-form/form-header";
import FormErrorMessage from "../../components/login-form/status/form-error-message";
import FormSuccessMessage from "../../components/login-form/status/form-success-message";
import useZodForm from "../../hooks/useZodForm";
import Layout from "../../layout/layout";
import { loginUserSchema } from "../../server/schema/user.schema";
import { trpc } from "../../utils/trpc";

import styles from "../../styles/Form.module.css";

type ChangePasswordProps = {
  email: string;
  password: string;
};

export const ChangePasswordPage = () => {
  const methods = useZodForm({
    schema: loginUserSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = trpc.auth.changePassword.useMutation();

  const [show, setShow] = useState({ password: false });
  const router = useRouter();

  const onPasswordIconClick = () => {
    setShow({ password: !show.password });
  };

  async function onSubmitChangePassword(values: ChangePasswordProps) {
    return await mutation.mutate(values, {
      onSuccess: async () =>
        setTimeout(() => {
          return router.push("http://localhost:5005/login/signin");
        }, 1500),
      onError: async (error) => {
        console.log(error);
      },
    });
  }

  return (
    <Layout>
      <Head>
        <title>Change Password</title>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <FormHeader title="Change Password" />

        <FormContainer onSubmit={methods.handleSubmit(onSubmitChangePassword)}>
          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter email"
            inputType={"email"}
            inputPlaceholder="Insert email"
            required
            methods={methods.register("email")}
            errorMessage={methods.formState.errors.email?.message}
            hasLeftIcon
            LeftIcon={<HiAtSymbol size={25} />}
          />

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter password"
            inputType={show.password ? "text" : "password"}
            inputPlaceholder="Insert a secure password"
            methods={methods.register("password")}
            required
            errorMessage={methods.formState.errors.password?.message}
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
