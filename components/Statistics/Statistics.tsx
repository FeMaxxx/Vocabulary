import { FC } from "react";
import { useStatsState } from "@/statsState";
import { Loader } from "../Loader";
import { Container, Title, List, LoaderWrap } from "./Statistics.styled";

export const Statistics: FC = () => {
  const { stats, loading } = useStatsState();

  return (
    <Container>
      <Title>Statistics</Title>

      {loading && (
        <LoaderWrap>
          <Loader size={150} />
        </LoaderWrap>
      )}

      {!loading && stats && (
        <List>
          <li>
            Words in the vocabulary:<span> {stats?.wordsInVocabulary}</span>
          </li>
          <li>
            Words in the learning process:
            <span> {stats?.wordsInLearningProcess}</span>
          </li>
          <li>
            Total word count:<span> {stats?.totalWordCount}</span>
          </li>
          <li>
            Successful word confirmation:
            <span> {stats?.successfulWordConfirmation}</span>
          </li>
          <li>
            Failed word confirmation:
            <span> {stats?.failedWordConfirmation}</span>
          </li>
          <li>
            Successful confirm knowledge of a random word from the vocabulary:
            <span> {stats?.successfulRandomWordConfirmation}</span>
          </li>
          <li>
            Failed to confirm knowledge of a random word from the vocabulary:
            <span> {stats?.failedRandomWordConfirmation}</span>
          </li>
        </List>
      )}
    </Container>
  );
};
