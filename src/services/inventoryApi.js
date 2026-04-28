import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Замініть на ваш реальний URL бекенду

export const getInventory = () => axios.get(`${API_URL}/inventory`); // [cite: 63]
export const getInventoryById = (id) => axios.get(`${API_URL}/inventory/${id}`); // [cite: 78]

// Створення через multipart/form-data [cite: 70, 71, 72, 73]
export const createInventory = (formData) => 
  axios.post(`${API_URL}/register`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }); 

// Незалежне редагування [cite: 86]
export const updateInventoryText = (id, data) => axios.put(`${API_URL}/inventory/${id}`, data); // [cite: 87, 88, 90]
export const updateInventoryPhoto = (id, formData) => 
  axios.put(`${API_URL}/inventory/${id}/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }); // [cite: 94, 95, 96]

export const deleteInventory = (id) => axios.delete(`${API_URL}/inventory/${id}`); // [cite: 98, 99, 100]