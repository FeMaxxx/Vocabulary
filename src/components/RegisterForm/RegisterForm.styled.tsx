import styled from "@emotion/styled";

export const Form = styled.form`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  color: var(--primaryColor);
  padding-top: 50px;

  transform: translate(-50%, -50%);

  width: 420px;
  height: 420px;
  font-size: 22px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:first-of-type {
    margin-bottom: 50px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--primaryColor);
  }

  input:-internal-autofill-selected {
    appearance: none;
    background-image: none !important;
    background-color: none !important;
    color: white !important;
  }
`;

export const Input = styled.input`
  font-size: 20px;
  background: none;
  padding: 0px 50px;
  height: 50px;
  width: 100%;
  color: var(--textColor);

  &::placeholder {
    color: rgba(255, 183, 75, 0.2);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const SubmitBtn = styled.button`
  position: relative;
  background: rgba(255, 183, 75, 0.1);
  border-bottom-left-radius: 78px;
  border-bottom-right-radius: 78px;
  color: var(--primaryColor);
  overflow: hidden;

  width: 378px;
  height: 144px;
  font-size: 30px;
  opacity: 0;

  transition: color var(--animation);

  &:hover {
    color: var(--textColor);
  }

  &:hover div {
    top: 0;
  }
`;

export const BtnFill = styled.div`
  position: absolute;
  top: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 183, 75, 0.6);
  z-index: -1;

  transition: top 200ms linear;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
  width: 378px;
  height: 144px;
  color: var(--textColor);
`;
