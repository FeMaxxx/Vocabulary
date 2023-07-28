import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { Home, Info } = useSvg;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  border: 2px solid var(--primaryColor);
  border-radius: 100%;
  background: none;
  fill: var(--primaryColor);

  transition: fill var(--animation);

  &:hover,
  &:focus {
    fill: var(--whiteColor);
  }

  &:hover div,
  &:focus div {
    top: 0;
  }

  &.active {
    fill: var(--whiteColor);

    &:hover,
    &:focus {
      cursor: default;
    }

    & div {
      top: 0;
    }
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: 48px;
    width: 48px;
  }
`;

export const InfoIcon = styled(Info)`
  width: 10px;
  height: 22px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 12px;
    height: 28px;
  }
`;

export const HomeIcon = styled(Home)`
  width: 22px;
  height: 22px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 28px;
    height: 28px;
  }
`;
