import { FC, useEffect, useState, ChangeEvent, FormEvent } from "react";
import { gsap } from "gsap";
import { BtnFillAnimation } from "../Buttons";
import {
  Form,
  Label,
  Input,
  SubmitBtn,
  ErrorMessage,
} from "@/components/Authentication/AuthForm.styled";

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [timeoutController, setTimeoutController] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      gsap.to(".form", {
        duration: 0,
        display: "flex",
      });

      return;
    }

    gsap.to(".form", {
      duration: 0,
      display: "flex",
      delay: 1.4,
    });
  }, []);

  useEffect(() => {
    gsap.to(".submitBtn", {
      cursor: "pointer",
      opacity: 1,
      duration: 0.2,
      zIndex: 10,
      delay: 2,
    });

    return;
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      gsap.to(".submitBtn", {
        display: "block",
        opacity: 1,
        duration: 0.2,
        zIndex: 10,
      });
      gsap.to(".error", {
        opacity: 0,
        duration: 0.2,
        zIndex: 1,
      });

      setErrorMessage(null);
    }, 2000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [timeoutController]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setErrorMessage("Email and pasword is required filds");
    } else if (email === "" && password !== "") {
      setErrorMessage("Email is a required fild");
    } else if (password === "" && email !== "") {
      setErrorMessage("Password is a required fild");
    }

    if (email === "" || password === "") {
      gsap.to(".submitBtn", {
        opacity: 0,
        duration: 0.2,
        zIndex: 1,
        display: "none",
      });
      gsap.to(".error", {
        opacity: 1,
        duration: 0.2,
        zIndex: 10,
      });

      setTimeoutController(timeoutController + 1);

      return;
    }

    console.log(email, password);
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <Label>
        Email
        <Input
          onChange={handleInput}
          name="email"
          type="text"
          placeholder="vocary@gmail.com"
          value={email}
        />
      </Label>
      <Label>
        Password
        <Input
          onChange={handleInput}
          name="password"
          type="text"
          placeholder="password"
          value={password}
        />
      </Label>

      <ErrorMessage className="error">{errorMessage}</ErrorMessage>

      <SubmitBtn className="submitBtn" type="submit">
        Log-in
        <BtnFillAnimation />
      </SubmitBtn>
    </Form>
  );
};