import { useState, useEffect } from 'react';
import { updateInventory } from '../../services/inventoryApi';

export default function EditModal({ item, isOpen, onClose, onSuccess }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Як тільки модалка відкривається (отримує item), заповнюємо поля його даними
  useEffect(() => {
    if (item) {
      setName(item.inventory_name || '');
      setDescription(item.description || '');
      setImageUrl(item.image || '');
    }
  }, [item]);

  if (!isOpen || !item) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("Назва обов'язкова!");

    const updatedItem = {
      ...item, // Зберігаємо старий ID
      inventory_name: name,
      description: description,
      image: imageUrl
    };

    try {
      await updateInventory(item.id, updatedItem);
      onSuccess(); // Закриваємо модалку і оновлюємо таблицю
    } catch (error) {
      console.error("Помилка оновлення", error);
      alert("Не вдалося оновити товар");
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ background: 'white', padding: '25px', borderRadius: '8px', maxWidth: '400px', width: '90%', color: 'black', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'black' }}>✖</button>
        <h3 style={{ marginTop: 0 }}>Редагувати товар</h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>Назва інвентарю:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>Опис:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', minHeight: '80px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>URL зображення:</label>
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          
          <button type="submit" style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Зберегти зміни</button>
        </form>
      </div>
    </div>
  );
}