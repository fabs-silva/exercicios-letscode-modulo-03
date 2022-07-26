import React from 'react';
import styled from 'styled-components';
import { IMovies } from '../../MoviesList';
import {
  ListContainer,
  ListTitle,
  MovieData,
  MovieItem,
} from '../../Theme/style';
import { variables } from '../../Theme/variables';

const { colors } = variables;

const WatchedMovieButton = styled.button`
  padding: 0.5rem;
  background: ${colors.mainGreen};
`;

export function MoviesToWatch(props: {
  movies: IMovies[];
  passWatchedMoviesAsProps: (movie: IMovies) => void;
}) {
  return (
    <ListContainer>
      <ListTitle>Filmes a Assistir</ListTitle>
      {props.movies.map((movie: IMovies) => {
        return (
          <MovieItem>
            <MovieData>
              <span>{movie.name}</span> - {movie.year}
            </MovieData>
            <WatchedMovieButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                props.passWatchedMoviesAsProps(movie);
              }}
            >
              Assistido
            </WatchedMovieButton>
          </MovieItem>
        );
      })}
    </ListContainer>
  );
}
