import { useEffect, useRef, useState } from 'react';
import { frases, IFrase } from '../../assets/frases';
import { AddQuoteButton, DeleteQuoteButton } from '../../components/Button';
import {
  ButtonsArea,
  ErrorMessage,
  ListContainer,
  ListItem,
  QuotesContainer,
  TextAreaContainer,
} from './style';

export function QuoteList() {
  const [quotes, setQuotes] = useState<IFrase[]>([]);
  const [error, setError] = useState<string>('');
  let liRef = useRef(null);

  function addQuotes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const lastQuotesIndex = quotes.length - 1;

    if (lastQuotesIndex < 0) {
      setQuotes([...quotes, frases[lastQuotesIndex + 1]]);
      setError('');
      return;
    }

    const nextQuote = frases.find(
      (frase) => frase.id === quotes[lastQuotesIndex].id + 1
    );

    if (!nextQuote) {
      setError('Você chegou a final da lista de frases!');
      return;
    }

    setQuotes([...quotes, nextQuote]);
    setError('');
  }

  function removeQuotes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const lastQuotesIndex = quotes.length - 1;

    if (lastQuotesIndex < 0) {
      setError('A lista de frases já está vazia');
      return;
    }

    const filteredQuotes = quotes.filter(
      (quote) => quote.id !== quotes[lastQuotesIndex].id
    );

    setQuotes(filteredQuotes);
    setError('');
  }

  useEffect(() => {
    if (liRef.current) {
      liRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [quotes]);

  return (
    <QuotesContainer>
      <ButtonsArea>
        <AddQuoteButton onClick={addQuotes}>Adicionar Frase</AddQuoteButton>
        <DeleteQuoteButton onClick={removeQuotes}>
          Remover Frase
        </DeleteQuoteButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ButtonsArea>
      <TextAreaContainer>
        <ListContainer>
          {quotes.map((quote: IFrase) => {
            return (
              <ListItem key={quote.id} ref={liRef}>
                {quote.frase}
              </ListItem>
            );
          })}
        </ListContainer>
      </TextAreaContainer>
    </QuotesContainer>
  );
}
