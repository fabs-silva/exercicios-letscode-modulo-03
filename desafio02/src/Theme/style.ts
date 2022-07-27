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

const MovieItem = styled.div`
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

const MovieData = styled.p`
  font-size: ${fontSizes.md};

  & span {
    font-weight: ${fontWeight.xl};
  }
`;

export {
  MoviesListContainer,
  ListsContainer,
  SingleListContainer,
  ListTitle,
  MovieItem,
  MovieData,
};
