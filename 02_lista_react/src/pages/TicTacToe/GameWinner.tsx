import styled from "styled-components";
import { variables } from "../../Theme/Theme";

const { colors } = variables;

const GameWinnerContainer = styled.p`
  color: ${colors.mainGreen};
`;

export function GameWinner(props: { winner: string }) {
  return (
    <GameWinnerContainer>
      {" "}
      O vencedor foi o jogador {props.winner}
    </GameWinnerContainer>
  );
}
