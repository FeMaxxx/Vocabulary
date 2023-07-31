import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ModalProps } from "@/types/modals";
import { Portal } from "../Portal";
import { ButtonIcon } from "@/components/Buttons";
import { Loader } from "@/components/Loader";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import {
  BackDrop,
  Modal,
  Text,
  Form,
  Input,
  LoaderWrap,
} from "./VerificationModal.styled";

export const VerificationModal: FC<ModalProps> = ({ isOpen }) => {
  const { loading, verifyEmail } = useGlobalState();
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    await verifyEmail(code);

    router.push("/");
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
              <Text>
                A verification code was sent to your e-mail, please enter it
                here.
              </Text>

              <Form>
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
