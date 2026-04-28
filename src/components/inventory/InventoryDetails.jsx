export default function InventoryDetails({ item, onClose }) {
  if (!item) return null;

  // Функція для закриття по кліку на темний фон (поза межами білого вікна)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}
    >
      <div style={{ background: 'white', padding: '25px', borderRadius: '8px', maxWidth: '400px', width: '90%', color: 'black', position: 'relative' }}>
        
        {/* Кнопка закриття (примусово чорна) */}
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'black' }}
        >
          ✖
        </button>
        
        {/* Заголовок (примусово чорний) */}
        <h2 style={{ marginTop: 0, color: 'black' }}>{item.inventory_name}</h2>
        
        {/* Зображення з обробкою помилки */}
        <img 
          src={item.image} 
          alt={item.inventory_name} 
          // Якщо картинка не завантажиться, покажемо надійнішу заглушку або сірий квадрат
          onError={(e) => { e.target.src = 'https://placehold.co/300x200/eeeeee/333333?text=Image+Error'; }}
          style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '4px', background: '#f0f0f0' }} 
        />
        
        <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>{item.description}</p>
      </div>
    </div>
  );
}