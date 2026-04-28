export default function InventoryCard({ item, isFavorite, onToggleFavorite }) {
  // Реалізація картки з hover-ефектами та кнопкою "Улюблені" [cite: 151, 152, 158]
  return (
    <div className="card hover-effect">
      <img src={`http://localhost:3000/api/inventory/${item.id}/photo`} alt={item.inventory_name} /> {/* [cite: 137] */}
      <h3>{item.inventory_name}</h3> {/* [cite: 138] */}
      <button onClick={onToggleFavorite}>
        {isFavorite ? 'Видалити з улюблених' : 'Додати в Улюблені'}
      </button>
      <button onClick={() => alert('Quick View Modal')}>Швидкий перегляд</button> {/* [cite: 142] */}
    </div>
  );
}