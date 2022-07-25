import { Component } from 'react';
import styled from 'styled-components';
import { variables } from '../../Theme/Theme';

const { colors } = variables;

const GameWinnerContainer = styled.p`
  color: ${colors.mainGreen};
`;

type WinnerProps = {
  winner: string | null;
};

type WinnerStates = {};

export class GameWinner extends Component<WinnerProps, WinnerStates> {
  constructor(props: WinnerProps | Readonly<WinnerProps>) {
    super(props);
  }
  render() {
    console.log(this.props.winner);
    return (
      <GameWinnerContainer>
        O vencedor foi o jogador {this.props.winner}
      </GameWinnerContainer>
    );
  }
}
