import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import GithubUsers from './GithubUsers';
import Chat from './pages/Chat';
import Counter from './pages/Counter';
import Home from './pages/Home';
import ImageGallery from './pages/ImageGallery';
import PresenceList from './pages/PresenceList';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="/galeria" element={<ImageGallery />} />
        <Route path="/chat" element={<Chat type="sender" />} />
        <Route path="/contador" element={<Counter />} />
        <Route path="/lista-presenca" element={<PresenceList />} />
        <Route path="/usuarios-github" element={<GithubUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
