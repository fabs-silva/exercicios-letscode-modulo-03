import { useState } from "react";
import "./style.css";

function SearchForm() {
  const [inputValue, setInputValue] = useState<string>("");

  /*   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
  }; */

  return (
    <form className="search-form">
      <fieldset className="search-fieldset">
        <label htmlFor="search-pokemon" className="search-label">
          Digite o nome de um pokemon
        </label>
        <input
          type="text"
          value={inputValue}
          id="search-pokemon"
          placeholder="Digite o nome de um pokemon..."
          className="search-input"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </fieldset>
      <button type="submit" className="search-button">
        Pesquisar
      </button>
    </form>
  );
}

export default SearchForm;
