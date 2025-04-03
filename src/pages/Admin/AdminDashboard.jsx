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

  const [recentOrders, setRecentOrders] = useState([
    {
      id: '5141',
      customerName: 'Mohammad Dehgamwala',
      date: '2025-01-15',
      amount: '126.99',
      status: 'Pending'
    },
    {
      id: '5142',
      customerName: 'yug simariya',
      date: '2025-03-14',
      amount: '89.50',
      status: 'Delivered'
    },
    {
      id: '5143',
      customerName: 'Jiya',
      date: '2025-02-12',
      amount: '45.25',
      status: 'Pending'
    },
    {
      id: '5144',
      customerName: 'Dev Minipara',
      date: '2025-04-02',
      amount: '45.00',
      status: 'Pending'
    },
    {
      id: '5145',
      customerName: 'Keshav',
      date: '2025-03-23',
      amount: '72.03',
      status: 'Delivered'
    }
  ]);

  const navigate = useNavigate();

  const handleViewOrder = (orderId) => {
    // Navigate to order details page
    navigate(`/admin/orders/${orderId}`);
  };

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
                    {recentOrders.map(order => (
                      <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.customerName}</td>
                        <td>{order.date}</td>
                        <td>₹{order.amount}</td>
                        <td>
                          <span className={`status-${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="view-btn"
                            onClick={() => handleViewOrder(order.id)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
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