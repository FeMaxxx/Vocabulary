import { FC, useRef, useEffect, useState, ChangeEvent, FormEvent } from "react";
import { gsap } from "gsap";
import { regexps } from "../../constants";
import { BtnFillAnimation } from "../Buttons";
import { Form, Label, Input, SubmitBtn, ErrorMessage } from "./AuthForm.styled";
import { AuthProps } from "../../types/auth";

export const AuthForm: FC<AuthProps> = ({ forAuth }) => {
  const form = useRef(null);
  const submitBtn = useRef(null);
  const error = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (email === "") {
      setErrorMessage(null);
      return;
    }

    if (!regexps.email.test(email)) {
      setErrorMessage("Email is not correct, example - vocary@gmail.com");
      return;
    }

    setErrorMessage(null);
  }, [email]);

  useEffect(() => {
    if (password === "") {
      setErrorMessage(null);
      return;
    }

    if (/\s/.test(password.trim())) {
      setErrorMessage("Password must not contain spaces");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Minimum password length is 8 characters");
      return;
    }

    if (!/[a-zA-Z]/.test(password) && !/\d/.test(password)) {
      setErrorMessage("Password must contain at least one number and a letter");
      return;
    }

    if (!/\d/.test(password)) {
      setErrorMessage("Password must contain at least one number");
      return;
    }

    if (!/[a-zA-Z]/.test(password)) {
      setErrorMessage("Password must contain at least one letter");
      return;
    }

    setErrorMessage(null);
  }, [password]);

  useEffect(() => {
    if (
      regexps.email.test(email) &&
      password.length >= 8 &&
      errorMessage === null
    ) {
      gsap.to(submitBtn.current, {
        cursor: "pointer",
        opacity: 1,
        duration: 0.2,
        zIndex: 10,
      });
      gsap.to(error.current, {
        opacity: 0,
        duration: 0.2,
        zIndex: 1,
      });
    } else {
      gsap.to(submitBtn.current, {
        cursor: "default",
        opacity: 0,
        duration: 0.2,
        zIndex: 1,
      });
      gsap.to(error.current, {
        opacity: 1,
        duration: 0.2,
        zIndex: 10,
      });
    }
  }, [email, errorMessage, password]);

  useEffect(() => {
    if (screenWidth < 768) {
      gsap.to(form.current, {
        duration: 0,
        display: "flex",
      });

      return;
    }

    gsap.to(form.current, {
      duration: 0,
      display: "flex",
      delay: 1.4,
    });
  }, [screenWidth]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <Form onSubmit={handleSubmit} ref={form}>
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

      <ErrorMessage ref={error}>{errorMessage}</ErrorMessage>

      <SubmitBtn ref={submitBtn} type="submit">
        {forAuth === "register" ? "Register" : "Log-in"}
        <BtnFillAnimation />
      </SubmitBtn>
    </Form>
  );
};
