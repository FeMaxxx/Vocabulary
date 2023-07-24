import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Main } from "../Main/Main";
import {
  Layout,
  Container,
  Header,
  Logo,
  LogoIcon,
  SiteName,
} from "./SharedLayout.styled";

const SharedLayout: FC = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <Logo to={"/"}>
            <LogoIcon />
            <SiteName>Vocabulary</SiteName>
          </Logo>

          <Navigation />
        </Container>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
};

export default SharedLayout;
