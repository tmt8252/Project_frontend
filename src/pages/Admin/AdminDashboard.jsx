import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaShoppingCart, FaUsers, FaComments, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    books: 120,
    orders: 35,
    users: 82,
    feedbacks: 14
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    // You would fetch actual stats data from your API here
    // This is just placeholder data
  }, []);

  return (
    <div className="admin-container">
      {/* Admin Navbar */}
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

      <div className="admin-content-container">
        {/* Admin Sidebar */}
        <aside className="admin-sidebar">
          <ul>
            <li>
              <Link 
                to="/admin" 
                className={activeTab === 'dashboard' ? 'active' : ''}
                onClick={() => setActiveTab('dashboard')}
              >
                <FaTachometerAlt />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/manage-books" 
                className={activeTab === 'books' ? 'active' : ''}
                onClick={() => setActiveTab('books')}
              >
                <FaBook />
                <span>Books</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/manage-orders" 
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => setActiveTab('orders')}
              >
                <FaShoppingCart />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/manage-users" 
                className={activeTab === 'users' ? 'active' : ''}
                onClick={() => setActiveTab('users')}
              >
                <FaUsers />
                <span>Customers</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/manage-feedbacks" 
                className={activeTab === 'feedbacks' ? 'active' : ''}
                onClick={() => setActiveTab('feedbacks')}
              >
                <FaComments />
                <span>Feedbacks</span>
              </Link>
            </li>
          </ul>
        </aside>

        {/* Admin Dashboard Content */}
        <main className="admin-content">
          <div className="admin-dashboard-content">
            <h2>Dashboard Overview</h2>
            
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-icon books">
                  <FaBook />
                </div>
                <div className="stat-details">
                  <h3>Total Books</h3>
                  <p>{stats.books}</p>
                  <Link to="/admin/manage-books">Manage Books</Link>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon orders">
                  <FaShoppingCart />
                </div>
                <div className="stat-details">
                  <h3>Orders</h3>
                  <p>{stats.orders}</p>
                  <Link to="/admin/manage-orders">View Orders</Link>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon users">
                  <FaUsers />
                </div>
                <div className="stat-details">
                  <h3>Customers</h3>
                  <p>{stats.users}</p>
                  <Link to="/admin/manage-users">View Customers</Link>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon feedbacks">
                  <FaComments />
                </div>
                <div className="stat-details">
                  <h3>Feedbacks</h3>
                  <p>{stats.feedbacks}</p>
                  <Link to="/admin/manage-feedbacks">View Feedbacks</Link>
                </div>
              </div>
            </div>
            
            <div className="recent-section">
              <h3>Recent Orders</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-5142</td>
                      <td>John Doe</td>
                      <td>2023-04-15</td>
                      <td>$126.99</td>
                      <td><span className="status-pending">Pending</span></td>
                      <td><Link to="/admin/orders/5142">View</Link></td>
                    </tr>
                    <tr>
                      <td>#ORD-5141</td>
                      <td>Sarah Johnson</td>
                      <td>2023-04-14</td>
                      <td>$89.50</td>
                      <td><span className="status-delivered">Delivered</span></td>
                      <td><Link to="/admin/orders/5141">View</Link></td>
                    </tr>
                    <tr>
                      <td>#ORD-5140</td>
                      <td>Mike Williams</td>
                      <td>2023-04-14</td>
                      <td>$42.75</td>
                      <td><span className="status-shipped">Shipped</span></td>
                      <td><Link to="/admin/orders/5140">View</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;