import styled from "@emotion/styled";
import { useSvg } from "../../../hooks/useSvg";

const { Info, Home } = useSvg;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  border: 2px solid var(--primaryColor);
  border-radius: 100%;

  background: none;

  transition: background var(--animation);

  &.active {
    border-color: var(--primaryDisabledColor);
    & svg:last-child {
      fill: var(--primaryDisabledColor);
    }

    &:hover,
    &:focus {
      cursor: default;
      background: none;
    }
  }

  &.standart {
    & svg:last-child {
      fill: var(--primaryColor);
    }

    &:hover,
    &:focus {
      background: var(--howerColor);
    }
  }

  @media screen and (min-width: 1024px) {
    height: 48px;
    width: 48px;
  }
`;

export const InfoIcon = styled(Info)`
  width: 10px;
  height: 22px;

  @media screen and (min-width: 1024px) {
    width: 12px;
    height: 28px;
  }
`;

export const HomeIcon = styled(Home)`
  width: 22px;
  height: 22px;

  @media screen and (min-width: 1024px) {
    width: 28px;
    height: 28px;
  }
`;
