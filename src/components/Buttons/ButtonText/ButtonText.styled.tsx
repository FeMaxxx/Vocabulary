import styled from "@emotion/styled";
import { mediaSizes } from "../../../constants/mediaSizes";

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  height: 30px;
  border: 2px solid var(--primaryColor);
  border-radius: 20px;

  color: var(--primaryColor);
  background: none;
  font-size: 14px;

  transition: color var(--animation);

  span {
    padding: 0 10px;
  }

  span::first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    color: var(--textColor);
  }

  &:hover div,
  &:focus div {
    top: 0;
  }

  &.active {
    border-color: var(--primaryColor);
    color: var(--textColor);

    &:hover,
    &:focus {
      cursor: default;
    }

    & div {
      top: 0;
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
