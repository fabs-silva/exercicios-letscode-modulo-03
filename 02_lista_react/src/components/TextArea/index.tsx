import styled from 'styled-components';
import barrel from '../../assets/barrel.svg';
import { IFrases } from '../../assets/frases';
import { variables } from '../../Theme/Theme';

const { colors } = variables;

const TextAreaContainer = styled.section`
  display: flex;
  background-color: ${colors.lightGray};
  width: 80%;
  height: 100%;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem 2.5rem 2rem;
`;

const ListItem = styled.li`
  list-style: inside url(${barrel});

  ::marker {
    font-size: 3rem;
  }
`;

export const TextArea = (props: { quotes: IFrases[] }) => {
  return (
    <TextAreaContainer>
      <ListContainer>
        {props.quotes.map((quote) => {
          return <ListItem key={quote.id}>{quote.frase}</ListItem>;
        })}
      </ListContainer>
    </TextAreaContainer>
  );
};
