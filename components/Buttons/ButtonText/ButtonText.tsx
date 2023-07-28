import { FC } from "react";
import { Button } from "./ButtonText.styled";
import { BtnFillAnimation } from "../BtnFillAnimation";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const onClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
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
