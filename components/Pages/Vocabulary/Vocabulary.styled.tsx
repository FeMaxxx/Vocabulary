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
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-wrap: nowrap;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 15px;
  backdrop-filter: blur(2px);
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: var(--primaryColor);
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: none;
  border: 1px solid var(--primaryColor);
  border-radius: 10px;
  padding: 0 10px;
  color: var(--textColor);
  font-size: 14px;
  text-align: center;

  &::placeholder {
    color: rgba(255, 183, 75, 0.3);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    border: 2px solid var(--primaryColor);

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
  justify-content: space-between;
  gap: 10px;
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

export const WordsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  padding: 15px;
  backdrop-filter: blur(2px);
  width: 100%;

  & p::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 50px;
  }
`;

export const WordsListItem = styled.li`
  max-width: min(100%, 300px);
`;

export const WordBtn = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;

  align-items: center;
  gap: 5px;

  width: 100%;
  height: 40px;
  padding: 0 10px;

  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  background: none;

  font-size: 16px;

  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover div,
  &:focus div {
    top: 0;
  }
`;

export const Word = styled.p``;

export const Translation = styled.div`
  display: flex;
  gap: 5px;
  font-family: "Manrope";

  overflow: hidden;
`;
