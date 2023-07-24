import { FC, ReactNode } from "react";
import { Container } from "./Main.styled";

interface mainProps {
  children: ReactNode;
}

export const Main: FC<mainProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
