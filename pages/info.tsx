import { FC } from "react";
import InfoPage from "@/components/Pages/Info";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Info: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === true) {
    router.push("/");
    return null;
  }

  return <InfoPage />;
};

export default Info;
