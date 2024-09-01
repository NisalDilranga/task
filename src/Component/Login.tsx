import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous error

    try {
      const response = await axios.post('https://skill-test.similater.website/api/v1/user/login', {
        email: email,
        password: password,
      });

      if (response.data.status && response.data.code === '200') {
        // Save token and other data as needed
        localStorage.setItem('token', response.data.data.accessToken);
        localStorage.setItem('role', response.data.data.role.toString());
        localStorage.setItem('userId', response.data.data.userId.toString());

        // Redirect to another page
        navigate('/dashboard'); // Change '/dashboard' to your desired route
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form
      onSubmit={handleLogin}
      className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
  </div>
  
  )
}

export default Login