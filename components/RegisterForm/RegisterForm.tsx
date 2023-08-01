import { FC, useEffect, useState, ChangeEvent, FormEvent } from "react";
import { gsap } from "gsap";
import { regexps } from "../../constants";
import { BtnFillAnimation } from "../Buttons";
import { useGlobalState } from "@/globalState";
import { VerificationModal } from "../Modals";
import { Loader } from "../Loader";
import {
  Form,
  Label,
  Input,
  SubmitBtn,
  ErrorMessage,
  LoaderWrap,
} from "@/components/Authentication/AuthForm.styled";

export const RegisterForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, loading, error, needVerifyEmail } = useGlobalState();

  useEffect(() => {
    if (needVerifyEmail) return;
    setErrorMessage(error);
  }, [error]);

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
      gsap.to(".submitBtn", {
        cursor: "pointer",
        opacity: 1,
        duration: 0.2,
        zIndex: 10,
      });
      gsap.to(".error", {
        opacity: 0,
        duration: 0.2,
        zIndex: 1,
      });
    } else {
      gsap.to(".submitBtn", {
        cursor: "default",
        opacity: 0,
        duration: 0.2,
        zIndex: 1,
      });
      gsap.to(".error", {
        opacity: 1,
        duration: 0.2,
        zIndex: 10,
      });
    }
  }, [email, errorMessage, password]);

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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = document.querySelector(".submitBtn") as HTMLButtonElement;

    await register({ email: email.trim(), password: password.trim() });

    el.setAttribute("disabled", "true");
  };

  return (
    <>
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

        {loading && !needVerifyEmail && (
          <LoaderWrap>
            <Loader size={70} />
          </LoaderWrap>
        )}

        {!loading && (
          <>
            <ErrorMessage className="error">{errorMessage}</ErrorMessage>

            <SubmitBtn className="submitBtn" type="submit">
              Register
              <BtnFillAnimation />
            </SubmitBtn>
          </>
        )}
      </Form>

      <VerificationModal isOpen={needVerifyEmail} />
    </>
  );
};
