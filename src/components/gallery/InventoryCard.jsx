export default function InventoryCard({ item, isFavorite, onToggle, onQuickView }) {
  return (
    <div className="product-card" style={{
      border: '1px solid #ddd', borderRadius: '12px', padding: '15px', 
      background: '#fff', textAlign: 'center', transition: 'transform 0.2s',
      cursor: 'pointer'
    }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
       onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      
      <img src={item.image} alt={item.inventory_name} style={{ width: '100%', borderRadius: '8px' }} onClick={() => onQuickView(item)} />
      <h3 style={{ color: '#333' }}>{item.inventory_name}</h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={() => onQuickView(item)} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Швидкий перегляд</button>
        <button onClick={() => onToggle(item)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}