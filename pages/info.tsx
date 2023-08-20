import { FC } from "react";
import InfoPage from "@/components/Pages/Info";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import Head from "next/head";

const Info: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === true) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>V | Info</title>
      </Head>
      <InfoPage />
    </>
  );
};

export default Info;
