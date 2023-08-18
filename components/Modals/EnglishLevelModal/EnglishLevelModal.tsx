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
  UaText,
} from "./EnglishLevelModal.styled";

export const EnglishLevelModal: FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <Text>Potential level of English with your vocabulary:</Text>

            <Text>
              No English: <span>0-500</span> words;
              <br />
              Beginner/Elementary (A1): <span>501-1500</span> words;
              <br />
              Pre-Intermediate (A2): <span>1501-2000</span> words;
              <br />
              Intermediate (B1): <span>2001-3000</span> words;
              <br />
              Upper-Intermediate (B2): <span>3001-4000</span> words;
              <br />
              Advanced (C1): <span>4001-6000</span> words;
              <br />
              Fluent (C2): <span>6001+</span> words.
            </Text>
          </TextWrap>
        </Modal>
      </BackDrop>
    </Portal>
  );
};
