import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import Gallery from './pages/Gallery';
import Favorites from './pages/Favorites';
import './App.css'; // Тут підключаємо стилізацію [cite: 22]

export default function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h2>All A - Inventory System</h2>
        <nav>
          <Link to="/">Галерея</Link>
          <Link to="/favorites">Улюблені</Link>
          <Link to="/admin">Адмін-панель</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/admin/*" element={<AdminInventory />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}