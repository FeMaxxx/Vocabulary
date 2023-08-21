import { FC } from "react";
import { EnglishLevelScale } from "@/components/EnglishLevelScale";
import { Statistics } from "@/components/Statistics";
import { Achievements } from "@/components/Achievements";
import { useGlobalState } from "@/globalState";
import { useStatsState } from "@/statsState";
import { Container, EmailContainer, Email, Wrap } from "./Profile.styled";

const Profile: FC = () => {
  const { userEmail } = useGlobalState();
  const { stats } = useStatsState();

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
