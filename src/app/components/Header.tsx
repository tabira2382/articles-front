import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white border-b border-gray-700">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;