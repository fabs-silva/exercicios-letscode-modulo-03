import { useState } from 'react';
import {
  SearchFormButton,
  SearchFormContainer,
  SearchFormFieldset,
} from './styles';

export function SearchForm(props: {
  passPokemonAsProps: (inputValue: string) => void;
}) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.passPokemonAsProps(inputValue);
    setInputValue('');
  };

  return (
    <SearchFormContainer>
      <SearchFormFieldset>
        <label>Digite o nome de um pokemon</label>
        <input
          type="text"
          value={inputValue}
          placeholder="Digite o nome de um pokemon..."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </SearchFormFieldset>
      <SearchFormButton onClick={handleClick}>Pesquisar</SearchFormButton>
    </SearchFormContainer>
  );
}
