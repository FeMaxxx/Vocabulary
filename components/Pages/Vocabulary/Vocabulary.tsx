import { ChangeEvent, FC, useState } from "react";
import { BtnFillAnimation } from "@/components/Buttons";
import { useWordsState } from "@/wordsState/wordsState";
import {
  Container,
  Wrap,
  Background,
  Title,
  Input,
  ButtonsContainer,
  Button,
  WordsList,
  WordsListItem,
  WordBtn,
  Word,
  Translation,
} from "./Vocabulary.styled";

const Vocabulary: FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const { words } = useWordsState();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <Container>
      <Wrap>
        <Background>
          <Title>Search for a word</Title>

          <Input
            onChange={handleSearchInput}
            type="text"
            placeholder="Vocabulary"
            value={searchInput}
          />
        </Background>
        <Background>
          <Title>Sorting</Title>

          <ButtonsContainer>
            <Button>
              A - Z
              <BtnFillAnimation />
            </Button>
            <Button>
              Z - A
              <BtnFillAnimation />
            </Button>
            <Button>
              Last add
              <BtnFillAnimation />
            </Button>
            <Button>
              First add
              <BtnFillAnimation />
            </Button>
          </ButtonsContainer>
        </Background>
      </Wrap>

      <WordsList>
        {words?.vocabulary.map(word => {
          return (
            <WordsListItem key={word._id}>
              <WordBtn>
                <Word>{word.word}</Word>-
                <Translation>
                  {word.translate?.map((word, index, arr) => {
                    return (
                      <p key={index}>
                        {word}
                        {arr.length - 1 === index ? "" : ", "}
                      </p>
                    );
                  })}
                </Translation>
                <BtnFillAnimation />
              </WordBtn>
            </WordsListItem>
          );
        })}
      </WordsList>
    </Container>
  );
};

export default Vocabulary;
