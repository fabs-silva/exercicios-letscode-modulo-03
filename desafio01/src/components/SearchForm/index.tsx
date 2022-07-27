import { useState } from 'react';
import {
  SearchFormButton,
  SearchFormContainer,
  SearchFormFieldset,
} from './styles';

export function SearchForm() {
  const [inputValue, setInputValue] = useState<string>('');

  /*   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
  }; */

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
      <SearchFormButton>Pesquisar</SearchFormButton>
    </SearchFormContainer>
  );
}
