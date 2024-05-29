import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 flex flex-col">
      <ul className="space-y-4 flex-grow">
        <li>
          <Link href="/" passHref>
            <span className="block p-2 hover:bg-gray-700 rounded">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/login" passHref>
            <span className="block p-2 hover:bg-gray-700 rounded">Login</span>
          </Link>
        </li>
        <li>
          <Link href="/register" passHref>
            <span className="block p-2 hover:bg-gray-700 rounded">Register</span>
          </Link>
        </li>
        <li>
          <Link href="/search" passHref>
            <span className="block p-2 hover:bg-gray-700 rounded">Search</span>
          </Link>
        </li>
        <li>
          <Link href="/profile" passHref>
            <span className="block p-2 hover:bg-gray-700 rounded">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
