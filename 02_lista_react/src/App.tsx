import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { QuoteList } from './pages/QuotesList';
import { TicTacToe } from './pages/TicTacToe';
import { Timer } from './pages/Timer';
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

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/frases-chaves" element={<QuoteList />} />
          <Route path="/jogo-da-velha" element={<TicTacToe />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
