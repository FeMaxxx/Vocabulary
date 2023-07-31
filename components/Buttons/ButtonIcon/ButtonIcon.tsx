import { FC } from "react";
import {
  Button,
  HomeIcon,
  InfoIcon,
  RightArrowIcon,
  BookIcon,
  HeadSmileIcon,
  PanIcon,
} from "./ButtonIcon.styled";
import { BtnFillAnimation } from "../BtnFillAnimation";
import { useRouter } from "next/router";

interface ButtonIconProps {
  icon: string;
  fnc?: any;
  navigateTo?: string;
  isActive?: boolean;
  maxSize?: number;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  fnc,
  navigateTo,
  isActive,
  maxSize,
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
    <Button
      type="button"
      style={{ maxWidth: `${maxSize}px`, maxHeight: `${maxSize}px` }}
      className={`${isActive ? "active" : "standart"}`}
      onClick={onClick}
    >
      {icon === "home" && <HomeIcon />}
      {icon === "info" && <InfoIcon />}
      {icon === "rightArrow" && <RightArrowIcon />}
      {icon === "book" && <BookIcon />}
      {icon === "headSmile" && <HeadSmileIcon />}
      {icon === "pan" && <PanIcon />}
      <BtnFillAnimation />
    </Button>
  );
};
