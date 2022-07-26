import { useState } from 'react';
import styled from 'styled-components';
import { Form } from './components/Form';
import { MoviesToWatch } from './components/MoviesToWatch';
import { WatchedMovies } from './components/WatchedMovies';

export type IMovies = {
  id: string;
  name: string;
  year: number;
  director: string;
  image: string;
};

const MoviesListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 1100px;
  padding: 1.5rem;
`;
const ListsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export function MoviesList() {
  const [moviesToWatchList, setMoviesToWatchList] = useState<IMovies[]>(
    [] as IMovies[]
  );
  const [watchedMoviesList, setWatchedMoviesList] = useState<IMovies[]>(
    [] as IMovies[]
  );

  const passMoviesToWatchAsProps = (movie: IMovies) => {
    setMoviesToWatchList([...moviesToWatchList, movie]);
  };

  const passWatchedMoviesAsProps = (movie: IMovies) => {
    setWatchedMoviesList([...watchedMoviesList, movie]);

    const filteredMoviesToWatch = moviesToWatchList.filter(
      (mov) => mov.id !== movie.id
    );

    setMoviesToWatchList(filteredMoviesToWatch);
  };

  return (
    <MoviesListContainer>
      <Form passMoviesToWatchAsProps={passMoviesToWatchAsProps} />
      <ListsContainer>
        <MoviesToWatch
          passWatchedMoviesAsProps={passWatchedMoviesAsProps}
          movies={moviesToWatchList}
        />
        <WatchedMovies movies={watchedMoviesList} />
      </ListsContainer>
    </MoviesListContainer>
  );
}
