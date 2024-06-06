import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow h-full">
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
