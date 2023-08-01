import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { ModalProps } from "@/types/modals";
import { Portal } from "../Portal";
import { ButtonIcon } from "@/components/Buttons";
import { Loader } from "@/components/Loader";
import { useGlobalState } from "@/globalState";
import {
  BackDrop,
  Modal,
  Text,
  Form,
  Input,
  LoaderWrap,
  ErrorMessage,
} from "./VerificationModal.styled";

export const VerificationModal: FC<ModalProps> = ({ isOpen }) => {
  const { loading, verifyEmail, error } = useGlobalState();
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (code === "") return;

    verifyEmail(code.trim());
  };

  return (
    <Portal>
      <BackDrop className={isOpen ? "active" : ""}>
        {loading && (
          <LoaderWrap>
            <Loader size={200} />
          </LoaderWrap>
        )}

        {!loading && (
          <Modal>
            <>
              {errorMessage ? (
                <ErrorMessage>{errorMessage}</ErrorMessage>
              ) : (
                <Text>
                  A verification code was sent to your e-mail, please enter it
                  here.
                </Text>
              )}

              <Form onSubmit={handleSubmit}>
                <Input
                  className="veryfyInput"
                  onChange={handleInput}
                  type="password"
                  placeholder="verification code"
                  value={code}
                />

                <ButtonIcon fnc={handleSubmit} icon="rightArrow" />
              </Form>
            </>
          </Modal>
        )}
      </BackDrop>
    </Portal>
  );
};
