import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi2";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import CustomInput from "../../components/inputs/input";
import FormContainer from "../../components/register_form/form-container";
import FormFooterProps from "../../components/register_form/form-footer";
import FormHeader from "../../components/register_form/form-header";
import Layout from "../../layout/layout";
import registerValidate from "../../lib/register-validate";
import { trpc } from "../../utils/trpc";

import styles from "../../styles/Form.module.css";

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
    mutation.mutate({ username, email, password, cpassword });
    mutation.isSuccess && router.push("http://localhost:5005/login/signin");
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    //validateOnChange: false,
    //validateOnBlur: false,
    validate: registerValidate,
    onSubmit: onSumitRegisterValues,
  });
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
        <FormHeader
          title="Register"
          description="Manage your mean plans, plan your workouts and conquer your
            objectives!"
        />

        <FormContainer onSubmit={formik.handleSubmit}>
          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter username"
            inputType="username"
            inputPlaceholder="Username"
            getFieldProps={formik.getFieldProps("username")}
            required
            hasError={formik.errors?.username && formik.touched?.username}
            errorMessage={formik.errors.username}
            hasLeftIcon
            LeftIcon={<HiOutlineUser size={25} />}
          />

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Enter email"
            inputType="email"
            inputPlaceholder="email@email.com"
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

          <CustomInput
            customStyle={styles.input_group}
            inputLabel="Confirm password"
            inputType={show.cpassword ? "text" : "password"}
            inputPlaceholder="Confirm your password"
            getFieldProps={formik.getFieldProps("cpassword")}
            required
            hasError={formik.errors?.cpassword && formik.touched?.cpassword}
            errorMessage={formik.errors.cpassword}
            hasLeftIcon
            LeftIcon={<HiFingerPrint size={25} />}
            onPasswordIconClick={onConfirmPasswordIconClick}
          />

          <div className={styles.input_button}>
            <button className={styles.button} type="submit">
              Register
            </button>
          </div>
        </FormContainer>

        <FormFooterProps
          message="Dont have an account yet?"
          link="/login/signin"
          linkMessage="Sign In!"
        />
      </section>
    </Layout>
  );
}

export default RegisterPage;
