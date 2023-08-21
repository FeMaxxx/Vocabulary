import { FC, useEffect } from "react";
import ProfilePage from "@/components/Pages/Profile";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import { useStatsState } from "@/statsState";
import Head from "next/head";

const Profile: FC = () => {
  const { isLogedIn } = useGlobalState();
  const { getStats, stats } = useStatsState();
  const router = useRouter();

  useEffect(() => {
    if (!stats) getStats();
  }, []);

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Head>
        <title>V | Profile</title>
      </Head>
      <ProfilePage />
    </>
  );
};

export default Profile;
