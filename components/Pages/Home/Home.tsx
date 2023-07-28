import { FC } from "react";
import { Container, Text, ButtonsContainer, Vocary } from "./Home.styled";
import { ButtonText } from "@/components/Buttons";

const isLogin = false;

const Home: FC = () => {
  return (
    <Container>
      <Text>
        {isLogin
          ? " I'm glad to see you here. It's a great day to learn English words, isn't it? 😁"
          : "Hello, I am glad to see you here, I am Vocary and you have come to myterritory, the territory of learning English words😁, if you want I willtell you more, or you can register and start learning right away."}
      </Text>

      <Vocary />

      {isLogin ? (
        <ButtonsContainer>
          <ButtonText text="start learning" navigateTo="/info" />
          <ButtonText text="go to the dictionary" navigateTo="/register" />
          <ButtonText text="go to profile" navigateTo="/login" />
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <ButtonText text="tell my more" navigateTo="/info" />
          <ButtonText text="register" navigateTo="/register" />
          <ButtonText text="log-in" navigateTo="/login" />
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default Home;
