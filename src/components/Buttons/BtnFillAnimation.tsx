import styled from "@emotion/styled";

export const BtnFillAnimation = styled.div`
  position: absolute;
  top: -100%;
  width: 100%;
  height: 100%;
  background-color: var(--howerColor);
  z-index: -1;

  transition: top 200ms linear;
`;
