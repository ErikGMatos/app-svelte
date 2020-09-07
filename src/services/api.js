import axios from 'axios';
import { tokenJWT } from './tokenJwt'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
})
api.defaults.headers.common['Authorization'] = `Bearer ${tokenJWT}`;

export default api;