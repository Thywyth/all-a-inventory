import { useState } from 'react';
import { createInventory } from '../../services/inventoryApi';

export default function InventoryForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("Назва інвентарю обов'язкова!"); 

    const newItem = {
      inventory_name: name,
      description: description,
      image: imageUrl || "https://via.placeholder.com/300x200?text=No+Image"
    };

    try {
      await createInventory(newItem);
      setName('');
      setDescription('');
      setImageUrl('');
      onSuccess(); // Оновлюємо таблицю після успішного додавання
    } catch (error) {
      console.error("Помилка створення", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd' }}>
      <h3>Додати нову позицію</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Назва інвентарю *" 
          required 
        />
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Опис" 
        />
        <input 
          type="text" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
          placeholder="URL зображення" 
        />
      </div>
      <button type="submit" style={{ cursor: 'pointer' }}>Додати на склад</button>
    </form>
  );
}