import { FC } from "react";
import { Container, Icon } from "./Loader.styled";

interface LoaderProps {
  size: number;
}

export const Loader: FC<LoaderProps> = ({ size }) => {
  return (
    <Container>
      <Icon style={{ width: size, height: size }}></Icon>
    </Container>
  );
};
