import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const getInventory = () => axios.get(`${API_URL}/inventory`);
export const getInventoryById = (id) => axios.get(`${API_URL}/inventory/${id}`);

export const createInventory = (data) => axios.post(`${API_URL}/inventory`, data);

export const updateInventoryText = (id, data) => axios.put(`${API_URL}/inventory/${id}`, data);
export const updateInventoryPhoto = (id, formData) => 
  axios.put(`${API_URL}/inventory/${id}/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

export const deleteInventory = (id) => axios.delete(`${API_URL}/inventory/${id}`);

// Додай цей рядок до існуючих функцій
export const updateInventory = (id, data) => axios.put(`${API_URL}/inventory/${id}`, data);