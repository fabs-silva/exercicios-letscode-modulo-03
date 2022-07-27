import styled from 'styled-components';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { GlobalStyle } from './Styles/globalStyles';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  height: 100vh;
  padding: 2rem 4rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SearchForm />
        <SearchResults />
      </AppContainer>
    </>
  );
}

export default App;
