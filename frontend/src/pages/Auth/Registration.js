import { useState } from 'react';
import { User } from 'lucide-react';


export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: 'user'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration form submitted:', formData);
    // Here you would typically make an API call to register the user
    // After successful registration, redirect to login page
    alert('Registration successful! Redirecting to login...');
    // In a real app, you would use React Router: navigate('/login');
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

        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex mt-1">
              <div className="flex items-center px-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                <span className="text-gray-500 text-sm">+91</span>
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-1 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-1 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button 
            className="w-full py-1 mt-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1"
          >
            Register
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
