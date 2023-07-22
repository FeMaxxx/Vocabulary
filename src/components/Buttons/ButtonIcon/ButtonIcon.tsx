import { FC } from "react";
import { Button, HomeIcon, InfoIcon } from "./ButtonIcon.styled";
import { useNavigate } from "react-router-dom";

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
      {icon === "home" && <HomeIcon />}
      {icon === "info" && <InfoIcon />}
    </Button>
  );
};
