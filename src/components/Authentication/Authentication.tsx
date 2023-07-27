import { FC, useRef, useEffect } from "react";
import { AuthForm } from "../AuthForm";
import { gsap } from "gsap";
import { BtnFillAnimation } from "../../components/Buttons";
import { AuthProps } from "../../types/auth";
import {
  VocaryHead,
  EyeLeft,
  EyeRight,
  Mouth,
  Fill,
  GoogleBtn,
  GoogleIcon,
} from "./Authentication.styled";

export const Authentication: FC<AuthProps> = ({ forAuth }) => {
  const vocaryHead = useRef(null);
  const fill = useRef(null);
  const eyeLeft = useRef(null);
  const eyeRight = useRef(null);
  const mouth = useRef(null);
  const googleBtn = useRef(null);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 768) return;

    gsap.to([eyeLeft.current, eyeRight.current, mouth.current], {
      duration: 0,
      display: "block",
    });
    gsap.fromTo(
      vocaryHead.current,
      { y: "-1000%", scale: 0.1 },
      { duration: 0.5, y: "150px" }
    );
    gsap.to(vocaryHead.current, {
      duration: 0.5,
      delay: 0.5,
      scale: 1,
      y: "-0%",
      ease: "elastic.out(1.3, 1.1)",
    });
    gsap.fromTo(
      fill.current,
      {
        y: "-100%",
        backgroundColor: "#ffb74b",
      },
      { y: "100%", delay: 1, duration: 2 }
    );
    gsap.fromTo(
      googleBtn.current,
      {
        x: "1000px",
      },
      { x: "0px", delay: 2, duration: 1, ease: "elastic.out(1.1, 1.1)" }
    );
    gsap.to([eyeLeft.current, eyeRight.current, mouth.current], {
      duration: 0,
      delay: 1.7,
      display: "none",
    });
  }, [screenWidth]);

  return (
    <>
      <VocaryHead ref={vocaryHead}>
        <Fill ref={fill} />
        <EyeLeft ref={eyeLeft} />
        <EyeRight ref={eyeRight} />
        <Mouth ref={mouth} />
      </VocaryHead>

      <AuthForm forAuth={forAuth} />

      <GoogleBtn ref={googleBtn}>
        <GoogleIcon />
        <BtnFillAnimation />
      </GoogleBtn>
    </>
  );
};
