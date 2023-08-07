import styled from "@emotion/styled";
import { useSvg } from "@/hooks/useSvg";

const { vocaryLoad } = useSvg;

export const Load = styled(vocaryLoad)`
  display: inline-block;
  width: 80px;
  height: 80px;
  animation: ldsCircle 3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  fill: var(--primaryColor);

  @keyframes ldsCircle {
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1000deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(2000deg);
    }
  }
`;
