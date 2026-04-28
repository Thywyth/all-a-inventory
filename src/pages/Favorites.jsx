import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';
import { useState } from 'react';
import InventoryDetails from '../components/inventory/InventoryDetails';

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Ваші Улюблені ❤️</h1>
      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>Тут поки порожньо... Додайте товари з Галереї!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {favorites.map(item => (
            <InventoryCard 
              key={item.id} 
              item={item} 
              isFavorite={true}
              onToggle={toggleFavorite}
              onQuickView={setSelectedItem}
            />
          ))}
        </div>
      )}
      
      {/* Додаємо можливість перегляду деталей навіть з Улюблених */}
      {selectedItem && <InventoryDetails item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}