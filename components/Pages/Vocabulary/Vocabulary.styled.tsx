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

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  max-width: 450px;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(2px);
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: var(--primaryColor);
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  padding: 0 10px;
  color: var(--textColor);
  font-size: 14px;
  text-align: center;

  &::placeholder {
    color: rgba(255, 183, 75, 0.3);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    &::placeholder {
      color: rgba(255, 183, 75, 0.2);
    }
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 16px;
    height: 45px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-wrap: nowrap;
  }
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 0 12px;
  height: 40px;
  white-space: nowrap;

  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  font-size: 14px;
  color: var(--primaryColor);

  transition: color var(--animation);

  &.active {
    cursor: default;
    color: var(--textColor);

    & div {
      top: 0;
    }
  }

  &:hover,
  &:focus {
    color: var(--textColor);
  }

  &:hover div,
  &:focus div {
    top: 0;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 16px;
    height: 45px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;
