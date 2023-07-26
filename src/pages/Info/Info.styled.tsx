import styled from "@emotion/styled";
import { useSvg } from "../../hooks/useSvg";
import { mediaSizes } from "../../constants/mediaSizes";

const { VocaryInfoSmile } = useSvg;

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  padding-top: 15px;
  padding-bottom: 15px;
  gap: 15px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 20px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: clamp(440px, 100vh - 80px, 800px);

    padding-top: min(12vh, 130px);
    padding-left: 390px;
    padding-right: min(3vw, 55px);
    padding-bottom: 30px;
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
    padding-left: 410px;
  }
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 22px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
    font-size: 28px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.mobile}) {
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    justify-content: start;
    margin-top: 15px;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
  }
`;

export const Vocary = styled(VocaryInfoSmile)`
  display: none;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    display: flex;
    position: absolute;
    top: 50%;
    left: 0;
    width: 350px;
    height: 350px;

    transform: translate(0, -50%);

    animation: vocaryFly 3s infinite ease-in-out;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
    width: 350px;
    height: 350px;
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
    width: 390px;
    height: 390px;
  }
`;
