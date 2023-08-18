import {
  FC,
  ChangeEvent,
  useState,
  FormEvent,
  MouseEvent,
  useEffect,
} from "react";
import { ModalProps } from "@/types/modals";
import { VocabularyWordI } from "@/types/words";
import { Portal } from "../Portal";
import { addHours } from "date-fns";
import { ButtonClose, ButtonIcon, ButtonText } from "@/components/Buttons";
import { useWordsState } from "@/wordsState";
import {
  BackDrop,
  Modal,
  Vocary,
  Wrap,
  Word,
  ButtonsContainer,
  FirstLetter,
  Form,
  Label,
  Input,
  SecondWrap,
  CloseButtonWrap,
  WordsContainer,
} from "./CheckRandomWordModal.styled";

export interface AddWordModalProps extends ModalProps {
  word: VocabularyWordI | null;
}

export const CheckRandomWordModal: FC<AddWordModalProps> = ({
  isOpen,
  onClose,
  word,
}) => {
  const [translation, setTranslation] = useState("");
  const [showFirstLetter, setShowFirstLetter] = useState(false);
  const [rightWords, setRightWords] = useState<string[] | null>(null);
  const [wrongWords, setWrongWords] = useState<string[] | null>(null);
  const { moveWord, updateRandomWordStats } = useWordsState();

  const cleansing = () => {
    setTimeout(() => {
      setRightWords(null);
      setWrongWords(null);
      setTranslation("");
      setShowFirstLetter(false);
    }, 200);
  };

  const handleBackDropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (rightWords === null) return;

    if (e.target === e.currentTarget) {
      onClose();
      cleansing();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    if (!isOpen) return;

    const handleEscBtnClick = (e: KeyboardEvent) => {
      if (rightWords === null) return;
      if (e.key === "Escape") {
        onClose();
        cleansing();
      }
    };

    document.addEventListener("keydown", handleEscBtnClick);

    return () => {
      document.removeEventListener("keydown", handleEscBtnClick);
    };
  }, [isOpen, rightWords]);

  if (!word) return null;

  const handleCloseButton = () => {
    onClose();
    cleansing();
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTranslation(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const arr = translation
      .split(/[,.]+/)
      .map(w => w.trim().toLowerCase())
      .filter(w => w !== "");

    const rightWords = word.translate.filter(w => arr.includes(w));
    const wrongWords = arr.filter(w => !word.translate.includes(w));

    setRightWords(rightWords);
    setWrongWords(wrongWords);

    if (rightWords.length === 0) {
      await moveWord({
        id: word._id,
        moveFrom: "vocabulary",
        moveTo: "firstLvl",
        canByConfirmed: addHours(new Date(), 24),
      });

      updateRandomWordStats(false);
    } else {
      if (showFirstLetter) {
        await moveWord({
          id: word._id,
          moveFrom: "vocabulary",
          moveTo: "thirdLvl",
          canByConfirmed: addHours(new Date(), 24),
        });
      }

      updateRandomWordStats(true);
    }
  };

  const modalClassName = () => {
    if ((rightWords?.length as number) > 0) {
      return "correct";
    } else if (rightWords !== null) {
      return "wrong";
    } else {
      return "";
    }
  };

  return (
    <Portal>
      <BackDrop
        onClick={handleBackDropClick}
        id="backDrop"
        className={isOpen ? "active" : ""}
      >
        <Modal className={modalClassName()}>
          <Vocary />

          {!rightWords && !wrongWords && (
            <Wrap>
              <Word>
                Translate word: <p>{word.word}</p>
              </Word>

              {!showFirstLetter && (
                <ButtonsContainer>
                  <ButtonText
                    fnc={() => setShowFirstLetter(true)}
                    text="Show first letter"
                  />
                </ButtonsContainer>
              )}

              {showFirstLetter && (
                <FirstLetter>
                  First letter:
                  <span> {word.translate[0][0].toUpperCase()}</span>
                </FirstLetter>
              )}

              <Form onSubmit={handleSubmit}>
                <Label>
                  <Input
                    onChange={handleInput}
                    type="text"
                    placeholder="Translation"
                    value={translation}
                  />
                </Label>

                <ButtonIcon type="submit" icon="rightArrow" />
              </Form>
            </Wrap>
          )}

          {(rightWords || wrongWords) && (
            <>
              <SecondWrap>
                <CloseButtonWrap>
                  <ButtonClose fnc={handleCloseButton} />
                </CloseButtonWrap>

                <Word>
                  Word: <p>{word.word}</p>
                </Word>

                <WordsContainer>
                  <p>Translation: </p>
                  {word.translate.map((word, index, arr) => {
                    return (
                      <span key={index}>
                        {word}
                        {arr.length - 1 === index ? "." : ", "}
                      </span>
                    );
                  })}
                </WordsContainer>

                <WordsContainer>
                  <p>Correct answers: </p>
                  {rightWords?.length === 0 && <span>-</span>}
                  {rightWords?.map((word, index, arr) => {
                    return (
                      <span key={index}>
                        {word}
                        {arr.length - 1 === index ? "." : ", "}
                      </span>
                    );
                  })}
                </WordsContainer>

                <WordsContainer>
                  <p>Wrong answers: </p>
                  {wrongWords?.length === 0 && <span>-</span>}
                  {wrongWords?.map((word, index, arr) => {
                    return (
                      <span key={index}>
                        {word}
                        {arr.length - 1 === index ? "." : ", "}
                      </span>
                    );
                  })}
                </WordsContainer>
              </SecondWrap>
            </>
          )}
        </Modal>
      </BackDrop>
    </Portal>
  );
};
