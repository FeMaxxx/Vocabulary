import { FC } from "react";
import RegisterPage from "@/components/Pages/Register";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Register: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === true) {
    router.push("/");
    return null;
  }

  return <RegisterPage />;
};

export default Register;
