// apiService.js - Frontend API service

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  // Helper method to get auth token
  getAuthToken() {
    return localStorage.getItem('token');
  }

  // Helper method to make authenticated requests
  async makeRequest(url, options = {}) {
    const token = this.getAuthToken();
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.msg || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication methods
  async register(userData) {
    return this.makeRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    return this.makeRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // User methods
  async getProfile() {
    return this.makeRequest('/user/profile');
  }

  async updateProfile(userData) {
    return this.makeRequest('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Utility methods
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = this.getAuthToken();
    if (!token) return false;

    try {
      // Basic token expiry check (you can make this more sophisticated)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  }

  // Get current user from localStorage
  getCurrentUser() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  }
}

export default new ApiService();