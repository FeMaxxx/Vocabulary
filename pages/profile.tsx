import { FC, useEffect, useState } from "react";
import ProfilePage from "@/components/Pages/Profile";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import { instance } from "@/api/config";
import { StatsI } from "@/types/stats";
import Head from "next/head";

const Profile: FC = (data: any) => {
  const [stats, setStats] = useState<StatsI | null>(null);
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  const getStats = async () => {
    const response = await instance.get(`stats`);
    setStats(response.data[0]);
  };

  useEffect(() => {
    if (data.data) setStats(data.data[0]);
    if (data.data === null) getStats();
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
      <ProfilePage stats={stats} />
    </>
  );
};

export default Profile;

export async function getServerSideProps({ req, res }: any) {
  const accessTokenValue = req.cookies.accessToken;

  try {
    const response: any = await instance.get(`stats`, {
      headers: {
        Authorization: `Bearer ${accessTokenValue}`,
      },
    });

    const data = response?.data !== undefined ? response?.data : null;

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
}
