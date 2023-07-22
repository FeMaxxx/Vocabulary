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

  span::first-letter {
    text-transform: uppercase;
  }

  transition: background var(--animation);

  &.active {
    color: var(--primaryDisabledColor);
    border-color: var(--primaryDisabledColor);

    &:hover,
    &:focus {
      cursor: default;
      background: none;
    }
  }

  &.standart {
    &:hover,
    &:focus {
      background: var(--howerColor);
    }
  }
`;
