import styled from "@emotion/styled";
import { mediaSizes } from "../../constants/mediaSizes";

export const Container = styled.main`
  padding: min(3vw, 55px);

  max-width: ${mediaSizes.largeDesktop};
  width: 100%;
  margin: 0 auto;
`;
