import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryQuestionSmile } = useSvg;

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

  width: min(90vw, 1150px);

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

export const Vocary = styled(VocaryQuestionSmile)`
  display: none;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    display: flex;
    fill: var(--primaryColor);
    flex-shrink: 0;
    flex-grow: 0;
    width: 250px;
    height: 250px;
    margin-right: 30px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-size: 16px;

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

export const Text = styled.p`
  & span {
    color: var(--primaryColor);
  }
`;

export const Rules = styled.div`
  & p {
    margin-bottom: 6px;
  }

  & ol {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;
