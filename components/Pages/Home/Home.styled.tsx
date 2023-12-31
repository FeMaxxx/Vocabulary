import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryHomeSmile } = useSvg;

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: clamp(450px, 100vh - 80px, 800px);
    align-items: start;

    padding-left: min(3vw, 55px);
    padding-top: min(12vh, 130px);
    gap: 35px;
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 90vw;
  width: 100%;
  font-size: min(5vw, 22px);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: min(4.2vw, 24px);
    width: min(90vw, 600px);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 26px;
    width: min(90vw, 940px);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    text-align: start;
    font-size: min(2.5vw, 28px);
    width: 58vw;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
    width: min(62vw, 1200px);
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
    font-size: 32px;
    max-width: 1250px;
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    justify-content: start;
  }

  @media screen and (min-width: ${mediaSizes.largeDesktop}) {
    top: 400px;
    gap: 45px;
  }
`;

export const Vocary = styled(VocaryHomeSmile)`
  width: 60vw;
  height: 60vw;
  fill: var(--primaryColor);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 330px;
    height: 330px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    position: absolute;
    top: 50%;
    width: 370px;
    height: 370px;
    right: 0;

    transform: translate(0, -50%);

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
