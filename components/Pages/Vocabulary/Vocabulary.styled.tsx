import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryVocabularySmile } = useSvg;

export const Container = styled.section`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  max-width: 450px;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(2px);
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: var(--primaryColor);
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  padding: 0 10px;
  color: var(--textColor);
  font-size: 14px;
  text-align: center;
  font-family: "Manrope";

  &::placeholder {
    color: rgba(255, 183, 75, 0.3);
    font-family: var(--quicksand-font);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    &::placeholder {
      color: rgba(255, 183, 75, 0.2);
    }
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 16px;
    height: 45px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-wrap: nowrap;
  }
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 0 12px;
  height: 40px;
  white-space: nowrap;

  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  font-size: 14px;
  color: var(--primaryColor);

  transition: color var(--animation);

  &.active {
    cursor: default;
    color: var(--textColor);

    & div {
      top: 0;
    }
  }

  &:hover,
  &:focus-visible {
    color: var(--textColor);
  }

  &:hover div,
  &:focus-visible div {
    top: 0;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 16px;
    height: 45px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 50px;
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

export const Vocary = styled(VocaryVocabularySmile)`
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
    left: 0;

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

export const Text = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 28px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 36px;
  }

  @media screen and (min-width: ${mediaSizes.middleDesktop}) {
    font-size: 40px;
  }
`;
