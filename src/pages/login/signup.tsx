import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi2";
import { useRouter } from "next/router";

import CustomInput from "../../components/inputs/input";
import ConfirmButton from "../../components/login-form/button/confirm-button";
import FormContainer from "../../components/login-form/form-container";
import FormFooterProps from "../../components/login-form/form-footer";
import FormHeader from "../../components/login-form/form-header";
import FormErrorMessage from "../../components/login-form/status/form-error-message";
import useZodForm from "../../hooks/useZodForm";
import Layout from "../../layout/layout";
import { createUserSchema } from "../../server/schema/user.schema";
import { trpc } from "../../utils/trpc";

import styles from "../../styles/Form.module.css";

type RegisterPageProps = {
  username: string;
  email: string;
  password: string;
  cpassword: string;
};
const RegisterPage = () => {
  const mutation = trpc.auth.signUp.useMutation();
  const methods = useZodForm({
    schema: createUserSchema,
    defaultValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });
  //console.log("data", data);

  //if (isLoading) return null;

  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();

  async function onSumitRegisterValues(values: RegisterPageProps) {
    try {
      mutation.mutateAsync(values);
      console.log("mutate", mutation);
      mutation.isSuccess && router.push("http://localhost:5005/login/signin");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const onPasswordIconClick = () => {
    setShow({ ...show, password: !show.password });
  };

  const onConfirmPasswordIconClick = () => {
    setShow({ ...show, cpassword: !show.cpassword });
  };
  {
    /* <div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiOutlineUser size={25} />
              </div>
              <input
                type="username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div> */
  }
  return (
    <Layout>
      <section className="mx-auto flex w-3/4 flex-col gap-1 ">
        <FormHeader title="Register" />

        <FormContainer onSubmit={methods.handleSubmit(onSumitRegisterValues)}>
          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter username"
            inputType="username"
            inputPlaceholder="Username"
            required
            methods={methods.register("username")}
            errorMessage={methods.formState.errors.username?.message}
            hasLeftIcon
            LeftIcon={<HiOutlineUser size={25} />}
          />

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter email"
            inputType="email"
            inputPlaceholder="email@email.com"
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
            required
            methods={methods.register("password")}
            errorMessage={methods.formState.errors.password?.message}
            hasLeftIcon
            LeftIcon={<HiFingerPrint size={25} />}
            onPasswordIconClick={onPasswordIconClick}
          />

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Confirm password"
            inputType={show.cpassword ? "text" : "password"}
            inputPlaceholder="Confirm your password"
            required
            methods={methods.register("cpassword")}
            errorMessage={methods.formState.errors.cpassword?.message}
            hasLeftIcon
            LeftIcon={<HiFingerPrint size={25} />}
            onPasswordIconClick={onConfirmPasswordIconClick}
          />
          {mutation.isError ? (
            <FormErrorMessage message="Error! Try a different email or password" />
          ) : (
            <></>
          )}
        </FormContainer>
        <ConfirmButton label="Register" />

        <FormFooterProps
          message="Dont have an account yet?"
          link="/login/signin"
          linkMessage="Sign In!"
        />
      </section>
    </Layout>
  );
};

export default RegisterPage;
