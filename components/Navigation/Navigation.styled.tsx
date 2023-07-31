import styled from "@emotion/styled";
import { useSvg } from "@/hooks/useSvg";

const { BurgerMenu, Logout } = useSvg;

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
  background: none;

  &:hover svg,
  &:focus svg {
    fill: var(--whiteColor);
  }
`;

export const LogoutIcon = styled(Logout)`
  fill: var(--primaryColor);
  width: 25px;
  height: 30px;

  transition: fill var(--animation);
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
