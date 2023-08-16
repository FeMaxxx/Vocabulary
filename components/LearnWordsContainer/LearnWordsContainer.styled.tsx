import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { RightArrow, VocaryLerningCrashedSkeptical } = useSvg;

export const WordsContainer = styled.div`
  position: relative;
  width: min(600px, 100%);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(2px);
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
  }
`;

export const Lvl = styled.div`
  display: none;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    position: absolute;
    top: -22px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 20px;

    color: var(--primaryColor);
    font-size: 16px;
    background: none;
    border: 1px solid var(--primaryColor);
    border-radius: 100px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;

  color: var(--primaryColor);
`;

export const WordsList = styled.ul`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primaryColor);
  }
`;

export const Word = styled.button`
  margin-right: 20px;

  font-size: 18px;
  background: none;
  overflow: hidden;
  outline: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  transition: color var(--animation);

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    color: var(--primaryColor);
  }
`;

export const Time = styled.p`
  text-align: center;
  width: 110px;
  flex-shrink: 0;
  font-size: 16px;
  padding: 5px 0px;
  border-radius: 25px;
  background-color: rgba(191, 28, 28, 0.3);
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;

  border: 2px solid var(--primaryColor);
  border-radius: 100px;

  background: none;

  &:hover div,
  &:focus div {
    top: 0;
  }

  &:hover svg,
  &:focus svg {
    fill: var(--textColor);
  }
`;

export const ButtonIcon = styled(RightArrow)`
  width: 24px;
  height: 20px;

  fill: var(--greenColor);

  transition: fill var(--animation);
`;

export const WithoutWords = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 3px solid var(--primaryColor);

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const VocaryCrashed = styled(VocaryLerningCrashedSkeptical)`
  width: 200px;
  height: 70px;

  fill: var(--whiteColor);
`;

export const QuestionWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    top: -22px;
  }
`;
