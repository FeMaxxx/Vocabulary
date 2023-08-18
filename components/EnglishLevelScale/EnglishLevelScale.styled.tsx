import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Container = styled.div`
  margin-top: 30px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    margin-top: 50px;
  }
`;

export const Text = styled.p`
  margin-bottom: 5px;
  font-size: 14px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 20px;
  }
`;

export const Scale = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-right: 30px;
  width: 100%;
  height: 50px;

  border: 3px solid var(--primaryColor);
  border-radius: 10px;
  backdrop-filter: blur(2px);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding-right: 0px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 60px;
  }
`;

export const Lvl = styled.h3`
  color: var(--primaryColor);
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 22px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 30px;
  }
`;

export const Fill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 8px;

  height: 100%;
`;

export const QuestionWrap = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;

  transform: translate(0, -50%);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    right: 0px;
    top: -28px;
    transform: translate(0, 0);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    right: 5px;
    top: -34px;
  }
`;
