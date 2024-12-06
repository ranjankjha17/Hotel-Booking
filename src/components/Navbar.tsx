import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hotel, UserCircle, LogOut } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { currentUser } = useApp();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Hotel size={32} />
            <span className="text-2xl font-bold">OYO</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/hotels" className="hover:text-gray-200">Hotels</Link>
            {currentUser?.role === 'admin' && (
              <Link to="/admin" className="hover:text-gray-200">Admin</Link>
            )}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-1 hover:text-gray-200">
                  <UserCircle size={24} />
                  <span>{currentUser.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-gray-200"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-gray-200">
                <UserCircle size={24} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}