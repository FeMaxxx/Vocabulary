import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Container = styled.main`
  padding-left: min(3vw, 55px);
  padding-right: min(3vw, 55px);

  max-width: ${mediaSizes.largeDesktop};
  width: 100%;
  margin: 0 auto;
`;
