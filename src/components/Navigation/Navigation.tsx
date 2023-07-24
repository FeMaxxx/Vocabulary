import { FC } from "react";
import { Nav, BurgerBtn, BurgerBtnIcon } from "./Navigation.styled";
import { useLocation } from "react-router-dom";
import { ButtonIcon, ButtonText } from "../Buttons";

export const Navigation: FC = () => {
  const location = useLocation();

  return (
    <>
      <Nav>
        <ButtonIcon
          isActive={location.pathname === "/"}
          icon="home"
          navigateTo="/"
        />
        <ButtonIcon
          isActive={location.pathname === "/info"}
          icon="info"
          navigateTo="/info"
        />
        <ButtonText
          isActive={location.pathname === "/register"}
          text="register"
          navigateTo="/register"
        />
        <ButtonText
          isActive={location.pathname === "/login"}
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
