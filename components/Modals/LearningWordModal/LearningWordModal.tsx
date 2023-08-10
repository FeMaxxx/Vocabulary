import { FC, useEffect, MouseEvent, useState } from "react";
import { ModalProps } from "@/types/modals";
import { WordI } from "@/types/words";
import { Portal } from "../Portal";
import { ButtonClose } from "@/components/Buttons";
import { format, isBefore, parseISO } from "date-fns";
import { ButtonIcon } from "@/components/Buttons";
import { useWordsState } from "@/wordsState/wordsState";
import { ConfirmWordModal } from "..";
import {
  BackDrop,
  Modal,
  CloseButtonWrap,
  Vocary,
  Wrap,
  Word,
  ButtonsContainer,
} from "./LearningWordModal.styled";

export interface AddWordModalProps extends ModalProps {
  word: WordI | null;
  lvl: "vocabulary" | "firstLvl" | "secondLvl" | "thirdLvl";
}

export const LearningWordModal: FC<AddWordModalProps> = ({
  isOpen,
  onClose,
  word,
  lvl,
}) => {
  const { deleteWord } = useWordsState();
  const [confirmWordModalOpen, setConfirmWordModalOpen] = useState(false);

  const handleBackDropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    if (confirmWordModalOpen === true) onClose();
  }, [confirmWordModalOpen]);

  if (!word) return null;

  const handleDeleteButton = () => {
    deleteWord({ id: word._id, deleteFrom: lvl });
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
              <p>
                Added:{" "}
                <span>
                  {format(parseISO(word.addedAt as any), "dd.MM HH:mm")}
                </span>
              </p>
              <p>
                Can be confirmed:{" "}
                <span>
                  {isBefore(parseISO(word.canByConfirmed as any), new Date())
                    ? "Right now"
                    : format(
                        parseISO(word.canByConfirmed as any),
                        "dd.MM HH:mm"
                      )}
                </span>
              </p>

              <ButtonsContainer>
                <ButtonIcon fnc={handleDeleteButton} icon="dumpster" />

                {isBefore(parseISO(word?.canByConfirmed as any), new Date()) ? (
                  <ButtonIcon
                    fnc={() => setConfirmWordModalOpen(true)}
                    icon="rightArrow"
                  />
                ) : null}
              </ButtonsContainer>
            </Wrap>
          </Modal>
        </BackDrop>
      </Portal>

      <ConfirmWordModal
        isOpen={confirmWordModalOpen}
        onClose={() => setConfirmWordModalOpen(false)}
        word={word}
        lvl={lvl}
      />
    </>
  );
};
