import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMovies } from '../../MoviesList';
import { variables } from '../../Theme/variables';

const { colors, fontSizes, fontWeight } = variables;

const FormContainer = styled.form`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.p`
  color: ${colors.mainBlue};
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.xl};
  text-align: center;
  width: 100%;
`;

const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: none;

  & label {
    font-size: calc(${fontSizes.sm} * 0.95);
  }

  & input {
    padding: 0.3rem;
    -moz-appearance: textfield;
  }

  &:first-of-type {
    width: 70%;
  }

  &:last-of-type input {
    width: 8.2rem;
  }
`;

const SaveMovieButton = styled.button`
  padding: 0.75rem;
  width: 10rem;
  background: ${colors.mainBlue};
`;

export function Form(props: {
  passMoviesToWatchAsProps: (movie: IMovies) => void;
}) {
  const [movieNameInput, setMovieNameInput] = useState<string>('');
  const [movieYearInput, setMovieYearInput] = useState<string>('');
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [movieDataApi, setMovieDataApi] = useState<IMovies>({} as IMovies);

  useEffect(() => {
    async function getMovieData() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      setLoadingData(true);
      const response = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/{apiKey}/${movieNameInput} ${movieYearInput}/`,
        requestOptions
      );
      const movieData = await response.text();

      setMovieDataApi({
        id: movieData.id,
        name: movieNameInput,
        year: parseInt(movieYearInput),
        director: movieData.director,
        image: movieData.image,
      });

      setLoadingData(false);
    }

    getMovieData();

    //
    //Search Movie search/movie?api_key=00f17259d23a00ff4bf8b4443792c2ba&query=Toy%20Story&page=1 -> results -> [0]
    //Search Director /movie/{movie_id}/credits
  }, [movieNameInput]);

  return (
    <FormContainer>
      <FormTitle>Cadastrar Novo Filme</FormTitle>
      <InputContainer>
        <label>Nome do Filme:</label>
        <input
          type="text"
          placeholder="Nome do Filme"
          value={movieNameInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieNameInput(e.target.value)
          }
        />
      </InputContainer>
      <InputContainer>
        <label>Ano de Lançamento:</label>
        <input
          type="number"
          placeholder="Ano de Lançamento"
          value={movieYearInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieYearInput(e.target.value)
          }
        />
      </InputContainer>
      <SaveMovieButton
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          props.passMoviesToWatchAsProps({
            id: /*id*/ 'aaa',
            name: movieNameInput,
            year: parseInt(movieYearInput),
            image: /* poster_path */ 'aaa',
            director:
              /*/movie/{movie_id}/credits - crew - job: director */ 'aaa',
          });
          setMovieNameInput('');
          setMovieYearInput('');
        }}
      >
        Cadastrar
      </SaveMovieButton>
    </FormContainer>
  );
}
