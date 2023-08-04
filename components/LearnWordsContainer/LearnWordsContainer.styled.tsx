import styled from "@emotion/styled";
import { mediaSizes } from "@/constants";
import { useSvg } from "@/hooks/useSvg";

const { RightArrow } = useSvg;

export const WordsContainer = styled.div`
  margin-top: 30px;
  width: min(600px, 100%);

  @media screen and (min-width: ${mediaSizes.mobile}) {
    padding: 15px;
    backdrop-filter: blur(4px);
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }

  @media screen and (min-width: ${mediaSizes.smallDesktop}) {
    margin-top: 50px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;

  color: var(--primaryColor);
`;

export const WordsList = styled.ul`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 18px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primaryColor);
  }
`;

export const Word = styled.p`
  width: 100%;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Time = styled.p`
  text-align: center;
  width: 110px;
  flex-shrink: 0;
  font-size: 16px;
  padding: 5px 0px;
  border-radius: 25px;
  background-color: rgba(191, 28, 28, 0.3);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;

  border: 1px solid var(--primaryColor);
  border-radius: 100px;

  background: none;
`;

export const ButtonIcon = styled(RightArrow)`
  width: 24px;
  height: 20px;

  fill: var(--greenColor);
`;
