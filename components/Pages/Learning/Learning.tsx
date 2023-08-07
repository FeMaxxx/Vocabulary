import { FC, useState, MouseEvent, useEffect } from "react";
import { AddWordForm } from "@/components/AddWordForm";
import { LearnWordsContainer } from "@/components/LearnWordsContainer";
import { useWordsState } from "@/wordsState/wordsState";
import throttle from "lodash.throttle";
import { BtnFillAnimation } from "@/components/Buttons";
import {
  Container,
  LvlButtonsContainer,
  LvlButton,
  LearnContainersWrap,
} from "./Learning.styled";

const Learning: FC = () => {
  const screenWidth = window.innerWidth;

  const [wordsContainer, setWordsContainer] = useState<number | "all">(
    screenWidth > 1023 ? "all" : 1
  );
  const { words } = useWordsState();

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1023) {
      setWordsContainer("all");
    } else {
      setWordsContainer(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(handleWindowResize, 300));

    return () => {
      window.removeEventListener("resize", throttle(handleWindowResize, 300));
    };
  }, []);

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
        <LvlButton
          className={wordsContainer === 1 ? "active" : ""}
          name="1"
          onClick={handleLvlButton}
        >
          1lvl
          <BtnFillAnimation />
        </LvlButton>
        <LvlButton
          className={wordsContainer === 2 ? "active" : ""}
          name="2"
          onClick={handleLvlButton}
        >
          2lvl
          <BtnFillAnimation />
        </LvlButton>
        <LvlButton
          className={wordsContainer === 3 ? "active" : ""}
          name="3"
          onClick={handleLvlButton}
        >
          3lvl
          <BtnFillAnimation />
        </LvlButton>
      </LvlButtonsContainer>

      <LearnContainersWrap>
        {(wordsContainer === 1 || wordsContainer === "all") && (
          <LearnWordsContainer
            words={words ? words?.firstLvl : []}
            lvl="1lvl"
          />
        )}

        {(wordsContainer === 2 || wordsContainer === "all") && (
          <LearnWordsContainer
            words={words ? words?.secondLvl : []}
            lvl="2lvl"
          />
        )}

        {(wordsContainer === 3 || wordsContainer === "all") && (
          <LearnWordsContainer
            words={words ? words?.thirdLvl : []}
            lvl="3lvl"
          />
        )}
      </LearnContainersWrap>
    </Container>
  );
};

export default Learning;
