import { FC, useEffect } from "react";
import RegisterPage from "@/components/Pages/Register";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Register: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (isLogedIn) router.push("/");
  }, []);

  return <RegisterPage />;
};

export default Register;
