import { FC, MouseEvent, useState } from "react";
import { WordI } from "@/types/words";
import { BtnFillAnimation, ButtonQuestion } from "../Buttons";
import { format, isBefore, parseISO } from "date-fns";
import {
  ConfirmWordModal,
  LearningContainersInfoModal,
  LearningWordModal,
} from "../Modals";
import {
  WordsContainer,
  Lvl,
  Title,
  WordsList,
  Item,
  Word,
  Time,
  Button,
  ButtonIcon,
  WithoutWords,
  VocaryCrashed,
  QuestionWrap,
} from "./LearnWordsContainer.styled";

interface Props {
  words: WordI[];
  lvl: "vocabulary" | "firstLvl" | "secondLvl" | "thirdLvl";
}

export const LearnWordsContainer: FC<Props> = ({ words, lvl }) => {
  const [wordsInConfirm, setWordsInConfirm] = useState(false);
  const [wordsInWait, setWordsInWait] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [wordModalOpen, setWordModalOpen] = useState(false);
  const [confirmWordModalOpen, setConfirmWordModalOpen] = useState(false);
  const [word, setWord] = useState<WordI | null>();

  const closeModal = () => {
    setWordModalOpen(false);
  };

  const handleWordClick = (e: MouseEvent) => {
    const findWord = words.find(word => word._id === e.currentTarget.id);

    setWord(findWord);
    setWordModalOpen(true);
  };

  const handleConfirmBtnClick = (e: MouseEvent) => {
    const previousSibling = e.currentTarget.previousSibling as HTMLElement;
    const findWord = words.find(word => word._id === previousSibling?.id);

    setWord(findWord);
    setConfirmWordModalOpen(true);
  };

  const levels = {
    firstLvl: "1lvl",
    secondLvl: "2lvl",
    thirdLvl: "3lvl",
  };

  return (
    <>
      <WordsContainer>
        <Lvl>{levels[lvl as keyof typeof levels]}</Lvl>
        <QuestionWrap>
          <ButtonQuestion fnc={() => setInfoModalOpen(true)} id={lvl} />
        </QuestionWrap>

        <Title>Can be confirmed</Title>

        <WordsList>
          {words.map(word => {
            if (!isBefore(parseISO(word.canByConfirmed as any), new Date()))
              return;

            if (!wordsInConfirm) setWordsInConfirm(true);

            return (
              <Item key={word._id}>
                <Word id={word._id} onClick={handleWordClick}>
                  {word.word}
                </Word>
                <Button onClick={handleConfirmBtnClick}>
                  <ButtonIcon />
                  <BtnFillAnimation />
                </Button>
              </Item>
            );
          })}
        </WordsList>

        {!wordsInConfirm && (
          <WithoutWords>
            <VocaryCrashed />
          </WithoutWords>
        )}

        <Title>Must wait</Title>

        <WordsList>
          {words.map(word => {
            if (isBefore(parseISO(word.canByConfirmed as any), new Date()))
              return;

            if (!wordsInWait) setWordsInWait(true);

            return (
              <Item key={word._id}>
                <Word id={word._id} onClick={handleWordClick}>
                  {word.word}
                </Word>
                <Time>
                  {format(parseISO(word.canByConfirmed as any), "dd.MM HH:mm")}
                </Time>
              </Item>
            );
          })}
        </WordsList>

        {!wordsInWait && (
          <WithoutWords>
            <VocaryCrashed />
          </WithoutWords>
        )}
      </WordsContainer>

      <LearningWordModal
        isOpen={wordModalOpen}
        onClose={closeModal}
        word={word ? word : null}
        lvl={lvl}
      />
      <ConfirmWordModal
        isOpen={confirmWordModalOpen}
        onClose={() => setConfirmWordModalOpen(false)}
        word={word ? word : null}
        lvl={lvl}
      />
      <LearningContainersInfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
      />
    </>
  );
};
