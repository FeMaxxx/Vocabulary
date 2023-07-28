import { FC, useRef, useEffect } from "react";
import { AuthForm } from "../AuthForm";
import { gsap } from "gsap";
import { BtnFillAnimation } from "../../components/Buttons";
import {
  VocaryHead,
  EyeLeft,
  EyeRight,
  Mouth,
  Fill,
  GoogleBtn,
  GoogleIcon,
} from "./Authentication.styled";

export const Authentication: FC = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      gsap.to(".vocaryHead", { top: "50%" });
      gsap.to([".eyeLeft", ".eyeRight", ".mouth"], { display: "none" });
      gsap.to(".googleBtn", { opacity: 1 });
      return;
    }

    gsap.fromTo(".vocaryHead", { scale: 0.1 }, { duration: 0.5, top: "50%" });
    gsap.to(".vocaryHead", {
      duration: 0.5,
      delay: 0.5,
      scale: 1,
      ease: "elastic.out(1.3, 1.1)",
    });
    gsap.fromTo(
      ".fill",
      {
        y: "-100%",
        backgroundColor: "#ffb74b",
      },
      { y: "100%", delay: 1, duration: 2 }
    );
    gsap.fromTo(
      ".googleBtn",
      {
        x: "1000px",
        opacity: 1,
      },
      { x: "0px", delay: 2, duration: 1, ease: "elastic.out(1, 1.7)" }
    );

    gsap.to([".eyeLeft", ".eyeRight", ".mouth"], {
      duration: 0,
      delay: 1.7,
      display: "none",
    });
  }, []);

  return (
    <>
      <VocaryHead className="vocaryHead">
        <Fill className="fill" />
        <EyeLeft className="eyeLeft" />
        <EyeRight className="eyeRight" />
        <Mouth className="mouth" />
      </VocaryHead>

      <AuthForm />

      <GoogleBtn className="googleBtn">
        <GoogleIcon />
        <BtnFillAnimation />
      </GoogleBtn>
    </>
  );
};
