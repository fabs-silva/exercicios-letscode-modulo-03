import { useState } from "react";
import { RegularButton } from "../../components/Button";
import { GameTiles } from "./GameTiles";
import { GameWinner } from "./GameWinner";
import { getWinner } from "./getWinner";
import { GameArea, GameContainer, GameTitle } from "./styles";
//import {FiX, FiCircle} from 'react-icons/fi';
//import { IconType } from "react-icons";

export function TicTacToe() {
  const [tiles, setTiles] = useState<Array<string | null>>(
    new Array(9).fill(null)
  );
  const [isXPlaying, setIsXPlaying] = useState<boolean>(true);

  const handleClickTiles = (i: number) => {
    const allTiles = tiles.slice();
    if (getWinner(allTiles) || allTiles[i]) {
      return;
    }
    setIsXPlaying(!isXPlaying);
    allTiles[i] = isXPlaying ? "X" : "O";
    setTiles(allTiles);
  };

  const resetGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTiles(new Array(9).fill(null));
  };

  const isBoardEmpty = tiles.every((element) => element === null);

  const winner = getWinner(tiles);

  return (
    <GameContainer>
      <GameTitle>Jogo da Velha</GameTitle>
      {winner ? <GameWinner winner={winner} /> : null}
      <GameArea>
        <GameTiles value={tiles[0]} onClick={() => handleClickTiles(0)} />
        <GameTiles value={tiles[1]} onClick={() => handleClickTiles(1)} />
        <GameTiles value={tiles[2]} onClick={() => handleClickTiles(2)} />
        <GameTiles value={tiles[3]} onClick={() => handleClickTiles(3)} />
        <GameTiles value={tiles[4]} onClick={() => handleClickTiles(4)} />
        <GameTiles value={tiles[5]} onClick={() => handleClickTiles(5)} />
        <GameTiles value={tiles[6]} onClick={() => handleClickTiles(6)} />
        <GameTiles value={tiles[7]} onClick={() => handleClickTiles(7)} />
        <GameTiles value={tiles[8]} onClick={() => handleClickTiles(8)} />
      </GameArea>
      <RegularButton onClick={resetGame} disabled={isBoardEmpty}>
        Resetar
      </RegularButton>
    </GameContainer>
  );
}
