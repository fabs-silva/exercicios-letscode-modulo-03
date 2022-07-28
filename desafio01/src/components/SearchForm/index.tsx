import { useState } from 'react';
import {
  SearchFormButton,
  SearchFormButtonContainer,
  SearchFormContainer,
  SearchFormFieldset,
} from './styles';

export function SearchForm(props: {
  passPokemonAsProps: (inputValue: string) => void;
  clearAllData: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
      <SearchFormButtonContainer>
        <SearchFormButton onClick={handleClick}>Pesquisar</SearchFormButton>
        <SearchFormButton onClick={props.clearAllData}>Limpar</SearchFormButton>
      </SearchFormButtonContainer>
    </SearchFormContainer>
  );
}
