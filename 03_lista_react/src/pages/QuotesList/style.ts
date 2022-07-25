import styled from 'styled-components';
import barrel from '../../assets/barrel.svg';
import { variables } from '../../Theme/Theme';

const { colors, fontSizes } = variables;

const QuotesContainer = styled.section`
  display: flex;
  width: 100%;
  gap: 3rem;
`;

const ButtonsArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10vw;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ErrorMessage = styled.p`
  color: ${colors.mainRed};
  font-size: ${fontSizes.sm};
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
`;

const TextAreaContainer = styled.section`
  display: flex;
  background-color: ${colors.lightGray};
  width: 80%;
  height: 65vh;
  overflow-y: auto;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 2.5rem 2rem;
`;

const ListItem = styled.li`
  list-style: inside url(${barrel});

  ::marker {
    font-size: 3rem;
  }
`;

export {
  QuotesContainer,
  ButtonsArea,
  ButtonsContainer,
  ErrorMessage,
  TextAreaContainer,
  ListContainer,
  ListItem,
};
