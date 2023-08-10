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
} from "./AddWordModal.styled";

export const AddWordModal: FC<ModalProps> = ({ isOpen, onClose }) => {
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
              To add a new word, type the English word in the first field, the
              translation of the word in the second field, and then click the "
              <span>Add Word</span>" button. You can also add multiple
              translations of the same word, separated by a comma or a period: "
              <span>
                Money - <UaText>Кошти, Гроші</UaText>
              </span>
              "; "
              <span>
                Nowadays - <UaText>В наш час. В наші дні</UaText>
              </span>
              ".
            </Text>

            <Text>
              After adding the word, it will go to the first stage of
              verification in the "<span>Must wait</span>" block, where you will
              see the word you added and the date when it can be confirmed and
              moved to the next stage of verification.
            </Text>
          </TextWrap>
        </Modal>
      </BackDrop>
    </Portal>
  );
};
