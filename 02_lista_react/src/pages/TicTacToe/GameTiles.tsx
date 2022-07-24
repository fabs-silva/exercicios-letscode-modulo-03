import styled from "styled-components";
import { variables } from "../../Theme/Theme";

const { colors } = variables;

interface TileProps {
  value: string | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const GameTilesContainer = styled.button`
  border-radius: 0;
  border: 2px solid ${colors.darkGray};
`;

export function GameTiles({ value, onClick }: TileProps) {
  return <GameTilesContainer onClick={onClick}>{value}</GameTilesContainer>;
}
