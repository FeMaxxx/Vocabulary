import { FC } from "react";
import { Authentication } from "../../components/Authentication";
import { Container } from "./Login.styled";

const Login: FC = () => {
  return (
    <Container>
      <Authentication forAuth="login" />
    </Container>
  );
};

export default Login;
