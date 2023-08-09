import { FC } from "react";
import { BtnFillAnimation } from "../BtnFillAnimation";
import { useRouter } from "next/router";
import {
  Button,
  HomeIcon,
  InfoIcon,
  RightArrowIcon,
  BookIcon,
  HeadSmileIcon,
  PanIcon,
  DumpsterIcon,
} from "./ButtonIcon.styled";

interface ButtonIconProps {
  icon: string;
  fnc?: any;
  navigateTo?: string;
  isActive?: boolean;
  type?: "button" | "submit";
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  fnc,
  navigateTo,
  isActive,
  type = "button",
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
      type={type}
      className={`${isActive ? "active" : "standart"}`}
      onClick={onClick}
    >
      {icon === "home" && <HomeIcon />}
      {icon === "info" && <InfoIcon />}
      {icon === "rightArrow" && <RightArrowIcon />}
      {icon === "book" && <BookIcon />}
      {icon === "headSmile" && <HeadSmileIcon />}
      {icon === "pan" && <PanIcon />}
      {icon === "dumpster" && <DumpsterIcon />}
      <BtnFillAnimation />
    </Button>
  );
};
