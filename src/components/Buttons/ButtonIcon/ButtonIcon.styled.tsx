import styled from "@emotion/styled";
import { ReactComponent as Info } from "../../../images/info.svg";
import { ReactComponent as Home } from "../../../images/home.svg";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: 48px;

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
`;

export const InfoIcon = styled(Info)`
  width: 12px;
  height: 28px;
`;

export const HomeIcon = styled(Home)`
  width: 28px;
  height: 28px;
`;
