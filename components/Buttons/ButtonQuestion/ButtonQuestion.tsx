import { FC, MouseEvent } from "react";
import { Button, Icon } from "./ButtonQuestion.styled";
import { gsap } from "gsap";
import { BtnFillAnimation } from "..";

interface ButtonQuestionProps {
  fnc: any;
  id: string;
}

export const ButtonQuestion: FC<ButtonQuestionProps> = ({ fnc, id }) => {
  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    fnc();
  };

  const handleMouseEnter = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) return;

    gsap.to(`.questionButton${id}`, {
      rotate: -360,
      scale: 1.8,
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) return;

    gsap.to(`.questionButton${id}`, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <Button
      type="button"
      className={`questionButton${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onClick={handleButton}
    >
      <Icon />
      <BtnFillAnimation />
    </Button>
  );
};
