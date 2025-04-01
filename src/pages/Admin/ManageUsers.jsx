import React, { useState, useEffect } from 'react';
import { FaSearch, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './ManageUsers.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Mock data for demo
  useEffect(() => {
    // In a real app, you would fetch from API
    const mockUsers = [
      {
        id: 1,
        username: 'johnsmith',
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, CA 12345',
        joinDate: '2023-01-15',
        orders: 8
      },
      {
        id: 2,
        username: 'sarahjones',
        name: 'Sarah Jones',
        email: 'sarah.jones@example.com',
        phone: '234-567-8901',
        address: '456 Oak Ave, Somewhere, NY 67890',
        joinDate: '2023-02-20',
        orders: 12
      },
      {
        id: 3,
        username: 'mikebrown',
        name: 'Mike Brown',
        email: 'mike.brown@example.com',
        phone: '345-678-9012',
        address: '789 Pine Rd, Nowhere, TX 54321',
        joinDate: '2023-03-10',
        orders: 3
      }
    ];
    
    setUsers(mockUsers);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you might call an API endpoint with the search term
  };

  const viewUserDetails = (user) => {
    setSelectedUser(user);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="manage-users-container">
      <div className="manage-users-header">
        <h2>Manage Customers</h2>
      </div>
      
      <div className="users-search-bar">
        <form onSubmit={handleSearch}>
          <div className="search-input-container">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by name, email, or username" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
      
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Orders</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.joinDate}</td>
                <td>{user.orders}</td>
                <td>
                  <button 
                    className="view-details-btn" 
                    onClick={() => viewUserDetails(user)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="no-results">No users found matching your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* User Details Modal */}
      {isDetailModalOpen && selectedUser && (
        <div className="user-modal-overlay">
          <div className="user-modal">
            <div className="user-modal-header">
              <h3>Customer Details</h3>
              <button className="close-btn" onClick={closeDetailModal}>&times;</button>
            </div>
            
            <div className="user-details">
              <div className="user-info-section">
                <h4>Basic Information</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Full Name</span>
                    <span className="info-value">{selectedUser.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Username</span>
                    <span className="info-value">{selectedUser.username}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <span className="info-value">
                      <FaEnvelope className="info-icon" />
                      {selectedUser.email}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <span className="info-value">
                      <FaPhoneAlt className="info-icon" />
                      {selectedUser.phone}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Address</span>
                    <span className="info-value">{selectedUser.address}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Join Date</span>
                    <span className="info-value">{selectedUser.joinDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="user-info-section">
                <h4>Orders History</h4>
                <div className="order-history-placeholder">
                  <p>This would display the customer's order history in a real implementation.</p>
                </div>
              </div>
            </div>
            
            <div className="modal-buttons">
              <button className="close-modal-btn" onClick={closeDetailModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
