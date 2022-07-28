import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { MoviesToWatch } from './components/MoviesToWatch';
import { WatchedMovies } from './components/WatchedMovies';
import { ListsContainer, MoviesListContainer } from './Theme/style';

export type IMovies = {
  id: number;
  name: string;
  year: number;
  director: string;
  image: string;
};

export function MoviesList() {
  const [movieInputs, setMovieInputs] = useState<string[]>([] as string[]);
  const [moviesToWatchList, setMoviesToWatchList] = useState<IMovies[]>(
    [] as IMovies[]
  );
  const [watchedMoviesList, setWatchedMoviesList] = useState<IMovies[]>(
    [] as IMovies[]
  );
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const passMoviesToWatchAsProps = ([movieName, movieYear]: string[]) => {
    setMovieInputs([movieName, movieYear]);
  };

  const passWatchedMoviesAsProps = (movie: IMovies) => {
    setWatchedMoviesList([...watchedMoviesList, movie]);

    const filteredMoviesToWatch = moviesToWatchList.filter(
      (mov) => mov.id !== movie.id
    );

    setMoviesToWatchList(filteredMoviesToWatch);
  };

  useEffect(() => {
    async function getMovieData() {
      setLoadingData(true);

      if (movieInputs.length === 0) {
        return;
      }
      const responseMovie = await fetch(
        `${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${movieInputs[0]}&page=1`
      );

      const movieData = await responseMovie.json();

      const responseCredits = await fetch(
        `${import.meta.env.VITE_BASE_URL}/movie/${
          movieData.results[0].id
        }/credits?api_key=${import.meta.env.VITE_API_KEY}`
      );

      const creditsData = await responseCredits.json();

      const director = creditsData.crew.find(
        (member: any) => member.job === 'Director'
      );

      const movie = {
        id: movieData.results[0].id,
        name: movieData.results[0].title,
        year: movieData.results[0].release_date.substring(0, 4),
        director: director.name,
        image: `${import.meta.env.VITE_IMAGE_BASE_URL}/${
          movieData.results[0].poster_path
        }`,
      };

      console.log(movie);

      setMoviesToWatchList([...moviesToWatchList, movie]);
      setLoadingData(false);
    }

    getMovieData();
  }, [movieInputs]);

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
