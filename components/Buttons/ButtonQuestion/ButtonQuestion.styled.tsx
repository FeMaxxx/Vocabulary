import styled from "@emotion/styled";
import { useSvg } from "@/hooks/useSvg";

const { QuestionMark } = useSvg;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  border: 1px solid var(--whiteColor);
  border-radius: 100px;
  background: none;

  &:hover svg,
  &:focus-visible svg {
    /* fill: var(--primaryColor); */
  }

  &:hover div,
  &:focus-visible div {
    top: 0;
  }
`;

export const Icon = styled(QuestionMark)`
  transition: fill var(--animation);

  fill: var(--whiteColor);

  width: 8px;
  height: 12px;
`;
