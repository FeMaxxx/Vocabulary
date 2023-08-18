import { FC } from "react";
import { StatsI } from "@/types/stats";
import { Container, Title, List } from "./Statistics.styled";

interface Props {
  stats: StatsI | null;
}

export const Statistics: FC<Props> = ({ stats }) => {
  return (
    <Container>
      <Title>Statistics</Title>

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
          Failed word confirmation:<span> {stats?.failedWordConfirmation}</span>
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
    </Container>
  );
};
