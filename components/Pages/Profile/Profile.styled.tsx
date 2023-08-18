import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Container = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Email = styled.h2`
  padding: 10px;

  word-break: break-all;
  white-space: pre-wrap;

  border: 3px solid var(--primaryColor);
  border-radius: 100px;
  font-size: min(5.5vw, 18px);
  background-color: var(--howerColor);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    font-size: 28px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  margin-top: 30px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 20px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    margin-top: 50px;
    gap: 50px;
  }
`;
