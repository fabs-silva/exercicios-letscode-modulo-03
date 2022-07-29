import { IMovies } from "../../MoviesList";
import {
  ListTitle,
  MovieContainer,
  SingleListContainer,
} from "../../Theme/style";
import { MovieItem } from "../MovieItem";

export function MoviesToWatch(props: {
  movies: IMovies[];
  passWatchedMoviesAsProps: (movie: IMovies) => void;
}) {
  return (
    <SingleListContainer>
      <ListTitle>Filmes a Assistir</ListTitle>
      {props.movies.map((movie: IMovies) => {
        return (
          <MovieContainer key={movie.id}>
            <MovieItem
              movie={movie}
              toWatch={true}
              passWatchedMoviesAsProps={props.passWatchedMoviesAsProps}
            />
          </MovieContainer>
        );
      })}
    </SingleListContainer>
  );
}
