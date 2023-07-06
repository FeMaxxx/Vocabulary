import { FC, ReactNode } from "react";

interface mainProps {
  children: ReactNode;
}

export const Main: FC<mainProps> = ({ children }) => {
  return <div>{children}</div>;
};
