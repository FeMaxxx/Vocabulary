import styled from "@emotion/styled";
import { useSvg } from "@/hooks/useSvg";

const { Cross } = useSvg;

export const Button = styled.button`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  border: 2px solid var(--primaryColor);
  border-radius: 100px;
  background: none;

  &:hover svg,
  &:focus-visible svg {
    fill: var(--whiteColor);
  }

  &:hover div,
  &:focus-visible div {
    top: 0;
  }
`;

export const Icon = styled(Cross)`
  fill: var(--primaryColor);

  width: 16px;
  height: 16px;

  transition: fill var(--animation);
`;
