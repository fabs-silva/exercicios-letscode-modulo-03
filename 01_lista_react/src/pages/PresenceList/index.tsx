import React, { useState } from 'react';

function PresenceList() {
  const [inputValue, setInputValue] = useState<string>('');
  const [presenceList, setPresenceList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPresenceList([...presenceList, inputValue]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="person-name">Nome</label>
      <input
        type="text"
        id="person-name"
        value={inputValue}
        placeholder="Nome da pessoa..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Adicionar</button>

      <ol style={{ listStylePosition: 'inside' }}>
        {presenceList.map((person, index) => {
          return <li key={index}>{person}</li>;
        })}
      </ol>
    </form>
  );
}

export default PresenceList;
