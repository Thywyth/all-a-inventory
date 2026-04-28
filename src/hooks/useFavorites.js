import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites'); // 
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites)); // 
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      if (prev.find(fav => fav.id === item.id)) {
        return prev.filter(fav => fav.id !== item.id); // Видалення з улюблених [cite: 155]
      }
      return [...prev, item];
    });
  };

  return { favorites, toggleFavorite };
}