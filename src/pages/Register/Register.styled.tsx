import styled from "@emotion/styled";
import { mediaSizes } from "../../constants/mediaSizes";

export const Container = styled.section`
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: clamp(450px, 100vh - 60px, 800px);
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: clamp(450px, 100vh - 80px, 800px);
  }
`;
