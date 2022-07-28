import { IMovies } from '../../MoviesList';
import {
  MovieData,
  MovieDirector,
  MovieImage,
  MovieInfo,
  MovieName,
  MovieYear,
} from '../../Theme/style';

export function MoviesToWatch(props: { movie: IMovies }) {
  return (
    <MovieData key={props.movie.id}>
      <MovieImage src={props.movie.image} />
      <MovieInfo>
        <MovieName>{props.movie.name}</MovieName>
        <MovieDirector>{props.movie.director}</MovieDirector>
        <MovieYear>{props.movie.year}</MovieYear>
      </MovieInfo>
    </MovieData>
  );
}
