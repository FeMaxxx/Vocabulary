import { FC } from "react";
import { Load } from "./Loader.styled";

interface LoaderProps {
  size: number;
}

export const Loader: FC<LoaderProps> = ({ size }) => {
  return <Load style={{ width: size, height: size }} />;
};
