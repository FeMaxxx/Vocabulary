import styled from "@emotion/styled";
import { useSvg } from "@/hooks/useSvg";

const { BurgerMenu, LogoutFirstDetail, LogoutSecondDetail } = useSvg;

export const Nav = styled.nav`
  display: none;
  gap: 20px;
  align-items: center;

  & button:nth-of-type(2) {
    margin-right: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LogoutBtn = styled.button`
  position: relative;
  background: none;
  width: 38px;
  height: 48px;

  & svg {
    position: absolute;
    top: 50%;

    transform: translate(0, -50%);
    fill: var(--primaryColor);
    transition: fill var(--animation), left var(--animation);
  }

  &:hover svg,
  &:focus svg {
    fill: var(--whiteColor);
  }

  &:hover svg:nth-of-type(2),
  &:focus svg:nth-of-type(2) {
    left: 13px;
  }
`;

export const LogoutFirst = styled(LogoutFirstDetail)`
  left: 0px;
  width: 17px;
  height: 32px;
`;

export const LogoutSecond = styled(LogoutSecondDetail)`
  left: 6px;
  width: 21px;
  height: 16px;
`;

export const BurgerBtn = styled.button`
  background: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerBtnIcon = styled(BurgerMenu)`
  width: 30px;
  height: 18px;
`;
