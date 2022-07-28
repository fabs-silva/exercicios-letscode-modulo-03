import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { GlobalStyle } from './Styles/globalStyles';

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem 4rem;
  height: 100vh;
`;

export type Pokemon = {
  id: number;
  name: string;
  specie: string;
  type: string;
  image: string;
  height: number;
  weight: number;
};

function App() {
  const [searchedPokemon, setSearchedPokemon] = useState<string>('');
  const [pokemonApiData, setPokemonApiData] = useState<Pokemon>({} as Pokemon);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [textNoPokemon, setTextNoPokemon] = useState<string>(
    'Nenhum Pokémon para exibir ainda'
  );

  const passPokemonAsProps = (pokemon: string) => {
    setSearchedPokemon(pokemon);
  };

  const clearAllData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchedPokemon('');
    setPokemonApiData({} as Pokemon);
    setIsLoading(false);
    setLoaded(false);
    setTextNoPokemon('Nenhum Pokémon para exibir ainda');
  };

  useEffect(() => {
    async function getPokemonData() {
      if (searchedPokemon === '') {
        setIsLoading(false);
        setLoaded(false);
        return;
      }

      const promisePokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`
      )
        .then((response) => response.json())
        .then((result) => result)
        .catch(() => setTextNoPokemon('Pokemon não encontrado'));

      const responsePokemon = promisePokemon.value;

      const speciesUrl = responsePokemon.species.url;

      const promisePokemonSpecies = await fetch(speciesUrl)
        .then((response) => response.json())
        .then((result) => result);

      const pokemonGenus = promisePokemonSpecies.value.genera.genus;

      setPokemonApiData({
        id: responsePokemon.id,
        name: responsePokemon.name,
        specie: pokemonGenus,
        type: responsePokemon.types.type[0].name,
        image: responsePokemon.sprites.other['official-artwork'].front_default,
        height: responsePokemon.height,
        weight: responsePokemon.weight,
      });

      setLoaded(true);
    }

    setIsLoading(true);
    setLoaded(false);

    setTimeout(() => {
      getPokemonData();
      setIsLoading(false);
    }, 2000);
  }, [searchedPokemon]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SearchForm
          passPokemonAsProps={passPokemonAsProps}
          clearAllData={clearAllData}
        />
        <SearchResults
          pokemon={pokemonApiData}
          isLoading={isLoading}
          loaded={loaded}
          textNoPokemon={textNoPokemon}
        />
      </AppContainer>
    </>
  );
}

export default App;
