import { FC, useState } from "react";
import { CheckRandomWordModal, RandomWordInfo } from "../Modals";
import { useWordsState } from "@/wordsState";
import { VocabularyWordI } from "@/types/words";
import {
  Container,
  CountContainer,
  CheckContainer,
  Vocary,
  Text,
  ButtonsContainer,
} from "./CheckRandomWord.styled";
import { ButtonText, ButtonQuestion } from "../Buttons";

interface Props {
  wordsCount: number;
}

export const CheckRandomWord: FC<Props> = ({ wordsCount }) => {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [checkRandomWordModalOpen, setCheckRandomWordModalOpen] =
    useState(false);
  const [word, setWord] = useState<VocabularyWordI | null>(null);
  const { words } = useWordsState();

  const handleRandomButton = () => {
    if (!words) return;

    const randomNumber = Math.floor(Math.random() * words.vocabulary.length);

    setWord(words.vocabulary[randomNumber]);
    setCheckRandomWordModalOpen(true);
  };

  return (
    <>
      <Container>
        {wordsCount < 100 && (
          <CountContainer>
            <>
              <Vocary />

              <Text>
                Add <span>{100 - wordsCount}</span> more words to open a new
                possibility
              </Text>
            </>
          </CountContainer>
        )}

        {wordsCount >= 100 && (
          <CheckContainer>
            <ButtonsContainer>
              <ButtonText fnc={handleRandomButton} text="Check a random word" />
              <ButtonQuestion
                fnc={() => setInfoModalOpen(true)}
                id="randomWord"
              />
            </ButtonsContainer>
          </CheckContainer>
        )}
      </Container>

      <CheckRandomWordModal
        isOpen={checkRandomWordModalOpen}
        word={word}
        onClose={() => setCheckRandomWordModalOpen(false)}
      />

      <RandomWordInfo
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
      />
    </>
  );
};
