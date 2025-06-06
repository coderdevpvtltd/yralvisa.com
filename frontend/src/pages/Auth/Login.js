import { useState } from 'react';
import { User } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

// API Service
const apiService = {
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

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
      if (!formData.username || !formData.password) {
        setMessage('Please fill in all required fields');
        setLoading(false);
        return;
      }

      const response = await apiService.login(formData);
      
      if (response.success && response.token) {
        setMessage('Login successful! Redirecting to home...');
        
        // Store token and user data (Note: In Claude artifacts, localStorage won't persist)
        // In a real application, these would be stored properly
        try {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        } catch (e) {
          console.log('Storage not available in this environment');
        }
        
        // Clear form
        setFormData({
          username: '',
          password: ''
        });
        
        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
          window.location.href = '/home'; // Changed from '/dashboard' to '/home'
        }, 1500);
      } else {
        // Handle validation errors array
        if (response.errors && Array.isArray(response.errors)) {
          setMessage(response.errors.join(', '));
        } else {
          setMessage(response.msg || 'Login failed');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
            <User className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-indigo-600">Welcome back</h1>
          <p className="text-indigo-600">Login to continue.</p>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded text-sm ${
            message.includes('successful') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username *</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
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
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-2 mt-6 font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}