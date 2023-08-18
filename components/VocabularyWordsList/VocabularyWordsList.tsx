import { FC, MouseEvent, useState } from "react";
import { BtnFillAnimation } from "@/components/Buttons";
import { VocabularyWordI } from "@/types/words";
import { VocabularyWordModal } from "../Modals";
import {
  WordsList,
  WordsListItem,
  WordBtn,
  Word,
  Translation,
} from "./VocabularyWordsList.styled";

interface Props {
  words: VocabularyWordI[] | null;
}

export const VocabularyWordsList: FC<Props> = ({ words }) => {
  const [vocabularyWordModalOpen, setVocabularyWordModalOpen] = useState(false);
  const [word, setWord] = useState<VocabularyWordI | null>(null);

  const handleWordBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const findWord = words?.find(word => word._id === e.currentTarget.id);

    setWord(findWord as VocabularyWordI);
    setVocabularyWordModalOpen(true);
  };

  return (
    <>
      <WordsList>
        {words?.map(word => {
          return (
            <WordsListItem key={word._id}>
              <WordBtn onClick={handleWordBtn} id={word._id}>
                <Word>{word.word}</Word>-
                <Translation>{word.translate[0]}</Translation>
                <BtnFillAnimation />
              </WordBtn>
            </WordsListItem>
          );
        })}
      </WordsList>

      <VocabularyWordModal
        isOpen={vocabularyWordModalOpen}
        word={word}
        onClose={() => setVocabularyWordModalOpen(false)}
      />
    </>
  );
};
