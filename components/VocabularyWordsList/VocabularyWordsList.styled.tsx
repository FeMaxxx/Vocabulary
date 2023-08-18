import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const WordsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  width: 100%;

  & p::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(2px);
  }
`;

export const WordsListItem = styled.li`
  max-width: 100%;
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
  &:focus-visible div {
    top: 0;
  }
`;

export const Word = styled.p``;

export const Translation = styled.p`
  font-family: "Manrope";
  overflow: hidden;
`;
