import { FC, useState, MouseEvent, useEffect } from "react";
import { AddWordForm } from "@/components/AddWordForm";
import { LearnWordsContainer } from "@/components/LearnWordsContainer";
import { useWordsState } from "@/wordsState";
import { BtnFillAnimation } from "@/components/Buttons";
import { Loader } from "@/components/Loader";
import throttle from "lodash.throttle";
import {
  Container,
  LvlButtonsContainer,
  LvlButton,
  LearnContainersWrap,
  LoaderWrap,
} from "./Learning.styled";

const Learning: FC = () => {
  const [wordsContainer, setWordsContainer] = useState<number | "all">("all");
  const { words, loading } = useWordsState();

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    const wordsC = localStorage.getItem("wordsContainer") as string;

    if (screenWidth > 1023) {
      setWordsContainer("all");
    } else {
      setWordsContainer(wordsC ? Number(wordsC) : 1);
    }
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const container = localStorage.getItem("wordsContainer");

    if (screenWidth < 1024) {
      if (container) {
        setWordsContainer(Number(container));
      } else {
        setWordsContainer(1);
      }
    }

    window.addEventListener("resize", throttle(handleWindowResize, 300));

    return () => {
      window.removeEventListener("resize", throttle(handleWindowResize, 300));
    };
  }, []);

  const handleLvlButton = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "1") {
      setWordsContainer(1);
      localStorage.setItem("wordsContainer", "1");
    } else if (e.currentTarget.name === "2") {
      setWordsContainer(2);
      localStorage.setItem("wordsContainer", "2");
    } else if (e.currentTarget.name === "3") {
      setWordsContainer(3);
      localStorage.setItem("wordsContainer", "3");
    }
  };

  return (
    <Container>
      <AddWordForm />

      {loading && (
        <LoaderWrap>
          <Loader size={150} />
        </LoaderWrap>
      )}

      {!loading && (
        <>
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
                lvl="firstLvl"
              />
            )}

            {(wordsContainer === 2 || wordsContainer === "all") && (
              <LearnWordsContainer
                words={words ? words?.secondLvl : []}
                lvl="secondLvl"
              />
            )}

            {(wordsContainer === 3 || wordsContainer === "all") && (
              <LearnWordsContainer
                words={words ? words?.thirdLvl : []}
                lvl="thirdLvl"
              />
            )}
          </LearnContainersWrap>
        </>
      )}
    </Container>
  );
};

export default Learning;
