import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);

  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
    animation: midalsAnimation var(--animation);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;

  width: min(90vw, 550px);

  border: 3px solid var(--primaryColor);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 22px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;

export const Input = styled.input`
  margin: 0 auto;
  padding: 0px 10px;
  height: 40px;
  width: 180px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;

  background: none;
  color: var(--textColor);
  border: 1px solid var(--primaryColor);
  border-radius: 10px;

  &::placeholder {
    color: rgba(255, 183, 75, 0.4);
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100svh;
`;

export const ErrorMessage = styled(Text)`
  color: var(--redColor);
`;
