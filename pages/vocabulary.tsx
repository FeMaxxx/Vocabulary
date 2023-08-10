import { FC, useEffect } from "react";
import VocabularyPage from "@/components/Pages/Vocabulary";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import { useWordsState } from "@/wordsState/wordsState";
import { instance } from "@/api/config";

const Vocabulary: FC = (data: any) => {
  const { isLogedIn } = useGlobalState();
  const { setWords, getWords } = useWordsState();
  const router = useRouter();

  useEffect(() => {
    if (data.data) setWords(data.data[0]);
    if (data.data === null) getWords();
  }, []);

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return <VocabularyPage />;
};

export default Vocabulary;

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
