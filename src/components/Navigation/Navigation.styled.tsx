import styled from "@emotion/styled";
import { useSvg } from "../../hooks/useSvg";
const { BurgerMenu } = useSvg;

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

export const BurgerBtn = styled.button`
  background: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerBtnIcon = styled(BurgerMenu)``;
