import styled from "styled-components";
import { variables } from "../../Theme/Theme";

const { colors, fontSizes } = variables;

const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const GameArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-template-rows: repeat(3, 120px);
  justify-content: center;
  align-content: center;
`;

const GameTitle = styled.h2`
  font-size: ${fontSizes.lg};
  color: ${colors.mainBlue};
  font-weight: 600;
`;

export { GameContainer, GameArea, GameTitle };
