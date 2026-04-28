export default function InventoryDetails({ item, onClose }) {
  if (!item) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ background: 'white', padding: '25px', borderRadius: '8px', maxWidth: '400px', width: '90%', color: 'black', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
        <h2 style={{ marginTop: 0 }}>{item.inventory_name}</h2>
        <img src={item.image} alt={item.inventory_name} style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '4px' }} />
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.description}</p>
      </div>
    </div>
  );
}