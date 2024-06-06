import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white border-b border-gray-700">
      <ul className="flex items-center justify-between">
        <div className="flex-1 ml-40 flex justify-center space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </div>
        <div className="flex space-x-4">
          <li>
            <Link href="/login">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <button className="px-4 py-2 bg-green-500 text-white rounded">Register</button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
