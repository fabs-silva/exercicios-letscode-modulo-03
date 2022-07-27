import styled from 'styled-components';
import { variables } from '../../Styles/variables';

const { colors, fontWeight, fonts, fontSizes } = variables;

const SearchResultsContainer = styled.section`
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(252, 207, 0, 1) 10%,
    rgba(252, 207, 0, 1) 20%,
    rgba(53, 106, 188, 1) 20%,
    rgba(53, 106, 188, 1) 80%,
    rgba(252, 207, 0, 1) 80%,
    rgba(252, 207, 0, 1) 90%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 1) 100%
  );
  border: 4px solid rgba(18, 142, 143, 1);
`;

const SearchResultsPokemon = styled.div`
  width: 700px;
  padding: 3rem;
  display: flex;
  gap: 5rem;
`;

const SearchResultsImage = styled.img`
  width: 12rem;
`;

const SearchResultsInfo = styled.div``;
const SearchResultsTitle = styled.div``;
const SearchResultsNumber = styled.div``;
const SearchResultsName = styled.div``;
const SearchResultsTable = styled.div``;
const SearchResultsTableTitle = styled.p``;
const SearchResultsTableRow = styled.div``;
const SearchResultsPropName = styled.p``;
const SearchResultsPropResult = styled.p``;

export {
  SearchResultsContainer,
  SearchResultsPokemon,
  SearchResultsImage,
  SearchResultsInfo,
  SearchResultsNumber,
  SearchResultsName,
  SearchResultsTitle,
  SearchResultsTable,
  SearchResultsTableTitle,
  SearchResultsTableRow,
  SearchResultsPropName,
  SearchResultsPropResult,
};
