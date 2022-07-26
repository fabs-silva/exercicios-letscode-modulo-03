import React from 'react';
import { IMovies } from '../..';
import { AddQuoteButton } from '../../../../components/Button';
import { ListContainer, ListTitle, MovieData, MovieItem } from '../../style';

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
            <AddQuoteButton
              style={{ padding: '0.5rem' }}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                props.passWatchedMoviesAsProps(movie);
              }}
            >
              Assistido
            </AddQuoteButton>
          </MovieItem>
        );
      })}
    </ListContainer>
  );
}
