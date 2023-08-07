import { FC, useState } from "react";
import { WordI } from "@/types/words";
import { BtnFillAnimation, ButtonQuestion } from "../Buttons";
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
import { format, isBefore, parseISO } from "date-fns";

interface Props {
  words: WordI[];
  lvl: string;
}

export const LearnWordsContainer: FC<Props> = ({ words, lvl }) => {
  const [wordsInConfirn, setWordsInConfirn] = useState(false);
  const [wordsInWait, setWordsInWait] = useState(false);

  return (
    <WordsContainer>
      <Lvl>{lvl}</Lvl>
      <QuestionWrap>
        <ButtonQuestion fnc={() => {}} id={lvl} />
      </QuestionWrap>

      <Title>Can be confirmed</Title>

      <WordsList>
        {words.map(word => {
          if (!isBefore(parseISO(word.canByConfirmed as any), new Date()))
            return;

          if (!wordsInConfirn) setWordsInConfirn(true);

          return (
            <Item key={word._id}>
              <Word>{word.word}</Word>
              <Button>
                <ButtonIcon />
                <BtnFillAnimation />
              </Button>
            </Item>
          );
        })}
      </WordsList>

      {!wordsInConfirn && (
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
              <Word>{word.word}</Word>
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
  );
};
