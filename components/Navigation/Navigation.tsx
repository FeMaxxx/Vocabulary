import { FC } from "react";
import {
  Nav,
  LogoutBtn,
  LogoutFirst,
  LogoutSecond,
  BurgerBtn,
  BurgerBtnIcon,
} from "./Navigation.styled";
import { ButtonIcon, ButtonText } from "../Buttons";
import { useRouter } from "next/router";
import { useGlobalState } from "@/globalState";

export const Navigation: FC = () => {
  const router = useRouter();
  const { isLogedIn } = useGlobalState();

  return (
    <>
      <Nav>
        {isLogedIn ? (
          <>
            <ButtonIcon
              isActive={router.pathname === "/"}
              icon="home"
              navigateTo="/"
            />
            <ButtonIcon
              isActive={router.pathname === "/info"}
              icon="info"
              navigateTo="/info"
            />
            <ButtonText
              isActive={router.pathname === "/register"}
              text="register"
              navigateTo="/register"
            />
            <ButtonText
              isActive={router.pathname === "/login"}
              text="log-in"
              navigateTo="/login"
            />
          </>
        ) : (
          <>
            <ButtonIcon
              isActive={router.pathname === "/learning"}
              icon="pan"
              navigateTo="/learning"
            />
            <ButtonIcon
              isActive={router.pathname === "/vocabulary"}
              icon="book"
              navigateTo="/vocabulary"
            />
            <ButtonIcon
              isActive={router.pathname === "/profile"}
              icon="headSmile"
              navigateTo="/profile"
            />
            <LogoutBtn>
              <LogoutFirst />
              <LogoutSecond />
            </LogoutBtn>
          </>
        )}
      </Nav>

      <BurgerBtn>
        <BurgerBtnIcon />
      </BurgerBtn>
    </>
  );
};
