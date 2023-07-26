import { FC } from "react";
import { Button } from "./ButtonText.styled";
import { useNavigate } from "react-router-dom";
import { BtnFillAnimation } from "../BtnFillAnimation";

interface ButtonTextProps {
  text: string;
  fnc?: () => void;
  navigateTo?: string;
  isActive?: boolean;
}

export const ButtonText: FC<ButtonTextProps> = ({
  text,
  fnc,
  navigateTo,
  isActive,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
    if (fnc) {
      fnc();
    }
  };

  return (
    <Button className={`${isActive ? "active" : "standart"}`} onClick={onClick}>
      <span>{text}</span>
      <BtnFillAnimation />
    </Button>
  );
};
