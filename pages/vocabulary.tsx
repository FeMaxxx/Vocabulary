import { FC, useEffect } from "react";
import VocabularyPage from "@/components/Pages/Vocabulary";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import { useWordsState } from "@/wordsState";
import Head from "next/head";

const Vocabulary: FC = () => {
  const { isLogedIn } = useGlobalState();
  const { words, getWords } = useWordsState();
  const router = useRouter();

  useEffect(() => {
    if (!words) getWords();
  }, []);

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Head>
        <title>V | Vocabulary</title>
      </Head>
      <VocabularyPage />
    </>
  );
};

export default Vocabulary;
