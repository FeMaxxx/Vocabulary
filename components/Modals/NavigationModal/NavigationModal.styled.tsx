import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";
import Link from "next/link";

const { LogoutFirstDetail, LogoutSecondDetail } = useSvg;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 60px;
  padding-bottom: 60px;

  background-color: var(--primaryBGColor);

  opacity: 0;
  pointer-events: none;

  transition: opacity var(--animation);

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
  }
`;

export const A = styled(Link)`
  color: var(--primaryColor);

  &.active {
    color: var(--whiteColor);
  }
`;

export const LogoutBtn = styled.button`
  position: relative;

  width: 24px;
  height: 30px;

  background: none;

  & svg {
    position: absolute;
    top: 50%;

    transform: translate(0, -50%);
    fill: var(--primaryColor);
  }
`;

export const LogoutFirst = styled(LogoutFirstDetail)`
  left: 0px;
  width: 15px;
  height: 30px;
`;

export const LogoutSecond = styled(LogoutSecondDetail)`
  left: 6px;
  width: 19px;
  height: 14px;
`;
