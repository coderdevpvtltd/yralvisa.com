import { useState } from 'react';
import { User } from 'lucide-react';

export const Login = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Here you would typically make an API call to authenticate the user
    alert('Login successful!');
    // In a real app, you would use React Router to navigate to a dashboard
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

        <form onSubmit={handleSubmit} className="space-y-4">
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
            type="submit" 
            className="w-full py-2 mt-6 font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

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
};

export default Login;