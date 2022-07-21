import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from './components/Menu';
import { QuoteList } from './pages/QuotesList';
import { GlobalStyle } from './Theme/globalStyles';

const AppContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100vh;
  padding: 2rem 4rem;
  gap: 3rem;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/frases-chaves" element={<QuoteList />} />
          <Route path="/jogo-da-velha" element={<QuoteList />} />
          <Route path="/timer" element={<QuoteList />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
