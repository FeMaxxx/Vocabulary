import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useSvg } from "../../hooks/useSvg";
import { mediaSizes } from "../../constants/mediaSizes";

const { Logo: LogoI } = useSvg;

export const Layout = styled.section`
  width: 100%;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primaryColor);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: 80px;

    &::after {
      height: 3px;
    }
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
  }
`;

export const Container = styled.div`
  padding-left: min(3vw, 55px);
  padding-right: min(3vw, 55px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${mediaSizes.largeDesktop};
  width: 100%;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoIcon = styled(LogoI)`
  display: none;

  @media screen and (min-width: 320px) {
    display: block;
    fill: var(--primaryColor);
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 60px;
    height: 60px;
  }
`;

export const SiteName = styled.h1`
  color: var(--primaryColor);
  font-size: 34px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 44px;
  }
`;
