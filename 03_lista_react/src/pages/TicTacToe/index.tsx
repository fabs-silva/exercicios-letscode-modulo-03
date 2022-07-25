import React, { Component } from 'react';
import { RegularButton } from '../../components/Button';
import { GameTiles } from './GameTiles';
import { GameWinner } from './GameWinner';
import { getWinner } from './getWinner';
import { GameArea, GameContainer, GameTitle } from './styles';

type GameProps = {};

type GameStates = {
  tiles: Array<string | null>;
  isXPlaying: boolean;
};

export class TicTacToe extends Component<GameProps, GameStates> {
  constructor(props: GameProps | Readonly<GameProps>) {
    super(props);

    this.state = {
      tiles: new Array(9).fill(null),
      isXPlaying: true,
    };

    this.handleClickTiles = this.handleClickTiles.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleClickTiles = (i: number) => {
    const allTiles = this.state.tiles.slice();
    if (getWinner(allTiles) || allTiles[i]) {
      return;
    }
    this.setState({ isXPlaying: !this.state.isXPlaying });
    allTiles[i] = this.state.isXPlaying ? 'X' : 'O';
    this.setState({ tiles: allTiles });
  };

  resetGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({ tiles: new Array(9).fill(null), isXPlaying: true });
  };

  render() {
    const winner = getWinner(this.state.tiles);
    const isBoardEmpty = this.state.tiles.every((element) => element === null);

    return (
      <GameContainer>
        <GameTitle>Jogo da Velha</GameTitle>
        {winner ? <GameWinner winner={winner} /> : null}
        <GameArea>
          <GameTiles
            value={this.state.tiles[0]}
            onClick={() => this.handleClickTiles(0)}
          />
          <GameTiles
            value={this.state.tiles[1]}
            onClick={() => this.handleClickTiles(1)}
          />
          <GameTiles
            value={this.state.tiles[2]}
            onClick={() => this.handleClickTiles(2)}
          />
          <GameTiles
            value={this.state.tiles[3]}
            onClick={() => this.handleClickTiles(3)}
          />
          <GameTiles
            value={this.state.tiles[4]}
            onClick={() => this.handleClickTiles(4)}
          />
          <GameTiles
            value={this.state.tiles[5]}
            onClick={() => this.handleClickTiles(5)}
          />
          <GameTiles
            value={this.state.tiles[6]}
            onClick={() => this.handleClickTiles(6)}
          />
          <GameTiles
            value={this.state.tiles[7]}
            onClick={() => this.handleClickTiles(7)}
          />
          <GameTiles
            value={this.state.tiles[8]}
            onClick={() => this.handleClickTiles(8)}
          />
        </GameArea>
        <RegularButton onClick={this.resetGame} disabled={isBoardEmpty}>
          Resetar
        </RegularButton>
      </GameContainer>
    );
  }
}
