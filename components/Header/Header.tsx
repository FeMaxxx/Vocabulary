import { FC } from "react";
import {
  Container,
  HeaderContainer,
  Logo,
  LogoIcon,
  SiteName,
} from "./Header.styled";
import { Navigation } from "../Navigation";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo href={"/"}>
          <LogoIcon />
          <SiteName>Vocabulary</SiteName>
        </Logo>

        <Navigation />
      </Container>
    </HeaderContainer>
  );
};
