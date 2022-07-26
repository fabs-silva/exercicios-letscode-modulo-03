import { IMovies } from '../../MoviesList';
import {
  ListContainer,
  ListTitle,
  MovieData,
  MovieItem,
} from '../../Theme/style';

export function WatchedMovies(props: { movies: IMovies[] }) {
  return (
    <ListContainer>
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
    </ListContainer>
  );
}
