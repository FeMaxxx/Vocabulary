import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { VocaryVocabularySmile } = useSvg;

export const Container = styled.div`
  margin-top: 50px;
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  padding-right: 20px;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 440px;

  background-color: rgba(255, 183, 75, 0.2);
  border-radius: 20px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    justify-content: space-between;
  }
`;

export const Vocary = styled(VocaryVocabularySmile)`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  fill: var(--whiteColor);
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;

  & span {
    color: var(--primaryColor);
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    gap: 30px;
    padding: 15px;

    backdrop-filter: blur(2px);
    border: 1px solid rgba(191, 28, 28, 0.3);
    border-radius: 100px;
  }
`;
