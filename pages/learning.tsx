import { FC, useEffect } from "react";
import LearningPage from "@/components/Pages/Learning";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Learning: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (!isLogedIn) router.push("/login");
  }, []);

  return <LearningPage />;
};

export default Learning;
