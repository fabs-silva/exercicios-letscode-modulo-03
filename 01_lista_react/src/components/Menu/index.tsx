import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/galeria">Galeria de Imagens</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/contador">Contador</Link>
      <Link to="/lista-presenca">Lista de Presença</Link>
      <Link to="/usuarios-github">Usuários Github</Link>
    </>
  );
}
