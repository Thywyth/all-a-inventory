import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';
import Gallery from './pages/Gallery';
import Favorites from './pages/Favorites';
import './App.css'; // Тут підключаємо стилізацію [cite: 22]

export default function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h2>All A - Inventory System</h2>
        <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center', padding: '20px 0', fontSize: '18px' }}>
          <NavLink to="/" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Галерея</NavLink>
          <NavLink to="/favorites" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Улюблені</NavLink>
          <NavLink to="/admin" style={{ textDecoration: 'none', color: '#646cff', fontWeight: 'bold' }}>Адмін-панель</NavLink>
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