import { FC } from "react";
import { Nav, BurgerBtn, BurgerBtnIcon } from "./Navigation.styled";
import { ButtonIcon, ButtonText } from "../Buttons";
import { useRouter } from "next/router";

export const Navigation: FC = () => {
  const router = useRouter();

  return (
    <>
      <Nav>
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
      </Nav>

      <BurgerBtn>
        <BurgerBtnIcon />
      </BurgerBtn>
    </>
  );
};
