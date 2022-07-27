import { useState } from "react";
import { Form } from "./components/Form";
import { MoviesToWatch } from "./components/MoviesToWatch";
import { WatchedMovies } from "./components/WatchedMovies";
import { ListsContainer, MoviesListContainer } from "./Theme/style";

export type IMovies = {
  id: number;
  name: string;
  year: number;
  director: string;
  image: string;
};

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
