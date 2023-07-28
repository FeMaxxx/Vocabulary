import { FC } from "react";
import { Container, Text, ButtonsContainer, Vocary } from "./Home.styled";
import { ButtonText } from "@/components/Buttons";

const Home: FC = () => {
  return (
    <Container>
      <Text>
        Hello, I am glad to see you here, I am Vocary and you have come to my
        territory, the territory of learning English words😁, if you want I will
        tell you more, or you can register and start learning right away.
      </Text>

      <Vocary
        src="/vocaryHomeSmile.svg"
        alt="VocaryHomeSmile"
        width={300}
        height={300}
        priority="true"
      />

      <ButtonsContainer>
        <ButtonText text="tell my more" navigateTo="/info" />
        <ButtonText text="register" navigateTo="/register" />
        <ButtonText text="log-in" navigateTo="/login" />
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
