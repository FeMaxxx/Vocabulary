import { FC, MouseEvent } from "react";
import { Navigation } from "../Navigation";
import { useRouter } from "next/router";
import {
  Container,
  HeaderContainer,
  Logo,
  LogoIcon,
  SiteName,
} from "./Header.styled";

export const Header: FC = () => {
  const router = useRouter();

  const handleLogo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo onClick={handleLogo}>
          <LogoIcon />
          <SiteName>Vocabulary</SiteName>
        </Logo>

        <Navigation />
      </Container>
    </HeaderContainer>
  );
};
