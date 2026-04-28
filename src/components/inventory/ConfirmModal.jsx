export default function ConfirmModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Ви впевнені, що хочете видалити цю позицію?</h3>
        <button onClick={onConfirm}>Так, видалити</button>
        <button onClick={onCancel}>Скасувати</button>
      </div>
    </div>
  );
}