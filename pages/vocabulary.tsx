import { FC, useEffect } from "react";
import VocabularyPage from "@/components/Pages/Vocabulary";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";

const Vocabulary: FC = () => {
  const { isLogedIn } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (!isLogedIn) router.push("/login");
  }, []);

  return <VocabularyPage />;
};

export default Vocabulary;
