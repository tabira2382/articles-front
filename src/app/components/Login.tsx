import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { login } from '@/lib/api';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string| null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      alert('Login successful');
      router.push('/')
    } catch(error){
      setError('invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;