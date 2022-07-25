import React, { Component } from 'react';
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

type QuoteProps = {};

type QuoteStates = {
  quotes: IFrase[];
  error: string;
  goToTop: boolean;
};
export class QuoteList extends Component<QuoteProps, QuoteStates> {
  constructor(props: QuoteProps | Readonly<QuoteProps>) {
    super(props);

    this.liRef = React.createRef();
    this.topBottomRef = React.createRef();

    this.state = {
      quotes: [],
      error: '',
      goToTop: false,
    };

    this.addQuotes = this.addQuotes.bind(this);
    this.removeQuotes = this.removeQuotes.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidUpdate(): void {
    if (this.liRef.current) {
      this.liRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (this.topBottomRef.current) {
      if (this.state.goToTop) {
        this.topBottomRef?.current?.scrollIntoView({
          behavior: 'smooth',
        });
      } else {
        this.liRef?.current?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }

  addQuotes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const lastQuotesIndex = this.state.quotes.length - 1;

    if (lastQuotesIndex < 0) {
      this.setState({
        quotes: [...this.state.quotes, frases[lastQuotesIndex + 1]],
        error: '',
      });
      return;
    }

    const nextQuote = frases.find(
      (frase) => frase.id === this.state.quotes[lastQuotesIndex].id + 1
    );

    if (!nextQuote) {
      this.setState({ error: 'Você chegou a final da lista de frases!' });
      return;
    }

    this.setState({
      quotes: [...this.state.quotes, nextQuote],
      error: '',
      goToTop: false,
    });
  }

  removeQuotes(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const lastQuotesIndex = this.state.quotes.length - 1;

    if (lastQuotesIndex < 0) {
      this.setState({ error: 'A lista de frases já está vazia' });
      return;
    }

    const filteredQuotes = this.state.quotes.filter(
      (quote) => quote.id !== this.state.quotes[lastQuotesIndex].id
    );

    this.setState({ quotes: filteredQuotes, error: '', goToTop: false });
  }

  scrollToTop(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState({ goToTop: true });
  }

  scrollToBottom(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState({ goToTop: false });
  }

  render() {
    return (
      <QuotesContainer>
        <ButtonsArea>
          <ButtonsContainer>
            <AddQuoteButton onClick={this.addQuotes}>
              Adicionar Frase
            </AddQuoteButton>
            <DeleteQuoteButton onClick={this.removeQuotes}>
              Remover Frase
            </DeleteQuoteButton>
          </ButtonsContainer>
          {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
          <ButtonsContainer>
            <RegularButton onClick={this.scrollToTop}>Topo ⋀</RegularButton>
            <RegularButton onClick={this.scrollToBottom}>Fim ⋁</RegularButton>
          </ButtonsContainer>
        </ButtonsArea>
        <TextAreaContainer>
          <ListContainer ref={this.topBottomRef}>
            {this.state.quotes.map((quote: IFrase) => {
              return (
                <ListItem key={quote.id} ref={this.liRef}>
                  {quote.frase}
                </ListItem>
              );
            })}
          </ListContainer>
        </TextAreaContainer>
      </QuotesContainer>
    );
  }
}
