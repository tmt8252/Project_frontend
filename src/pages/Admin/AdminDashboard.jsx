import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaShoppingCart, FaUsers, FaComments, FaSignOutAlt, FaSearch, FaBookReader, FaBookOpen } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import './AdminDashboard.css';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  
  const [stats, setStats] = useState({
    books: 120,
    orders: 35,
    users: 82,
    feedbacks: 14
  });


  useEffect(() => {
    // You would fetch actual stats data from your API here
    // This is just placeholder data
  }, []);

  return (
    <div className="admin-container">
      <AdminNavbar />

      <div className="admin-content-container">
        <AdminSidebar />
        
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