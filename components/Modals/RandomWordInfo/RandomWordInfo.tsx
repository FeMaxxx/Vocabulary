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
  Rules,
} from "./RandomWordInfo.styled";

export const RandomWordInfo: FC<ModalProps> = ({ isOpen, onClose }) => {
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
              You can test your knowledge of a random word from your dictionary.
              When you click the "<span>Check Random Word</span>" button, a
              window will open with the word you need to translate.
            </Text>

            <Rules>
              <p>Rules:</p>
              <ol>
                <li>
                  1. If the word is translated incorrectly, it will be moved
                  from your vocabulary to the first level of verification.
                </li>
                <li>
                  2. If you use the hint even after the correct translation, the
                  word will be moved from your vocabulary to the third level of
                  verification.
                </li>
              </ol>
            </Rules>
          </TextWrap>
        </Modal>
      </BackDrop>
    </Portal>
  );
};
