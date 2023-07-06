import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import {
  Container,
  Header,
  Logo,
  LogoIcon,
  SiteName,
} from "./SharedLayout.styled";

const SharedLayout: FC = () => {
  return (
    <Container>
      <Header>
        <Logo to={"/"}>
          <LogoIcon />
          <SiteName>Vocabulary</SiteName>
        </Logo>

        <Navigation />
      </Header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
