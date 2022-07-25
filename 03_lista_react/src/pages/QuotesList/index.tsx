import { useEffect, useRef, useState } from 'react';
import { frases, IFrase } from '../../assets/frases';
import {
  AddQuoteButton,
  DeleteQuoteButton,
  RegularButton,
} from '../../components/Button';
import {
  ButtonsArea,
  ButtonsContainer,
  ErrorMessage,
  ListContainer,
  ListItem,
  QuotesContainer,
  TextAreaContainer,
} from './style';

export function QuoteList() {
  const [quotes, setQuotes] = useState<IFrase[]>([]);
  const [error, setError] = useState<string>('');
  const [goToTop, setGoToTop] = useState<boolean>(false);
  let liRef = useRef(null);
  let topBottomRef = useRef(null);

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
    setGoToTop(false);
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
    setGoToTop(false);
  }

  function scrollToTop(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setGoToTop(true);
  }

  function scrollToBottom(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setGoToTop(false);
  }

  useEffect(() => {
    if (liRef.current) {
      liRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [quotes]);

  useEffect(() => {
    if (topBottomRef.current) {
      if (goToTop) {
        topBottomRef?.current?.scrollIntoView({
          behavior: 'smooth',
        });
      } else {
        liRef?.current?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [goToTop]);

  return (
    <QuotesContainer>
      <ButtonsArea>
        <ButtonsContainer>
          <AddQuoteButton onClick={addQuotes}>Adicionar Frase</AddQuoteButton>
          <DeleteQuoteButton onClick={removeQuotes}>
            Remover Frase
          </DeleteQuoteButton>
        </ButtonsContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonsContainer>
          <RegularButton onClick={scrollToTop}>Topo ⋀</RegularButton>
          <RegularButton onClick={scrollToBottom}>Fim ⋁</RegularButton>
        </ButtonsContainer>
      </ButtonsArea>
      <TextAreaContainer>
        <ListContainer ref={topBottomRef}>
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
