import { FC, MouseEvent } from "react";
import { Button, Icon } from "./ButtonClose.styled";
import { BtnFillAnimation } from "..";

interface ButtonQuestionProps {
  fnc: any;
}

export const ButtonClose: FC<ButtonQuestionProps> = ({ fnc }) => {
  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    fnc();
  };

  return (
    <Button type="button" onClick={handleButton}>
      <Icon />
      <BtnFillAnimation />
    </Button>
  );
};
