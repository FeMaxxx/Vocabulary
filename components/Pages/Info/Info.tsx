import { FC } from "react";
import { Container, Vocary, ButtonsContainer, Text } from "./Info.styled";
import { ButtonText } from "@/components/Buttons";

const Info: FC = () => {
  return (
    <Container>
      <Vocary src={"/vocaryInfoSmile.svg"} alt="vocaryInfoSmile" />

      <Text>
        This site is designed to help you learn English words. You learn by
        repetition. To add a word to your vocabulary, you must successfully
        complete three quizzes on that word. After that, the word will be added
        to your vocabulary.
      </Text>
      <Text>
        In the vocabulary, when you have added 100+ words, you have the option
        to take a random word from the vocabulary and see if you know it. If you
        answer incorrectly, the word is removed from the vocabulary and moved to
        a page where you can learn it again.
      </Text>
      <Text>Register or login to your account to start learning.</Text>

      <ButtonsContainer>
        <ButtonText text="register" navigateTo="/register" />
        <ButtonText text="log-in" navigateTo="/login" />
      </ButtonsContainer>
    </Container>
  );
};

export default Info;
