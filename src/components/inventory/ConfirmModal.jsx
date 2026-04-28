export default function ConfirmModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', color: 'black' }}>
        <h3>Ви впевнені, що хочете видалити цю позицію?</h3>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={onConfirm} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>Так, видалити</button>
          <button onClick={onCancel} style={{ background: '#ddd', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>Скасувати</button>
        </div>
      </div>
    </div>
  );
}