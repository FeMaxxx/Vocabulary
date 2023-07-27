import { FC } from "react";
import { Authentication } from "../../components/Authentication";
import { Container } from "./Register.styled";

const Register: FC = () => {
  return (
    <Container>
      <Authentication forAuth="register" />
    </Container>
  );
};

export default Register;
