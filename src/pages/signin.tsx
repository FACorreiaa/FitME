import { trpc } from "../utils/trpc";

export const LoginPage = () => {
  // const { data, isLoading } = trpc.userLogin.me.useQuery();
  // console.log("data", data);

  // if (isLoading) return null;

  // if (data !== "ADMIN") return null;

  return <div>Admin only view</div>;
};

export default LoginPage;
