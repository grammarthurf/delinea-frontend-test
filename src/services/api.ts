import axios from 'axios';

const api = axios.create({
  baseURL: 'http://delineaapi.herokuapp.com',
});

export default api;
