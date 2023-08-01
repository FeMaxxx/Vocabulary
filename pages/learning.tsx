import { FC } from "react";
import LearningPage from "@/components/Pages/Learning";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Learning: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return <LearningPage />;
};

export default Learning;
