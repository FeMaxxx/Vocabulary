import styled from "@emotion/styled";
import Link from "next/link";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { Logo: LogoI } = useSvg;

export const HeaderContainer = styled.header`
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

export const Logo = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  outline: none;
  background: none;

  &:hover h1,
  &:hover svg,
  &:focus-visible h1,
  &:focus-visible svg {
    fill: var(--whiteColor);
    color: var(--textColor);
  }
`;

export const LogoIcon = styled(LogoI)`
  display: none;
  width: 40px;
  height: 40px;

  transition: fill var(--animation);

  @media screen and (min-width: 320px) {
    display: block;
    fill: var(--primaryColor);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 60px;
    height: 60px;
  }
`;

export const SiteName = styled.h1`
  color: var(--primaryColor);
  font-size: 34px;

  transition: color var(--animation);

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 44px;
  }
`;
