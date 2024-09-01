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
    <div className="login-container">
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login