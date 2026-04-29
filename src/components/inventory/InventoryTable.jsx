import { useEffect, useState } from 'react';
import { getInventory, deleteInventory } from '../../services/inventoryApi';
import ConfirmModal from './ConfirmModal';
import InventoryDetails from './InventoryDetails';
import EditModal from './EditModal';

export default function InventoryTable() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Стани для модальних вікон
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToView, setItemToView] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);

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

  // Функція, яка реально видаляє товар після підтвердження в модалці
  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      await deleteInventory(itemToDelete);
      setItemToDelete(null); // Закриваємо модалку
      fetchItems(); // Оновлюємо таблицю
    } catch (err) {
      alert('Помилка при видаленні');
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
              <td style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => setItemToView(item)}>Переглянути</button>
                <button onClick={() => setItemToEdit(item)}>Редагувати</button>
                <button onClick={() => setItemToDelete(item.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Наші модальні вікна */}
      <ConfirmModal 
        isOpen={!!itemToDelete} 
        onConfirm={confirmDelete} 
        onCancel={() => setItemToDelete(null)} 
      />
      <InventoryDetails 
        item={itemToView} 
        onClose={() => setItemToView(null)} 
      />

      <EditModal 
        item={itemToEdit} 
        isOpen={!!itemToEdit} 
        onClose={() => setItemToEdit(null)} 
        onSuccess={() => {
          setItemToEdit(null); // Закриваємо вікно
          fetchItems(); // Оновлюємо дані в таблиці
        }} 
/>
    </div>
  );
}