import { FC, useEffect } from "react";
import ProfilePage from "@/components/Pages/Profile";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import { instance } from "@/api/config";
import { useStatsState } from "@/statsState";
import Head from "next/head";

const Profile: FC = (data: any) => {
  const { isLogedIn } = useGlobalState();
  const { getStats, setStats } = useStatsState();
  const router = useRouter();

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
      <ProfilePage />
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
