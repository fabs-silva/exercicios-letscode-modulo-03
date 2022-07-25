import React, { Component } from "react";
import styled from "styled-components";
import { variables } from "../../Theme/Theme";

const { colors } = variables;

type TileProps = {
  value: string | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type TileStates = {};

const GameTilesContainer = styled.button`
  border-radius: 0;
  border: 2px solid ${colors.darkGray};
`;

export class GameTiles extends Component<TileProps, TileStates> {
  constructor(props: TileProps | Readonly<TileProps>) {
    super(props);
  }
  render() {
    return (
      <GameTilesContainer onClick={this.props.onClick}>
        {this.props.value}
      </GameTilesContainer>
    );
  }
}
