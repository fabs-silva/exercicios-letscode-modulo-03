import styled from "styled-components";
import { variables } from "./variables";

const { colors, fontSizes, fontWeight } = variables;

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

const SingleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  border: 1px solid ${colors.mainGray};
  padding: 1.5rem;
`;

const ListTitle = styled.p`
  color: ${colors.mainBlue};
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.xl};
  text-align: center;
  width: 100%;
  margin-bottom: 1.25rem;
`;

const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid #dadada;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const MovieData = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const MovieImage = styled.img`
  width: 100px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MovieName = styled.p`
  font-weight: ${fontWeight.xl};
  font-size: ${fontSizes.lg};
`;

const MovieDirector = styled.p`
  font-weight: ${fontWeight.md};
  font-size: ${fontSizes.md};
`;

const MovieYear = styled.p`
  font-weight: ${fontWeight.md};
  font-size: ${fontSizes.sm};
`;

const ErrorText = styled.p`
  color: ${colors.mainRed};
`;

export {
  MoviesListContainer,
  ListsContainer,
  SingleListContainer,
  ListTitle,
  MovieContainer,
  MovieData,
  MovieImage,
  MovieInfo,
  MovieName,
  MovieDirector,
  MovieYear,
  ErrorText,
};
