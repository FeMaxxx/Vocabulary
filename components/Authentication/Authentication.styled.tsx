import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryEye, VocaryMouth, Google } = useSvg;

export const VocaryHead = styled.div`
  display: none;
  backdrop-filter: blur(2px);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: block;
    overflow: hidden;
    position: absolute;
    width: 420px;
    height: 420px;
    border: 21px solid var(--primaryColor);
    border-radius: 100px;

    top: -150vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Eye =
  "position: absolute; stroke: var(--primaryColor); top: 93px; width: 86px; height: 86px;";

export const EyeLeft = styled(VocaryEye)`
  ${Eye}
  left: 53px;
`;

export const EyeRight = styled(VocaryEye)`
  ${Eye}
  right: 53px;
`;

export const Mouth = styled(VocaryMouth)`
  fill: var(--primaryColor);
  position: absolute;
  bottom: 92px;
  left: 50%;
  width: 115px;
  height: 46px;

  transform: translate(-50%, 0);
`;

export const Fill = styled.div`
  width: 100%;
  height: 100%;
`;

export const GoogleBtn = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 50px;

  border: 3px solid var(--primaryColor);
  border-radius: 100px;
  background: none;
  width: 70px;
  height: 70px;

  &:hover div,
  &:focus-visible div {
    top: 0;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    opacity: 0;
    position: absolute;
    top: min(100vh - 250px, 570px);
    left: calc(50% + 230px);

    width: 90px;
    height: 90px;
  }
`;

export const GoogleIcon = styled(Google)`
  width: 60px;
  height: 60px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 80px;
    height: 80px;
  }
`;
