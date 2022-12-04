import { trpc } from "../utils/trpc";
import Layout from "../layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
export const LoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);

  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="mx-auto flex w-3/4 flex-col gap-1">
        <div className="title">
          <h1 className="font-body py-4 text-4xl text-gray-800">Explore</h1>
          <p className="mx-auto w-3/4 text-gray-400">
            DEMO PARAGRAPH LET SSEE WHAT I PUT HERE
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.input_button}>
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
          <div className={styles.input_button}>
            <button className={styles.button_custom} type="button">
              Sign in with Google
            </button>
          </div>
          <div className={styles.input_button}>
            <button className={styles.button_custom} type="button">
              Sign in with Github
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
