import { useState } from 'react';
import { User } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

// API Service
const apiService = {
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },
  
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  }
};

export default function Registration() {
  const [formData, setFormData] = useState({
    fullname: '', // Changed from 'name' to 'fullname'
    username: '',
    password: '',
    gender: 'male'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Validate form
      if (!formData.fullname || !formData.username || !formData.password) {
        setMessage('Please fill in all required fields');
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setMessage('Password must be at least 6 characters long');
        setLoading(false);
        return;
      }

      const response = await apiService.register(formData);
      
      if (response.success) {
        setMessage('Registration successful! Redirecting to login...');
        // Reset form
        setFormData({
          fullname: '', // Changed from 'name' to 'fullname'
          username: '',
          password: '',
          gender: 'male'
        });
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        // Handle validation errors array
        if (response.errors && Array.isArray(response.errors)) {
          setMessage(response.errors.join(', '));
        } else {
          setMessage(response.msg || 'Registration failed');
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <h1 className="mt-2 text-xl font-semibold text-indigo-600">Create Account</h1>
          <p className="text-sm text-indigo-600">Sign up in no time.</p>
        </div>

        {message && (
          <div className={`mb-3 p-2 rounded text-sm ${
            message.includes('successful') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              name="fullname" // Changed from 'name' to 'fullname'
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Username *</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="At least 6 characters"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-1 mt-3 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}