import { Component } from "react";
import styled from "styled-components";
import { variables } from "../../Theme/Theme";

const { colors } = variables;

const GameWinnerContainer = styled.p`
  color: ${colors.mainGreen};
`;

type WinnerProps = {
  winner: string;
};

type WinnerStates = {};

export class GameWinner extends Component<WinnerProps, WinnerStates> {
  constructor(props: WinnerProps | Readonly<WinnerProps>) {
    super(props);
  }
  render() {
    return (
      <GameWinnerContainer>
        O vencedor foi o jogador {this.props.winner}
      </GameWinnerContainer>
    );
  }
}
