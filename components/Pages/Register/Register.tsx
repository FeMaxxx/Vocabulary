import { FC } from "react";
import { Authentication } from "@/components/Authentication";
import { Container } from "./Register.styled";

const Register: FC = () => {
  return (
    <Container>
      <Authentication />
    </Container>
  );
};

export default Register;
