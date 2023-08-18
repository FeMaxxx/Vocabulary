import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: nowrap;

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
  &:focus-visible {
    color: var(--textColor);
  }

  &:hover div,
  &:focus-visible div {
    top: 0;
  }

  &.active {
    border-color: var(--primaryColor);
    color: var(--textColor);

    &:hover,
    &:focus-visible {
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
