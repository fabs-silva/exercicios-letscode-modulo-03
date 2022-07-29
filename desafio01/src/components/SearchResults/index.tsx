import { CgPokemon } from "react-icons/cg";
import { Pokemon } from "../../App";
import { Loading } from "../Loading";
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
} from "./styles";

type SearchResultProps = {
  pokemon: Pokemon;
  isLoading: boolean;
  loaded: boolean;
  textNoPokemon: string;
};

export function SearchResults(props: SearchResultProps) {
  return (
    <SearchResultsContainer>
      {props.isLoading ? (
        <Loading />
      ) : (
        <SearchPokemonContainer
          pokemon={props.pokemon}
          loaded={props.loaded}
          textNoPokemon={props.textNoPokemon}
        />
      )}
    </SearchResultsContainer>
  );
}

const SearchPokemonContainer = (props: {
  pokemon: Pokemon;
  loaded: boolean;
  textNoPokemon: string;
}) => {
  return (
    <>
      {props.loaded ? (
        <SearchPokemon pokemon={props.pokemon} />
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <CgPokemon style={{ fontSize: "2rem" }} />
          {props.textNoPokemon}
          <CgPokemon style={{ fontSize: "2rem" }} />
        </div>
      )}
    </>
  );
};

const SearchPokemon = (props: { pokemon: Pokemon }) => {
  return (
    <SearchResultsPokemon>
      <SearchResultsImage>
        <img src={props.pokemon.image} />
      </SearchResultsImage>
      <SearchResultsInfo>
        <SearchResultsTitle>
          <SearchResultsNumber>No. {props.pokemon.id}</SearchResultsNumber>
          <SearchResultsName>
            {props.pokemon.name}
            <CgPokemon />
          </SearchResultsName>
        </SearchResultsTitle>
        <SearchResultsTable>
          <SearchResultsTableTitle>
            {props.pokemon.specie}
          </SearchResultsTableTitle>
          <SearchResultsTableRow>
            <SearchResultsPropName>Type</SearchResultsPropName>
            <SearchResultsPropResult>
              {props.pokemon.type}
            </SearchResultsPropResult>
          </SearchResultsTableRow>
          <SearchResultsTableRow>
            <SearchResultsPropName>Height</SearchResultsPropName>
            <SearchResultsPropResult>
              {props.pokemon.height} pol.
            </SearchResultsPropResult>
          </SearchResultsTableRow>
          <SearchResultsTableRow>
            <SearchResultsPropName>Weight</SearchResultsPropName>
            <SearchResultsPropResult>
              {props.pokemon.weight} lbs.
            </SearchResultsPropResult>
          </SearchResultsTableRow>
        </SearchResultsTable>
      </SearchResultsInfo>
    </SearchResultsPokemon>
  );
};
