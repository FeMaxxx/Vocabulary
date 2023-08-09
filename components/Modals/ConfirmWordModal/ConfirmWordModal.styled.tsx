import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryLerningSmile } = useSvg;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);

  opacity: 0;
  pointer-events: none;

  transition: opacity 200ms cubic-bezier(0, 1, 1, 1);

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  padding: 20px;

  width: min(90vw, 1000px);

  border: 2px solid var(--primaryColor);
  border-radius: 30px;
  background-color: var(--modalBGColor);

  &.correct {
    border-color: var(--greenColor);

    & svg:not(:first-of-type) {
      fill: var(--greenColor);
    }
  }

  &.wrong {
    border-color: var(--redColor);

    & svg:not(:first-of-type) {
      fill: var(--redColor);
    }
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    border: 3px solid var(--primaryColor);
    border-radius: 50px;
    padding: 30px;
  }
`;

export const Vocary = styled(VocaryLerningSmile)`
  display: none;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    fill: var(--primaryColor);
    flex-shrink: 0;
    flex-grow: 0;
    width: 200px;
    height: 200px;
    margin-right: 30px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 250px;
    height: 250px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;
  min-height: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 40px;
    min-height: 200px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    min-height: 250px;
  }
`;

export const Word = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  word-break: break-all;
  white-space: pre-wrap;

  & p {
    color: var(--primaryColor);
    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    justify-content: space-between;
    gap: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    &::after {
      height: 5px;
    }
  }
`;

export const Input = styled.input`
  background: none;
  padding: 0px 15px;
  height: 38px;
  width: 100%;
  padding-bottom: 1px;

  color: var(--textColor);
  text-align: center;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;

  font-family: "Manrope";
  font-size: 14px;
  font-weight: 600;

  &::placeholder {
    color: rgba(255, 183, 75, 0.2);
    font-family: var(--quicksand-font);
    font-weight: 700;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 16px;
    height: 42px;
    padding-bottom: 0px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
    padding: 0px 30px;
    height: 50px;
  }
`;

export const SecondWrap = styled(Wrap)`
  gap: 10px;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 20px;
    min-height: 200px;
    align-items: start;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    min-height: 250px;
  }
`;

export const CloseButtonWrap = styled.div`
  position: absolute;
  top: -35px;
  right: -3px;
`;

export const WordsContainer = styled.label`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  word-break: break-all;
  white-space: pre-wrap;

  & span {
    color: var(--primaryColor);
    font-family: "Manrope";

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 24px;
  }
`;