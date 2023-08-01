import { FC } from "react";
import { Container, Text, ButtonsContainer, Vocary } from "./Home.styled";
import { ButtonText } from "@/components/Buttons";
import { useGlobalState } from "@/globalState";

const Home: FC = () => {
  const { isLogedIn } = useGlobalState();

  return (
    <Container>
      <Text>
        {isLogedIn === true &&
          " I'm glad to see you here. It's a great day to learn English words, isn't it? 😁"}
        {isLogedIn === false &&
          "Hello, I am glad to see you here, I am Vocary and you have come to myterritory, the territory of learning English words😁, if you want I willtell you more, or you can register and start learning right away."}
      </Text>

      <Vocary />

      {isLogedIn ? (
        <ButtonsContainer>
          <ButtonText text="start learning" navigateTo="/learning" />
          <ButtonText text="go to the vocabulary" navigateTo="/vocabulary" />
          <ButtonText text="go to profile" navigateTo="/profile" />
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
