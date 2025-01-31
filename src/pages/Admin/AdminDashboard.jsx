import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/manage-books">Manage Books</Link></li>
          <li><Link to="/admin/manage-orders">Manage Orders</Link></li>
          <li><Link to="/admin/manage-deliveries">Manage Deliveries</Link></li>
          <li><Link to="/admin/manage-feedbacks">Manage Feedbacks</Link></li>
          <li><Link to="/admin/manage-rental-books">Manage Rental Books</Link></li>
          <li><Link to="/admin/manage-pre-owned-books">Manage Pre-Owned Books</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;