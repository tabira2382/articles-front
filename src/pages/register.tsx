import React, { useState } from "react";
import { useRouter } from 'next/router';
import { register } from '../lib/api';
import { setDefaultResultOrder } from "dns";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string|null>(null);
  const router = useRouter();


const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  try {
    const data = await register(username, email, password);
    localStorage.setItem('token', data.token);
    alert('Registration successful');
    router.push('/')
  }catch(error) {
    setError('Registration failed. Please try again');
  };
};


return (
  <div className="max-w-md mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
    <form onSubmit={handleRegister}>
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
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        Register
      </button>
    </form>
  </div>
  );
};

export default Register;