import { FC } from "react";
import { EnglishLevelScale } from "@/components/EnglishLevelScale";
import { Statistics } from "@/components/Statistics";
import { Achievements } from "@/components/Achievements";
import { useGlobalState } from "@/globalState";
import { StatsI } from "@/types/stats";
import { Container, EmailContainer, Email, Wrap } from "./Profile.styled";

interface Props {
  stats: StatsI | null;
}

const Profile: FC<Props> = ({ stats }) => {
  const { userEmail } = useGlobalState();

  return (
    <Container>
      <EmailContainer>
        <Email>{userEmail}</Email>
      </EmailContainer>
      <EnglishLevelScale
        wordsInVocabilary={stats?.wordsInVocabulary as number}
      />

      <Wrap>
        <Statistics stats={stats} />
        <Achievements />
      </Wrap>
    </Container>
  );
};

export default Profile;
