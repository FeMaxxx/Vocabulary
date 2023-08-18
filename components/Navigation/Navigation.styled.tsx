import styled from "@emotion/styled";
import { useSvg } from "@/hooks/useSvg";
import { mediaSizes } from "@/constants";

const { LogoutFirstDetail, LogoutSecondDetail } = useSvg;

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
  &:focus-visible svg {
    fill: var(--whiteColor);
  }

  &:hover svg:nth-of-type(2),
  &:focus-visible svg:nth-of-type(2) {
    left: 13px;
  }
`;

export const LogoutFirst = styled(LogoutFirstDetail)`
  left: 0px;
  width: 13px;
  height: 28px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 17px;
    height: 32px;
  }
`;

export const LogoutSecond = styled(LogoutSecondDetail)`
  left: 6px;
  width: 17px;
  height: 12px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 21px;
    height: 16px;
  }
`;

export const BurgerBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 3vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 20px;

  background: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const line = `height: 2px; width: 100%; background-color: var(--primaryColor); border-radius: 5px;`;

export const TopLine = styled.div`
  ${line}
`;
export const MiddleLine = styled.div`
  ${line}
  width: 80%;
`;
export const BottomLine = styled.div`
  ${line}
`;
