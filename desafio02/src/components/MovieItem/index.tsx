import styled from "styled-components";
import { IMovies } from "../../MoviesList";
import {
  MovieData,
  MovieDirector,
  MovieImage,
  MovieInfo,
  MovieName,
  MovieYear,
} from "../../Theme/style";
import { variables } from "../../Theme/variables";

const { colors } = variables;

const WatchedMovieButton = styled.button`
  padding: 0.5rem;
  background: ${colors.mainGreen};
  align-self: center;
`;

export function MovieItem(props: {
  movie: IMovies;
  toWatch: boolean;
  passWatchedMoviesAsProps: (movie: IMovies) => void;
}) {
  return (
    <MovieData key={props.movie.id}>
      <MovieImage src={props.movie.image} />
      <MovieInfo>
        <MovieName>{props.movie.name}</MovieName>
        <MovieDirector>{props.movie.director}</MovieDirector>
        <MovieYear>{props.movie.year}</MovieYear>
        {props.toWatch && (
          <WatchedMovieButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              props.passWatchedMoviesAsProps(props.movie);
            }}
          >
            Assistido
          </WatchedMovieButton>
        )}
      </MovieInfo>
    </MovieData>
  );
}
