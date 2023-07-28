import { FC } from "react";
import { Button, HomeIcon, InfoIcon } from "./ButtonIcon.styled";
import { BtnFillAnimation } from "../BtnFillAnimation";
import { useRouter } from "next/router";

interface ButtonIconProps {
  icon: string;
  fnc?: () => void;
  navigateTo?: string;
  isActive?: boolean;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
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
      {icon === "home" && <HomeIcon />}
      {icon === "info" && <InfoIcon />}
      <BtnFillAnimation />
    </Button>
  );
};
