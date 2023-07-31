import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primaryColor);
  padding-top: 50px;

  width: 100%;
  font-size: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: relative;
    left: 50%;
    top: 50%;

    display: none;
    padding-top: 50px;

    transform: translate(-50%, -50%);
    width: 420px;
    height: 420px;
    font-size: 22px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:first-of-type {
    margin-bottom: 50px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primaryColor);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    &::after {
      height: 5px;
    }
  }
`;

export const Input = styled.input`
  font-size: 18px;
  background: none;
  padding: 0px 3vw;
  height: 50px;
  width: 100%;
  color: var(--textColor);

  &::placeholder {
    color: rgba(255, 183, 75, 0.2);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 0px 50px;
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  margin-top: 50px;
  overflow: hidden;
  width: 100%;
  height: 50px;
  opacity: 0;

  background: var(--primaryDisabledColor);
  color: var(--primaryColor);
  border: 3px solid var(--primaryColor);
  border-radius: 10px;

  font-size: 22px;

  transition: color var(--animation);

  &:hover,
  &:focus {
    color: var(--textColor);
  }

  &:hover div,
  &:focus div {
    top: 0;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    position: absolute;
    bottom: 20px;
    width: 378px;
    height: 145px;

    border: 0px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 78px;
    border-bottom-right-radius: 78px;

    font-size: 30px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 16px;

  color: var(--redColor);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    bottom: 20px;
    padding: 10px;
    width: 378px;
    height: 145px;

    font-size: 22px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
