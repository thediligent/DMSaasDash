// src/api/apiService.js
import axios from 'axios';

const API_URL = 'https://secure.diligentmarketing.solutions/api/v1';

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  },
  withCredentials: true // This is crucial for including the session cookie in all requests
});

export default apiService;