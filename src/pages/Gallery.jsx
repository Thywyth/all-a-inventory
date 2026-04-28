import { useEffect, useState } from 'react';
import { getInventory } from '../services/inventoryApi';
import InventoryCard from '../components/gallery/InventoryCard';
import { useFavorites } from '../hooks/useFavorites';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Стан loading [cite: 104]
  const { toggleFavorite, favorites } = useFavorites();

  useEffect(() => {
    getInventory().then(res => {
      setItems(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="skeleton-loading">Завантаження...</div>; // [cite: 160]

  return (
    <div className="gallery-grid"> {/* Адаптивний grid [cite: 139, 157] */}
      {items.map(item => (
        <InventoryCard 
          key={item.id} 
          item={item} 
          isFavorite={favorites.some(fav => fav.id === item.id)}
          onToggleFavorite={() => toggleFavorite(item)}
        />
      ))}
    </div>
  );
}