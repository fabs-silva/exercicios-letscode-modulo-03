import { IMovies } from "../../MoviesList";
import {
  ListTitle,
  MovieContainer,
  SingleListContainer,
} from "../../Theme/style";
import { MovieItem } from "../MovieItem";

export function WatchedMovies(props: { movies: IMovies[] }) {
  return (
    <SingleListContainer>
      <ListTitle>Filmes Assistidos</ListTitle>
      {props.movies.map((movie: IMovies) => {
        return (
          <MovieContainer key={movie.id}>
            <MovieItem movie={movie} />
          </MovieContainer>
        );
      })}
    </SingleListContainer>
  );
}
