import {
  SearchResultsContainer,
  SearchResultsImage,
  SearchResultsInfo,
  SearchResultsName,
  SearchResultsNumber,
  SearchResultsPokemon,
  SearchResultsPropName,
  SearchResultsPropResult,
  SearchResultsTable,
  SearchResultsTableRow,
  SearchResultsTableTitle,
  SearchResultsTitle,
} from './styles';

//Nenhum Pokémon para exibir ainda

export function SearchResults() {
  return (
    <SearchResultsContainer>
      <SearchResultsPokemon>
        <SearchResultsImage src="https://cyberbar-altf4.pt/wp-content/uploads/2022/06/Pikachu-PNG-Transparent-Image.png" />
        <SearchResultsInfo>
          <SearchResultsTitle>
            <SearchResultsNumber>No. 25</SearchResultsNumber>
            <SearchResultsName></SearchResultsName>
          </SearchResultsTitle>
          <SearchResultsTable>
            <SearchResultsTableTitle>Mouse Pokemon</SearchResultsTableTitle>
            <SearchResultsTableRow>
              <SearchResultsPropName>Type</SearchResultsPropName>
              <SearchResultsPropResult>Electric</SearchResultsPropResult>
            </SearchResultsTableRow>
            <SearchResultsTableRow>
              <SearchResultsPropName>Height</SearchResultsPropName>
              <SearchResultsPropResult>1'04"</SearchResultsPropResult>
            </SearchResultsTableRow>
            <SearchResultsTableRow>
              <SearchResultsPropName>Weight</SearchResultsPropName>
              <SearchResultsPropResult>13.2 lbs.</SearchResultsPropResult>
            </SearchResultsTableRow>
          </SearchResultsTable>
        </SearchResultsInfo>
      </SearchResultsPokemon>
    </SearchResultsContainer>
  );
}
