import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryVocabularySmile, RightArrow } = useSvg;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);

  opacity: 0;
  pointer-events: none;

  transition: opacity var(--animation);

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

  @media screen and (min-width: ${mediaSizes.mobile}) {
    border: 3px solid var(--primaryColor);
    border-radius: 50px;
    padding: 30px;
  }
`;

export const CloseButtonWrap = styled.div`
  position: absolute;
  top: -35px;
  right: -3px;
`;

export const Vocary = styled(VocaryVocabularySmile)`
  display: none;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    fill: var(--primaryColor);
    flex-shrink: 0;
    flex-grow: 0;
    width: 250px;
    height: 250px;
    margin-right: 30px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-size: 14px;

  & span {
    color: var(--primaryColor);
  }

  @media screen and (min-width: 320px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 18px;
    gap: 15px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 22px;
    gap: 20px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 80%;
    font-size: 24px;
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
    font-size: 22px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 24px;
  }
`;

export const Translation = styled.p`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  white-space: pre-wrap;

  & span {
    color: var(--primaryColor);
    font-family: "Manrope";

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 30px;
  margin-top: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 50px;
  }
`;

export const ReStudyButton = styled.button`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 10px;

  height: 40px;
  padding: 5px 12px;

  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 100px;
  font-size: 16px;
  color: var(--primaryColor);

  transition: color var(--animation);

  &:hover,
  &:focus {
    color: var(--textColor);
  }

  &:hover div,
  &:focus div {
    top: 0;
  }

  &:hover svg,
  &:focus svg {
    fill: var(--whiteColor);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: 48px;
  }
`;

export const ReStudyButtonIcon = styled(RightArrow)`
  display: none;

  @media screen and (min-width: 360px) {
    display: block;

    width: 24px;
    height: 20px;
    fill: var(--greenColor);

    transition: fill var(--animation);
  }
`;
