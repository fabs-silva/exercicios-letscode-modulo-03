import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { MoviesToWatch } from "./components/MoviesToWatch";
import { WatchedMovies } from "./components/WatchedMovies";
import { ErrorText, ListsContainer, MoviesListContainer } from "./Theme/style";

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
  const [errorMsg, setErrorMsg] = useState<string>("");

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
      if (movieInputs.length === 0) {
        return;
      }
      const responseMovie = await fetch(
        `${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${movieInputs[0]}&page=1`
      ).then((response) => response.json());

      if (responseMovie.total_results === 0) {
        setErrorMsg("Filme não encontrado");
        return;
      }

      const responseCredits = await fetch(
        `${import.meta.env.VITE_BASE_URL}/movie/${
          responseMovie.results[0].id
        }/credits?api_key=${import.meta.env.VITE_API_KEY}`
      ).then((response) => response.json());

      const director = responseCredits.crew.find(
        (member: any) => member.job === "Director"
      );

      const movie = {
        id: responseMovie.results[0].id,
        name: responseMovie.results[0].title,
        year: responseMovie.results[0].release_date.substring(0, 4),
        director: director.name,
        image: `${import.meta.env.VITE_IMAGE_BASE_URL}/${
          responseMovie.results[0].poster_path
        }`,
      };

      setMoviesToWatchList([...moviesToWatchList, movie]);
    }

    getMovieData();
  }, [movieInputs]);

  return (
    <MoviesListContainer>
      <Form passMoviesToWatchAsProps={passMoviesToWatchAsProps} />
      {errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
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
