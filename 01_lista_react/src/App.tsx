import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import Chat from "./pages/Chat";
import Counter from "./pages/Counter";
import GithubUsers from "./pages/GithubUsers";
import Home from "./pages/Home";
import ImageGallery from "./pages/ImageGallery";
import LightDark from "./pages/LightDark";
import PresenceList from "./pages/PresenceList";

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
        <Route path="/light-dark" element={<LightDark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
