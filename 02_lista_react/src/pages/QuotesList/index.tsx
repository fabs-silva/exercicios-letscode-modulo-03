import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { frases, IFrases } from '../../assets/frases';
import { AddQuoteButton, DeleteQuoteButton } from '../../components/Button';
import { TextArea } from '../../components/TextArea';

const ButtonsArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function QuoteList() {
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
      <ButtonsArea>
        <AddQuoteButton onClick={addQuotes}>Adicionar Frase</AddQuoteButton>
        <DeleteQuoteButton onClick={removeQuotes}>
          Remover Frase
        </DeleteQuoteButton>
      </ButtonsArea>
      <TextArea quotes={quotes} />
    </>
  );
}
