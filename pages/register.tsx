import { FC } from "react";
import RegisterPage from "@/components/Pages/Register";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import Head from "next/head";

const Register: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === true) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>V | Register</title>
      </Head>
      <RegisterPage />
    </>
  );
};

export default Register;
