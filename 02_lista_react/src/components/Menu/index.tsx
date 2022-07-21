import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/frases-chaves">Frases de Chaves</Link>
      <Link to="/jogo-da-velha">Jogo da Velha</Link>
      <Link to="/timer">Timer</Link>
    </nav>
  );
}
