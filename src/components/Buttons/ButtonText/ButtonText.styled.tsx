import styled from "@emotion/styled";
import { mediaSizes } from "../../../constants/mediaSizes";

export const Button = styled.button`
  display: flex;
  align-items: center;

  height: 30px;
  padding: 0 10px;

  border: 2px solid var(--primaryColor);
  border-radius: 20px;

  color: var(--primaryColor);
  background: none;

  font-size: 14px;

  span::first-letter {
    text-transform: uppercase;
  }

  transition: background var(--animation);

  &.active {
    color: var(--primaryDisabledColor);
    border-color: var(--primaryDisabledColor);

    &:hover,
    &:focus {
      cursor: default;
      background: none;
    }
  }

  &.standart {
    &:hover,
    &:focus {
      background: var(--howerColor);
    }
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 16px;
    height: 35px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 18px;
    height: 40px;
  }
`;
