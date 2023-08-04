import { FC, useState, MouseEvent, useEffect } from "react";
import { WordI } from "@/types/words";
import {
  WordsContainer,
  Title,
  WordsList,
  Item,
  Word,
  Time,
  Button,
  ButtonIcon,
} from "./LearnWordsContainer.styled";
import { format, isBefore, parseISO } from "date-fns";

interface Props {
  words: WordI[];
}

export const LearnWordsContainer: FC<Props> = ({ words }) => {
  const [wordsInConfirn, setWordsInConfirn] = useState(false);
  const [wordsInWait, setWordsInWait] = useState(false);

  return (
    <WordsContainer>
      <Title>Can be confirmed</Title>

      <WordsList>
        {words.map(word => {
          if (!isBefore(parseISO(word.canByConfirmed as any), new Date()))
            return;

          setWordsInConfirn(true);

          return (
            <Item key={word._id}>
              <Word>{word.word}</Word>
              <Button>
                <ButtonIcon />
              </Button>
            </Item>
          );
        })}
      </WordsList>

      {!setWordsInWait && <div>cocary</div>}

      <Title>Must wait</Title>

      <WordsList>
        {words.map(word => {
          if (isBefore(parseISO(word.canByConfirmed as any), new Date()))
            return;

          setWordsInWait(true);

          return (
            <Item key={word._id}>
              <Word>{word.word}</Word>
              <Time>
                {format(parseISO(word.addedAt as any), "dd.MM HH:mm")}
              </Time>
            </Item>
          );
        })}
      </WordsList>
    </WordsContainer>
  );
};
