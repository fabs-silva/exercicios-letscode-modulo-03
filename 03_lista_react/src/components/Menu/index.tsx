import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  display: flex;
  gap: 2rem;

  & a {
    text-decoration: none;
  }
`;

export class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        <Link to="/">Home</Link>
        <Link to="/frases-chaves">Frases de Chaves</Link>
        <Link to="/jogo-da-velha">Jogo da Velha</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/lista-produtos">Lista de Produtos</Link>
        <Link to="/lista-filmes">Lista de Filmes</Link>
      </MenuContainer>
    );
  }
}
