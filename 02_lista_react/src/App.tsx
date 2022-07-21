import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { frases, IFrases } from './assets/frases';
import { AddQuoteButton, DeleteQuoteButton } from './components/Button';
import { TextArea } from './components/TextArea';
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

const ButtonsArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function App() {
  const [quotes, setQuotes] = useState<IFrases[]>([]);

  function addQuotes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const lastQuotesIndex = quotes.length - 1;

    if (lastQuotesIndex < 0) {
      setQuotes([...quotes, frases[lastQuotesIndex + 1]]);
      return;
    }

    const nextQuote = frases.find(
      (frase) => frase.id === quotes[lastQuotesIndex].id + 1
    );

    if (!nextQuote) {
      return;
    }

    setQuotes([...quotes, nextQuote]);
  }

  function removeQuotes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const lastQuotesIndex = quotes.length - 1;

    if (lastQuotesIndex < 0) {
      console.log('lastQuotesIndex menor que 0');
      return;
    }

    const filteredQuotes = quotes.filter(
      (quote) => quote.id !== quotes[lastQuotesIndex].id
    );

    if (!filteredQuotes) {
      console.log('filteredQuotes vazio');
      return;
    }

    setQuotes(filteredQuotes);
  }

  useEffect(() => {}, [quotes]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ButtonsArea>
          <AddQuoteButton onClick={addQuotes}>Adicionar Frase</AddQuoteButton>
          <DeleteQuoteButton onClick={removeQuotes}>
            Remover Frase
          </DeleteQuoteButton>
        </ButtonsArea>
        <TextArea quotes={quotes} />
      </AppContainer>
    </>
  );
}

export default App;
