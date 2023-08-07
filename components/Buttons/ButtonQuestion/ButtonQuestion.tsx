import { FC } from "react";
import { Button, Icon } from "./ButtonQuestion.styled";
import { gsap } from "gsap";
import { BtnFillAnimation } from "..";

interface ButtonQuestionProps {
  fnc: any;
  id: string;
}

export const ButtonQuestion: FC<ButtonQuestionProps> = ({ fnc, id }) => {
  const handleButton = () => {
    console.log(1);

    fnc();
  };

  const handleMouseEnter = () => {
    gsap.to(`.questionButton${id}`, {
      rotate: -360,
      scale: 1.8,
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(`.questionButton${id}`, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <Button
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
