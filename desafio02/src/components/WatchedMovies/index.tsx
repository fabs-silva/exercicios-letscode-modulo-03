import { IMovies } from "../../MoviesList";
import {
  ListTitle,
  MovieData,
  MovieItem,
  SingleListContainer,
} from "../../Theme/style";

export function WatchedMovies(props: { movies: IMovies[] }) {
  return (
    <SingleListContainer>
      <ListTitle>Filmes Assistidos</ListTitle>
      {props.movies.map((movie: IMovies) => {
        return (
          <MovieItem>
            <MovieData>
              <span>{movie.name}</span> - {movie.year}
            </MovieData>
          </MovieItem>
        );
      })}
    </SingleListContainer>
  );
}
