import { useEffect, useState } from 'react';
import { getInventory } from '../services/inventoryApi';
import InventoryCard from '../components/gallery/InventoryCard';
import InventoryDetails from '../components/inventory/InventoryDetails';
import { useFavorites } from '../hooks/useFavorites';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    getInventory().then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h1>Галерея товарів</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {items.map(item => (
          <InventoryCard 
            key={item.id} 
            item={item} 
            isFavorite={favorites.some(f => f.id === item.id)}
            onToggle={toggleFavorite}
            onQuickView={setSelectedItem}
          />
        ))}
      </div>
      {selectedItem && <InventoryDetails item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}