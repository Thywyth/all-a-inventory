import { useState } from 'react';
import InventoryTable from '../components/inventory/InventoryTable';
import InventoryForm from '../components/inventory/InventoryForm';

export default function AdminInventory() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Ця функція змусить таблицю оновитися після додавання нового товару
  const handleSuccess = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div>
      <h1>Адміністративна панель складу</h1>
      <InventoryForm onSuccess={handleSuccess} />
      <InventoryTable key={refreshTrigger} />
    </div>
  );
}