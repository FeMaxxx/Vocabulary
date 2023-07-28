import { FC, ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import localFont from "next/font/local";
import { Main } from "@/components/Main";
import {
  LayoutContainer,
  Container,
  Header,
  Logo,
  LogoIcon,
  SiteName,
} from "./Layout.styled";

interface LayoutProps {
  children: ReactNode;
}

const myFont = localFont({
  src: "../../fonts/Quicksand-Bold.ttf",
  display: "swap",
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer className={myFont.className}>
      <Header>
        <Container>
          <Logo href={"/"}>
            <LogoIcon />
            <SiteName>Vocabulary</SiteName>
          </Logo>

          <Navigation />
        </Container>
      </Header>

      <Main>{children}</Main>
    </LayoutContainer>
  );
};

export default Layout;
