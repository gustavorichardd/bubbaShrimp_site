import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:3333',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'company': 1,
   }
});

export default api;