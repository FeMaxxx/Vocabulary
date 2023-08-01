import { FC, useEffect } from "react";
import VocabularyPage from "@/components/Pages/Vocabulary";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Vocabulary: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  if (isLogedIn === false) {
    router.push("/login");
    return null;
  }

  return <VocabularyPage />;
};

export default Vocabulary;
