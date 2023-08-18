import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Container = styled.section`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const LvlButtonsContainer = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  max-width: 600px;

  color: var(--primaryColor);

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    display: none;
  }
`;

export const LvlButton = styled.button`
  position: relative;
  width: 60px;
  height: 30px;
  overflow: hidden;

  font-size: 18px;
  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;

  transition: color var(--animation);

  &.active {
    color: var(--textColor);

    & div,
    & div {
      top: 0;
    }
  }

  &:hover div,
  &:focus-visible div {
    top: 0;
  }

  &:hover,
  &:focus-visible {
    color: var(--textColor);
  }
`;

export const LearnContainersWrap = styled.div`
  margin-top: 30px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    align-items: start;
    margin-top: 50px;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
    gap: 30px;
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
    gap: 50px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;
