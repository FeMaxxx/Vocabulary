import { FC, useEffect } from "react";
import LoginPage from "@/components/Pages/Login";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Login: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (isLogedIn) router.push("/");
  }, []);

  return <LoginPage />;
};

export default Login;
