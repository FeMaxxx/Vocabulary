import { FC, useEffect, MouseEvent } from "react";
import { ModalProps } from "@/types/modals";
import { Portal } from "../Portal";
import { ButtonClose } from "@/components/Buttons";
import {
  BackDrop,
  Modal,
  CloseButtonWrap,
  Vocary,
  TextWrap,
  Text,
} from "./LearningContainersInfoModal.styled";

export const LearningContainersInfoModal: FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  return (
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

          <TextWrap>
            <Text>
              There are three levels of verification, the word you added is on
              the first level, then you have to wait 24 hours to move it to the
              second level, and so on. At the third level, after the word is
              verified, it is added to your vocabulary.
            </Text>

            <Text>
              You can click on the word and a window with information about it
              will open, where you can see the date when the word was added and
              when it can be confirmed. You can also delete the word if you made
              a mistake.
            </Text>
          </TextWrap>
        </Modal>
      </BackDrop>
    </Portal>
  );
};
