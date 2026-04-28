import { useEffect, useState } from 'react';
import { getInventory, deleteInventory } from '../../services/inventoryApi';

export default function InventoryTable() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await getInventory();
      setItems(response.data);
    } catch (err) {
      setError('Помилка при завантаженні даних');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Ви впевнені, що хочете видалити цю позицію?')) {
      try {
        await deleteInventory(id);
        fetchItems(); // Оновлюємо список після видалення
      } catch (err) {
        alert('Помилка при видаленні');
      }
    }
  };

  if (loading) return <div>Завантаження інвентарю...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (items.length === 0) return <div>Склад порожній</div>;

  return (
    <div>
      <h2>Список інвентарю</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img 
                  src={item.image} 
  alt={item.inventory_name} 
  style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                />
              </td>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => alert('Перегляд ' + item.id)}>Переглянути</button>
                <button onClick={() => alert('Редагування ' + item.id)}>Редагувати</button>
                <button onClick={() => handleDelete(item.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}