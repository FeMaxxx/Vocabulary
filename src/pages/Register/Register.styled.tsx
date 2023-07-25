import styled from "@emotion/styled";
import { useSvg } from "../../hooks/useSvg";
import { mediaSizes } from "../../constants/mediaSizes";

const { VocaryEye, VocaryMouth } = useSvg;

export const Container = styled.section`
  position: relative;

  overflow: hidden;

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    height: clamp(450px, 100vh - 80px, 800px);
  }
`;

export const VocaryHead = styled.div`
  overflow: hidden;
  position: absolute;
  width: 60px;
  height: 60px;
  border: 3px solid var(--primaryColor);
  border-radius: 15px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Eye =
  "position: absolute;stroke: var(--primaryColor); top: 13px; width: 12px; height: 12px; ";

export const EyeLeft = styled(VocaryEye)`
  ${Eye}
  left: 9px;
`;

export const EyeRight = styled(VocaryEye)`
  ${Eye}
  right: 9px;
`;

export const Mouth = styled(VocaryMouth)`
  fill: var(--primaryColor);
  position: absolute;
  bottom: 13px;
  left: 50%;
  width: 16px;
  height: 6px;

  transform: translate(-50%, 0);
`;

export const Fill = styled.div`
  width: 100%;
  height: 100%;
`;
