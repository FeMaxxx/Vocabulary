import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { Vocary404 } = useSvg;

export const Container = styled.section`
  position: relative;
  min-height: 300px;
  height: calc(100vh - 60px);

  @media screen and (min-width: ${mediaSizes.mobile}) {
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: clamp(450px, 100vh - 80px, 800px);
  }
`;

export const Vocary = styled(Vocary404)`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 60vw;
  height: 60vw;
  fill: var(--primaryColor);

  transform: translate(-50%, -50%);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 330px;
    height: 330px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    width: 370px;
    height: 370px;

    animation: vocaryFly 3s infinite ease-in-out;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
    width: 390px;
    height: 390px;
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
    width: 430px;
    height: 430px;
  }
`;
