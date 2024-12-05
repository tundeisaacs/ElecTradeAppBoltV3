import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Bell, User } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PowerTrade</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/markets"
              className={`px-3 py-2 font-medium ${
                isActive('/markets') ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Markets
            </Link>
            <Link
              to="/portfolio"
              className={`px-3 py-2 font-medium ${
                isActive('/portfolio') ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/history"
              className={`px-3 py-2 font-medium ${
                isActive('/history') ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              History
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;