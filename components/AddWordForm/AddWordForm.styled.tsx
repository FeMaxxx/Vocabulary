import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";

export const Form = styled.form`
  width: min(600px, 100%);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(4px);
    margin: 0 auto;
    border-radius: 10px;
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    gap: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  font-size: 18px;
  color: var(--primaryColor);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 250px;
  }
`;

export const Input = styled.input`
  height: 45px;
  background: none;
  border: 1px solid var(--primaryColor);
  border-radius: 10px;
  padding: 0 10px;
  color: var(--textColor);
  font-size: 16px;
  backdrop-filter: blur(4px);

  &::placeholder {
    color: rgba(255, 183, 75, 0.2);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    backdrop-filter: blur(0px);
    border: 2px solid var(--primaryColor);
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin-top: 30px;

  border: 2px solid var(--primaryColor);
  border-radius: 10px;
  background: none;
  backdrop-filter: blur(4px);
  color: var(--primaryColor);
  font-size: 24px;

  transition: color var(--animation);

  &:hover div,
  &:focus div {
    top: 0;
  }

  &:hover,
  &:focus {
    color: var(--textColor);
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    border: 3px solid var(--primaryColor);
  }
`;
