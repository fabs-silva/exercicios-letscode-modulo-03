import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { IMovies } from '../..';
import { RegularButton } from '../../../../components/Button';
import { variables } from '../../../../Theme/Theme';

const { colors, fontSizes, fontWeight } = variables;

const FormContainer = styled.form`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.p`
  color: ${colors.mainBlue};
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.xl};
  text-align: center;
  width: 100%;
`;

const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: none;

  & label {
    font-size: calc(${fontSizes.sm} * 0.95);
  }

  & input {
    padding: 0.3rem;
    -moz-appearance: textfield;
  }

  &:first-of-type {
    width: 70%;
  }

  &:last-of-type input {
    width: 8.2rem;
  }
`;

export function Form(props: {
  passMoviesToWatchAsProps: (movie: IMovies) => void;
}) {
  const [movieNameInput, setMovieNameInput] = useState<string>('');
  const [movieYearInput, setMovieYearInput] = useState<string>('');
  return (
    <FormContainer>
      <FormTitle>Cadastrar Novo Filme</FormTitle>
      <InputContainer>
        <label>Nome do Filme:</label>
        <input
          type="text"
          placeholder="Nome do Filme"
          value={movieNameInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieNameInput(e.target.value)
          }
        />
      </InputContainer>
      <InputContainer>
        <label>Ano de Lançamento:</label>
        <input
          type="number"
          placeholder="Ano de Lançamento"
          value={movieYearInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieYearInput(e.target.value)
          }
        />
      </InputContainer>
      <RegularButton
        style={{ width: '10rem' }}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          props.passMoviesToWatchAsProps({
            id: v4(),
            name: movieNameInput,
            year: parseInt(movieYearInput),
          });
          setMovieNameInput('');
          setMovieYearInput('');
        }}
      >
        Cadastrar
      </RegularButton>
    </FormContainer>
  );
}
