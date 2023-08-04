import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 30px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 50px;
    height: clamp(450px, 100vh - 60px, 800px);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: clamp(450px, 100vh - 80px, 800px);
  }
`;

export const LvlButtonsContainer = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  max-width: 600px;

  color: var(--primaryColor);

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    display: none;
  }
`;

export const LvlButton = styled.button`
  width: 60px;
  height: 30px;

  font-size: 18px;
  background: none;
  border: 2px solid var(--primaryColor);
  border-radius: 10px;
`;
