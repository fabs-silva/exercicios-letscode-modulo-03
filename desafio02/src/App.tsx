import { Component } from 'react';
import styled from 'styled-components';
import { MoviesList } from './MoviesList';
import { GlobalStyle } from './Theme/globalStyles';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 3rem 4rem;
  gap: 4rem;
  width: calc(100vw - 8rem);
  max-width: 920px;
`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <MoviesList />
        </AppContainer>
      </>
    );
  }
}
