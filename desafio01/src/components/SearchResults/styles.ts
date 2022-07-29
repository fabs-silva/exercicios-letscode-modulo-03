import styled from "styled-components";
import { variables } from "../../Styles/variables";

const { colors, fontWeight, fontSizes } = variables;

const SearchResultsContainer = styled.section`
  border: 4px solid rgba(53, 106, 188, 1);
  width: 750px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchResultsPokemon = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  gap: 3rem;
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
  height: 100%;
  width: 100%;
`;

const SearchResultsImage = styled.div`
  & img {
    width: 12rem;
  }
`;

const SearchResultsInfo = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;

const SearchResultsTitle = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(252, 207, 0, 1) 0%,
    rgba(252, 207, 0, 1) 30%,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 0.5rem 1rem;
  font-weight: ${fontWeight.xl};
  margin-bottom: 0.75rem;
`;

const SearchResultsNumber = styled.div`
  width: 32%;
`;

const SearchResultsName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 68%;
  font-size: calc(${fontSizes.lg} + 0.2rem);
  color: ${colors.mainWhite};
`;

const SearchResultsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const SearchResultsTableTitle = styled.p`
  text-align: center;
  background-color: ${colors.mainGray};
  width: 100%;
  padding: 0.5rem 0;
  font-weight: ${fontWeight.lg};
`;

const SearchResultsTableRow = styled.div`
  display: flex;
`;

const SearchResultsPropName = styled.p`
  width: 35%;
  padding: 0.5rem 0;
  background-color: ${colors.mainGray};
  text-align: center;
  font-weight: ${fontWeight.lg};
`;

const SearchResultsPropResult = styled.p`
  width: 65%;
  padding: 0.5rem 0 0.5rem 1rem;
  background-color: ${colors.mainWhite};
`;

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
