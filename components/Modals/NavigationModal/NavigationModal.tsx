import { FC, useEffect } from "react";
import { ModalProps } from "@/types/modals";
import { Portal } from "../Portal";
import { useGlobalState } from "@/globalState";
import { useRouter } from "next/router";
import {
  Modal,
  A,
  LogoutBtn,
  LogoutFirst,
  LogoutSecond,
} from "./NavigationModal.styled";

export const NavigationModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { isLogedIn, logout } = useGlobalState();
  const router = useRouter();

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

  const handleLinkClick = () => {
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <Portal>
      <Modal className={isOpen ? "active" : ""}>
        {!isLogedIn && (
          <>
            <A
              className={router.pathname === "/" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/"}
            >
              Home
            </A>
            <A
              className={router.pathname === "/info" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/info"}
            >
              Info
            </A>
            <A
              className={router.pathname === "/register" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/register"}
            >
              Register
            </A>
            <A
              className={router.pathname === "/login" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/login"}
            >
              Log-in
            </A>
          </>
        )}

        {isLogedIn && (
          <>
            <A
              className={router.pathname === "/learning" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/learning"}
            >
              Learning
            </A>
            <A
              className={router.pathname === "/vocabulary" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/vocabulary"}
            >
              Vocabulary
            </A>
            <A
              className={router.pathname === "/profile" ? "active" : ""}
              onClick={handleLinkClick}
              href={"/profile"}
            >
              Profile
            </A>
            <LogoutBtn onClick={handleLogout}>
              <LogoutFirst />
              <LogoutSecond />
            </LogoutBtn>
          </>
        )}
      </Modal>
    </Portal>
  );
};
