import styled from "@emotion/styled";
import { ReactComponent as LogoI } from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 0 3vw;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primaryColor);
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoIcon = styled(LogoI)`
  fill: var(--primaryColor);
  width: 60px;
  height: 60px;
`;

export const SiteName = styled.h1`
  color: var(--primaryColor);
  font-size: 44px;
  font-weight: 700;
`;
