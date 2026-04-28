import { useState } from 'react';
import { createInventory } from '../../services/inventoryApi';

export default function InventoryForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("Назва обов'язкова!"); // Валідація обов'язкових полів [cite: 74]

    const formData = new FormData();
    formData.append('inventory_name', name); // [cite: 67]
    formData.append('description', description); // [cite: 68]
    if (file) formData.append('photo', file); // [cite: 69]

    try {
      await createInventory(formData);
      onSuccess();
    } catch (error) {
      console.error("Помилка створення", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Назва" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Опис" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Додати</button>
    </form>
  );
}