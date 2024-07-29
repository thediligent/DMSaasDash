// src/api/authService.js
import axios from 'axios';

const API_URL = 'https://secure.diligentmarketing.solutions/api/v1';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password }, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        withCredentials: true
      });
      
      console.log('Login response:', response.data); // Log the entire response

      if (response.data && response.data.data && response.data.data.user) {
        const userData = {
          ...response.data.data.user,
          token: response.data.data.token
        };
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('User data stored in localStorage:', userData);
      } else {
        console.warn('User data not found in the response');
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      throw error;
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, {
        withCredentials: true
      });
      localStorage.removeItem('user');
      console.log('User logged out and data removed from storage');
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      console.log('Retrieved user from storage:', user);
      return user;
    }
    console.log('No user found in storage');
    return null;
  },
  updateEmployeeProfile: async (employeeId, userData) => {
    try {
      const response = await axios.put(`${API_URL}/employee/${employeeId}`, userData, {
        headers: { 
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': `Bearer ${authService.getToken()}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (response.data && response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      console.error('Profile update error:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  }
};

export default authService;