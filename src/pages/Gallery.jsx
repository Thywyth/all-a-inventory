import { useEffect, useState } from 'react';
import { getInventory } from '../services/inventoryApi';
import InventoryCard from '../components/gallery/InventoryCard';
import InventoryDetails from '../components/inventory/InventoryDetails';
import { useFavorites } from '../hooks/useFavorites';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();
  
  // Додаємо стани для UI/UX
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Імітуємо невеличку затримку мережі (півсекунди), щоб було видно красиве завантаження
    setTimeout(() => {
      getInventory()
        .then(res => {
          setItems(res.data);
          setError(null);
        })
        .catch(err => setError('Не вдалося завантажити товари 😢. Перевірте з\'єднання з сервером.'))
        .finally(() => setLoading(false));
    }, 500);
  }, []);

  // Приємний empty/loading state
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px', color: '#666' }}>
        ⏳ Завантажуємо інвентар з бази даних...
      </div>
    );
  }

  // Приємний error state
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px', color: '#dc2626' }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Галерея товарів "All A"</h1>
      
      {items.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>На складі поки немає товарів.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {items.map(item => (
            <InventoryCard 
              key={item.id} 
              item={item} 
              isFavorite={favorites.some(f => String(f.id) === String(item.id))}
              onToggle={toggleFavorite}
              onQuickView={setSelectedItem}
            />
          ))}
        </div>
      )}

      {selectedItem && <InventoryDetails item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}