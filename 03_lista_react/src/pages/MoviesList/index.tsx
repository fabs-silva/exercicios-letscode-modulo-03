import styled from "styled-components";
import { Form } from "./components/Form";
import { List } from "./components/List";

const MoviesListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 1100px;
  padding: 1.5rem;
`;
const ListsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export function MoviesList() {
  return (
    <MoviesListContainer>
      <Form />
      <ListsContainer>
        <List />
        <List />
      </ListsContainer>
    </MoviesListContainer>
  );
}
