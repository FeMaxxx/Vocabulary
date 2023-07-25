import { FC, useRef, useEffect } from "react";
import { RegisterForm } from "../../components/RegisterForm";
import { gsap } from "gsap";
import {
  Container,
  VocaryHead,
  EyeLeft,
  EyeRight,
  Mouth,
  Fill,
} from "./Register.styled";

const Register: FC = () => {
  const vocaryHead = useRef(null);
  const fill = useRef(null);
  const eyeLeft = useRef(null);
  const eyeRight = useRef(null);
  const mouth = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      vocaryHead.current,
      { y: "-1000%" },
      { duration: 0.5, y: "150px" }
    );
    gsap.to(vocaryHead.current, {
      duration: 0.5,
      delay: 0.5,
      scale: 7,
      y: "-0%",
    });
    gsap.fromTo(
      fill.current,
      {
        y: "-100%",
        backgroundColor: "#ffb74b",
      },
      { y: "100%", delay: 1, duration: 2 }
    );
    gsap.to([eyeLeft.current, eyeRight.current, mouth.current], {
      duration: 0,
      delay: 1.7,
      display: "none",
    });
  }, []);

  return (
    <Container>
      <VocaryHead ref={vocaryHead}>
        <Fill ref={fill} />
        <EyeLeft ref={eyeLeft} />
        <EyeRight ref={eyeRight} />
        <Mouth ref={mouth} />
      </VocaryHead>

      <RegisterForm />
    </Container>
  );
};

export default Register;
