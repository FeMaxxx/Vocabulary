import { FC, useEffect, MouseEvent } from "react";
import { ModalProps } from "@/types/modals";
import { VocabularyWordI } from "@/types/words";
import { Portal } from "../Portal";
import {
  ButtonClose,
  BtnFillAnimation,
  ButtonIcon,
} from "@/components/Buttons";
import { addHours, format, parseISO } from "date-fns";
import { useWordsState } from "@/wordsState";
import {
  BackDrop,
  Modal,
  CloseButtonWrap,
  Vocary,
  Wrap,
  Word,
  Translation,
  ButtonsContainer,
  ReStudyButton,
  ReStudyButtonIcon,
  LoaderWrap,
} from "./VocabularyWordModal.styled";
import { Loader } from "@/components/Loader";

interface VocabularyWordModal extends ModalProps {
  word: VocabularyWordI | null;
}

export const VocabularyWordModal: FC<VocabularyWordModal> = ({
  isOpen,
  onClose,
  word,
}) => {
  const { deleteWord, moveWord, moveLoading } = useWordsState();

  const handleBackDropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
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
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscBtnClick);

    return () => {
      document.removeEventListener("keydown", handleEscBtnClick);
    };
  }, [isOpen]);

  if (!word) return null;

  const handleDeleteButton = async () => {
    await deleteWord({ id: word._id, deleteFrom: "vocabulary" });

    onClose();
  };

  const handleReStudyButton = async () => {
    await moveWord({
      id: word._id,
      moveFrom: "vocabulary",
      moveTo: "firstLvl",
      canByConfirmed: addHours(new Date(), 24),
    });

    onClose();
  };

  return (
    <>
      <Portal>
        <BackDrop
          id="backDrop"
          onClick={handleBackDropClick}
          className={isOpen ? "active" : ""}
        >
          <Modal>
            <CloseButtonWrap>
              <ButtonClose fnc={() => onClose()} />
            </CloseButtonWrap>

            <Vocary />

            <Wrap>
              <Word>
                Word: <p>{word.word}</p>
              </Word>

              <Translation>
                <p>Translation: </p>
                {word.translate.map((word, index, arr) => {
                  return (
                    <span key={index}>
                      {word}
                      {arr.length - 1 === index ? "." : ", "}
                    </span>
                  );
                })}
              </Translation>

              <p>
                Added:{" "}
                <span>
                  {format(parseISO(word.addedAt as any), "dd.MM.yy HH:mm")}
                </span>
              </p>

              {!moveLoading && (
                <ButtonsContainer>
                  <ButtonIcon fnc={handleDeleteButton} icon="dumpster" />

                  <ReStudyButton onClick={handleReStudyButton}>
                    Send for re-study
                    <ReStudyButtonIcon />
                    <BtnFillAnimation />
                  </ReStudyButton>
                </ButtonsContainer>
              )}

              {moveLoading && (
                <LoaderWrap>
                  <Loader size={48} />
                </LoaderWrap>
              )}
            </Wrap>
          </Modal>
        </BackDrop>
      </Portal>
    </>
  );
};
