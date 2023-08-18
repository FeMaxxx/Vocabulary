import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(2px);
    border-radius: 10px;
  }
`;

export const Title = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;
  height: 60px;

  font-size: 24px;
  color: var(--primaryColor);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primaryColor);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 30px;
  }
`;
