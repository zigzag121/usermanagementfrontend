import axios from 'axios';

//const API_URL = 'http://localhost:5000/api/users';
const API_URL = 'https://localhost:44372/api/user';

export const getUsers = () => axios.get(API_URL).then((res) => res.data.data);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`).then((res) => res.data.data);
export const updateUser = (id, userData) => axios.put(`${API_URL}/${id}`, userData).then((res) => res.data.data);
