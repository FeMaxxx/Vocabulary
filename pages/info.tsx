import { FC, useEffect } from "react";
import InfoPage from "@/components/Pages/Info";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Info: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (isLogedIn) router.push("/");
  }, []);

  return <InfoPage />;
};

export default Info;
