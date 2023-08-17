import { ChangeEvent, FC, useState, MouseEvent } from "react";
import { BtnFillAnimation } from "@/components/Buttons";
import { useWordsState } from "@/wordsState";
import { VocabularyWordsList } from "@/components/VocabularyWordsList";
import { CheckRandomWord } from "@/components/CheckRandomWord";
import { Loader } from "@/components/Loader";
import {
  Container,
  Wrap,
  Background,
  Title,
  Input,
  ButtonsContainer,
  Button,
  LoaderWrap,
  InfoContainer,
  Vocary,
  Text,
} from "./Vocabulary.styled";

const Vocabulary: FC = () => {
  const filterValue = localStorage.getItem("filter");
  const [searchInput, setSearchInput] = useState("");
  const [filterBtn, setFilterBtn] = useState(filterValue ? filterValue : "A");
  const { words, loading } = useWordsState();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleFilterButtons = (e: MouseEvent<HTMLButtonElement>) => {
    setFilterBtn(e.currentTarget.name);
    localStorage.setItem("filter", e.currentTarget.name);
  };

  const filteredWords = () => {
    const filteredWords = words?.vocabulary.filter(
      word =>
        word.word.toLowerCase().includes(searchInput.toLowerCase()) ||
        word.translate.some(word =>
          word.toLowerCase().includes(searchInput.toLowerCase())
        )
    );

    if (filterBtn === "A") {
      return filteredWords?.sort((a, b) => a.word.localeCompare(b.word));
    }
    if (filterBtn === "Z") {
      return filteredWords?.sort((a, b) => b.word.localeCompare(a.word));
    }
    if (filterBtn === "Last") {
      return filteredWords?.sort((a, b) => {
        const dateA = new Date(a.addedAt);
        const dateB = new Date(b.addedAt);

        return dateB.getTime() - dateA.getTime();
      });
    }
    if (filterBtn === "First") {
      return filteredWords?.sort((a, b) => {
        const dateA = new Date(a.addedAt);
        const dateB = new Date(b.addedAt);

        return dateA.getTime() - dateB.getTime();
      });
    }
  };

  const vocabularyWords = filteredWords();

  return (
    <>
      {words && words?.vocabulary.length > 0 && (
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
                <Button
                  onClick={handleFilterButtons}
                  className={filterBtn === "A" ? "active" : ""}
                  name="A"
                >
                  A - Z
                  <BtnFillAnimation />
                </Button>
                <Button
                  onClick={handleFilterButtons}
                  className={filterBtn === "Z" ? "active" : ""}
                  name="Z"
                >
                  Z - A
                  <BtnFillAnimation />
                </Button>
                <Button
                  onClick={handleFilterButtons}
                  className={filterBtn === "Last" ? "active" : ""}
                  name="Last"
                >
                  Last add
                  <BtnFillAnimation />
                </Button>
                <Button
                  onClick={handleFilterButtons}
                  className={filterBtn === "First" ? "active" : ""}
                  name="First"
                >
                  First add
                  <BtnFillAnimation />
                </Button>
              </ButtonsContainer>
            </Background>
          </Wrap>

          <CheckRandomWord wordsCount={words?.vocabulary.length as number} />

          {loading && (
            <LoaderWrap>
              <Loader size={150} />
            </LoaderWrap>
          )}
          {!loading && vocabularyWords?.length !== 0 && (
            <VocabularyWordsList
              words={vocabularyWords ? vocabularyWords : null}
            />
          )}
        </Container>
      )}

      {words?.vocabulary.length === 0 && (
        <InfoContainer>
          <Text>Learn at least one word to open this page</Text>
          <Vocary />
        </InfoContainer>
      )}
    </>
  );
};

export default Vocabulary;
