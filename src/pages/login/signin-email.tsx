import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi2";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import CustomInput from "../../components/inputs/input";
import ConfirmButton from "../../components/login-form/button/confirm-button";
import FormContainer from "../../components/login-form/form-container";
import FormFooterProps from "../../components/login-form/form-footer";
import FormHeader from "../../components/login-form/form-header";
import useZodForm from "../../hooks/useZodForm";
import Layout from "../../layout/layout";
import { loginUserSchema } from "../../server/schema/user.schema";

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

  const methods = useZodForm({
    schema: loginUserSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [show, setShow] = useState({ password: false });
  const [error, setError] = useState("");
  const router = useRouter();

  const onPasswordIconClick = () => {
    setShow({ password: !show.password });
  };

  async function onSubmitLoginValues(values: LoginValuesProps) {
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/login",
    });

    if (result?.ok) router.push("/");
    if (result?.error) setError(result?.error);
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <FormHeader title="Login" />

        <FormContainer onSubmit={methods.handleSubmit(onSubmitLoginValues)}>
          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter email"
            inputType={"email"}
            inputPlaceholder="Insert email"
            required
            methods={methods.register("email")}
            errorMessage={error}
            hasLeftIcon
            LeftIcon={<HiAtSymbol size={25} />}
          />

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter password"
            inputType={show.password ? "text" : "password"}
            inputPlaceholder="Insert a secure password"
            required
            methods={methods.register("password")}
            errorMessage={methods.formState.errors.password?.message}
            hasLeftIcon
            LeftIcon={<HiFingerPrint size={25} />}
            onPasswordIconClick={onPasswordIconClick}
            inputPassword
          />

          <ConfirmButton label="Login" />
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
