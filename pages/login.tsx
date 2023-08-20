import { FC } from "react";
import LoginPage from "@/components/Pages/Login";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import Head from "next/head";

const Login: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === true) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>V | Login</title>
      </Head>
      <LoginPage />
    </>
  );
};

export default Login;
