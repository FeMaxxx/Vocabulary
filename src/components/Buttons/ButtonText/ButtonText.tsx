import { FC } from "react";
import { Button, ActiveButton } from "./ButtonText.styled";
import { useNavigate } from "react-router-dom";

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

  if (isActive) {
  }

  if (isActive) {
    return (
      <ActiveButton onClick={onClick}>
        <span>{text}</span>
      </ActiveButton>
    );
  }

  return (
    <Button onClick={onClick}>
      <span>{text}</span>
    </Button>
  );
};
