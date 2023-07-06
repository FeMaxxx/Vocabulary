import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 15px;

  border: 2px solid var(--primaryColor);
  border-radius: 20px;

  color: var(--primaryColor);

  background: none;

  font-size: 18px;

  transition: background var(--animation);

  span::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background: var(--howerColor);
  }
`;

export const ActiveButton = styled(Button)`
  color: var(--primaryDisabledColor);
  border-color: var(--primaryDisabledColor);

  &:hover,
  &:focus {
    cursor: default;
    background: none;
  }
`;
