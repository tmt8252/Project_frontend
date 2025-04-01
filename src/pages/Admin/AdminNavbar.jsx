import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import './AdminDashboard.css';

const AdminNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="admin-navbar">
      <div className="admin-navbar-left">
        <Link to="/admin" className="admin-logo">
          <h1 className="store-name">BookStore Admin</h1>
        </Link>
      </div>
      
      <div className="admin-search">
        <form onSubmit={handleSearch}>
          <div className="search-bar">
            <button type="submit">
              <FaSearch className="search-icon" />
            </button>
            <input 
              type="text" 
              placeholder="Search books, orders, users..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
      
      <div className="admin-navbar-right">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
