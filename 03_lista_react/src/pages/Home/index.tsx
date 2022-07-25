import { Component } from "react";
import styled from "styled-components";
import { variables } from "../../Theme/Theme";

const { fontSizes } = variables;

const HomeContainer = styled.section`
  font-size: ${fontSizes.sm};
`;

export class Home extends Component {
  render() {
    return (
      <HomeContainer>Clique em algum link do menu para continuar</HomeContainer>
    );
  }
}
