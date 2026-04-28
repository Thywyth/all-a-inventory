import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('all-a-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('all-a-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      // Перевіряємо, чи товар вже є, перетворюючи ID на рядки для надійності
      const exists = prev.find(fav => String(fav.id) === String(item.id));
      if (exists) {
        return prev.filter(fav => String(fav.id) !== String(item.id)); // Видаляємо
      } else {
        return [...prev, item]; // Додаємо
      }
    });
  };

  return { favorites, toggleFavorite };
}