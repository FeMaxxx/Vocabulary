import { FC, useEffect, useState } from "react";
import { ButtonQuestion } from "../Buttons";
import { EnglishLevelModal } from "../Modals";
import {
  Container,
  Text,
  Scale,
  Lvl,
  Fill,
  QuestionWrap,
} from "./EnglishLevelScale.styled";

interface Props {
  wordsInVocabilary: number;
}

export const EnglishLevelScale: FC<Props> = ({ wordsInVocabilary }) => {
  const [width, setWidth] = useState(0);
  const [englishLevelModalOpen, setEnglishLevelModalOpen] = useState(false);
  const [lvl, setLvl] = useState("No English");

  const levelCalculation = () => {
    if (wordsInVocabilary < 501) {
      setWidth((wordsInVocabilary / 500) * 100);
      setLvl("No English");
      return;
    }
    if (wordsInVocabilary < 1501) {
      setWidth(((wordsInVocabilary - 500) / 1000) * 100);
      setLvl("Beginner/Elementary (A1)");
      return;
    }
    if (wordsInVocabilary < 2001) {
      setWidth(((wordsInVocabilary - 1500) / 500) * 100);
      setLvl("Pre-Intermediate (A2)");
      return;
    }
    if (wordsInVocabilary < 3001) {
      setWidth(((wordsInVocabilary - 2000) / 1000) * 100);
      setLvl("Intermediate (B1)");
      return;
    }
    if (wordsInVocabilary < 4001) {
      setWidth(((wordsInVocabilary - 3000) / 1000) * 100);
      setLvl("Upper-Intermediate (B2)");
      return;
    }
    if (wordsInVocabilary < 6001) {
      setWidth(((wordsInVocabilary - 4000) / 2000) * 100);
      setLvl("Advanced (C1)");
      return;
    }
    if (wordsInVocabilary > 6000) {
      setWidth(100);
      setLvl("Fluent (C2)");
    }
  };

  useEffect(() => {
    levelCalculation();
  }, [wordsInVocabilary]);

  return (
    <>
      <Container>
        <Text>English level</Text>

        <Scale>
          <Lvl>{lvl}</Lvl>
          <Fill
            style={{
              width: `${width}%`,
              backgroundColor: `color-mix(in oklab, rgba(191, 28, 28, 0.3), rgba(37, 139, 0, 0.3) ${width}%)`,
            }}
          />

          <QuestionWrap>
            <ButtonQuestion
              fnc={() => setEnglishLevelModalOpen(true)}
              id={"EnglishLevelScale"}
            />
          </QuestionWrap>
        </Scale>
      </Container>

      <EnglishLevelModal
        isOpen={englishLevelModalOpen}
        onClose={() => setEnglishLevelModalOpen(false)}
      />
    </>
  );
};
