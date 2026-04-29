export default function InventoryCard({ item, isFavorite, onToggle, onQuickView }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', // Робимо картку колонкою
      border: '1px solid #ddd', borderRadius: '12px', padding: '15px', 
      background: '#fff', textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer', height: '100%', boxSizing: 'border-box'
    }} 
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
      
      {/* Верхня частина з картинкою та назвою (вона буде розтягуватись) */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src={item.image} 
          alt={item.inventory_name} 
          style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '15px' }} 
          onClick={() => onQuickView && onQuickView(item)} 
        />
        <h3 style={{ color: '#333', fontSize: '16px', margin: '0 0 10px 0' }}>{item.inventory_name}</h3>
      </div>
      
      {/* Нижня частина з кнопками (завжди притиснута донизу) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <button 
          onClick={() => onQuickView && onQuickView(item)} 
          style={{ background: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Швидкий перегляд
        </button>
        <button 
          onClick={() => onToggle(item)} 
          style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}