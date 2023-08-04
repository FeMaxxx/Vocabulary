import { FC, useEffect } from "react";
import LearningPage from "@/components/Pages/Learning";
import { useGlobalState } from "@/globalState";
import { useWordsState } from "@/wordsState/wordsState";
import { useRouter } from "next/router";
import { instance } from "@/api/config";

const Learning: FC = (data: any) => {
  const { isLogedIn } = useGlobalState();
  const { setWords } = useWordsState();
  const router = useRouter();

  useEffect(() => {
    if (data) setWords(data.data[0]);
  }, []);

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return <LearningPage />;
};

export default Learning;

export async function getServerSideProps({ req, res }: any) {
  const accessTokenValue = req.cookies.accessToken;

  try {
    const response: any = await instance.get(`words`, {
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
