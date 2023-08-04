import { FC, useState, MouseEvent } from "react";
import { AddWordForm } from "@/components/AddWordForm";
import { LearnWordsContainer } from "@/components/LearnWordsContainer";
import { useWordsState } from "@/wordsState/wordsState";
import { Container, LvlButtonsContainer, LvlButton } from "./Learning.styled";

const Learning: FC = () => {
  const [wordsContainer, setWordsContainer] = useState(1);
  const { words } = useWordsState();

  const handleLvlButton = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "1") {
      setWordsContainer(1);
    } else if (e.currentTarget.name === "2") {
      setWordsContainer(2);
    } else if (e.currentTarget.name === "3") {
      setWordsContainer(3);
    }
  };

  return (
    <Container>
      <AddWordForm />

      <LvlButtonsContainer>
        <LvlButton name="1" onClick={handleLvlButton}>
          1lvl
        </LvlButton>
        <LvlButton name="2" onClick={handleLvlButton}>
          2lvl
        </LvlButton>
        <LvlButton name="3" onClick={handleLvlButton}>
          3lvl
        </LvlButton>
      </LvlButtonsContainer>

      {wordsContainer === 1 && (
        <LearnWordsContainer words={words ? words?.firstLvl : []} />
      )}

      {wordsContainer === 2 && (
        <LearnWordsContainer words={words ? words?.secondLvl : []} />
      )}

      {wordsContainer === 3 && (
        <LearnWordsContainer words={words ? words?.thirdLvl : []} />
      )}
    </Container>
  );
};

export default Learning;
