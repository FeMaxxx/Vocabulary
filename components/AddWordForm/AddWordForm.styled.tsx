import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { HeadSmile } = useSvg;

export const Form = styled.form`
  width: min(600px, 100%);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(2px);
    margin: 0 auto;
    border-radius: 10px;
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > Label:nth-of-type(2) > Input {
    font-family: "Manrope";
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    gap: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  font-size: 18px;
  color: var(--primaryColor);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 250px;
  }
`;

export const Input = styled.input`
  height: 45px;
  background: none;
  border: 1px solid var(--primaryColor);
  border-radius: 10px;
  padding: 0 10px;
  color: var(--textColor);
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 183, 75, 0.3);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    border: 2px solid var(--primaryColor);

    &::placeholder {
      color: rgba(255, 183, 75, 0.2);
    }
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin-top: 30px;

  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  background: none;
  color: var(--primaryColor);
  font-size: 24px;

  transition: color var(--animation);

  &:hover div,
  &:focus div {
    top: 0;
  }

  &:hover,
  &:focus {
    color: var(--textColor);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    border: 3px solid var(--primaryColor);
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  height: 50px;
  width: 100%;

  text-align: center;
  font-size: 18px;
  color: var(--redColor);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 20px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const SuccessMessage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  margin-top: 30px;
  word-break: break-all;
  white-space: pre-wrap;
  min-height: 50px;

  font-size: 15px;
  color: var(--greenColor);

  & p::first-letter,
  & span::first-letter {
    text-transform: uppercase;
  }

  & span {
    font-family: "Manrope";
    margin-bottom: 1.5px;
  }

  @media screen and (min-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 18px;
    padding: 0 50px;
  }
`;

export const HeadIcon = styled(HeadSmile)`
  display: none;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;

    width: 40px;
    height: 40px;

    transform: translate(0, -50%);
    fill: var(--greenColor);

    &:first-of-type {
      left: 0;
    }
  }
`;

export const QuestionWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 0;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    top: 0;
  }
`;
