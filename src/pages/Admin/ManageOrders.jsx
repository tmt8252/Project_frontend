import React, { useState, useEffect } from 'react';
import { FaSearch, FaEye, FaCheck, FaTruck, FaBox } from 'react-icons/fa';
import './ManageOrders.css';
import './AdminDashboard.css';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';


const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Mock data for demo
  useEffect(() => {
    // In a real app, you would fetch from API
    const mockOrders = [
      {
        id: 'ORD-5142',
        customer: {
          id: 1,
          name: 'John Smith',
          email: 'john.smith@example.com',
          phone: '123-456-7890'
        },
        orderDate: '2023-04-15',
        deliveryDate: '2023-04-20',
        amount: 126.99,
        status: 'pending',
        paymentMethod: 'Credit Card',
        items: [
          { id: 1, title: 'To Kill a Mockingbird', price: 12.99, quantity: 1 },
          { id: 2, title: '1984', price: 10.99, quantity: 2 },
          { id: 3, title: 'The Great Gatsby', price: 11.50, quantity: 2 }
        ],
        shippingAddress: '123 Main St, Anytown, CA 12345'
      },
      {
        id: 'ORD-5141',
        customer: {
          id: 2,
          name: 'Sarah Jones',
          email: 'sarah.jones@example.com',
          phone: '234-567-8901'
        },
        orderDate: '2023-04-14',
        deliveryDate: '2023-04-19',
        amount: 89.50,
        status: 'delivered',
        paymentMethod: 'PayPal',
        items: [
          { id: 4, title: 'Pride and Prejudice', price: 14.50, quantity: 1 },
          { id: 5, title: 'The Catcher in the Rye', price: 9.99, quantity: 1 },
          { id: 6, title: 'The Hobbit', price: 15.99, quantity: 1 }
        ],
        shippingAddress: '456 Oak Ave, Somewhere, NY 67890'
      },
      {
        id: 'ORD-5140',
        customer: {
          id: 3,
          name: 'Mike Brown',
          email: 'mike.brown@example.com',
          phone: '345-678-9012'
        },
        orderDate: '2023-04-14',
        deliveryDate: '2023-04-21',
        amount: 42.75,
        status: 'shipped',
        paymentMethod: 'Debit Card',
        items: [
          { id: 7, title: 'The Alchemist', price: 13.25, quantity: 1 },
          { id: 8, title: 'Brave New World', price: 12.50, quantity: 1 }
        ],
        shippingAddress: '789 Pine Rd, Nowhere, TX 54321'
      },
      {
        id: 'ORD-5139',
        customer: {
          id: 4,
          name: 'Emily Davis',
          email: 'emily.davis@example.com',
          phone: '456-789-0123'
        },
        orderDate: '2023-04-13',
        deliveryDate: '2023-04-18',
        amount: 78.25,
        status: 'processing',
        paymentMethod: 'Credit Card',
        items: [
          { id: 9, title: 'The Lord of the Rings', price: 29.99, quantity: 1 },
          { id: 10, title: 'Harry Potter', price: 24.99, quantity: 1 },
          { id: 11, title: 'The Hunger Games', price: 11.99, quantity: 1 }
        ],
        shippingAddress: '101 Elm St, Elsewhere, FL 13579'
      }
    ];

    setOrders(mockOrders);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you might call an API endpoint with the search term
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedOrder(null);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    // In a real app, you would call an API to update the status
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);

    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'processing': return 'status-processing';
      case 'shipped': return 'status-shipped';
      case 'delivered': return 'status-delivered';
      case 'cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FaBox />;
      case 'processing': return <FaBox />;
      case 'shipped': return <FaTruck />;
      case 'delivered': return <FaCheck />;
      default: return null;
    }
  };

  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case 'pending': return 'processing';
      case 'processing': return 'shipped';
      case 'shipped': return 'delivered';
      default: return currentStatus;
    }
  };

  const filteredOrders = orders
    .filter(order =>
      (statusFilter === 'all' || order.status === statusFilter) &&
      (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="admin-container">
      <AdminNavbar />

      <div className="admin-content-container">
        <AdminSidebar />
        <div className="manage-orders-container">
          <div className="manage-orders-header">
            <h2>Manage Orders</h2>
          </div>

          <div className="orders-filters">
            <div className="orders-search-bar">
              <form onSubmit={handleSearch}>
                <div className="search-input-container">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by order ID, customer name, or email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <div className="status-filter">
              <label htmlFor="status-select">Filter by Status:</label>
              <select
                id="status-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Order Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer.name}</td>
                    <td>{order.orderDate}</td>
                    <td>${order.amount.toFixed(2)}</td>
                    <td>
                      <span className={`status-badge ${getStatusBadgeClass(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="actions-cell">
                      <button
                        className="view-details-btn"
                        onClick={() => viewOrderDetails(order)}
                      >
                        <FaEye />
                        <span>View</span>
                      </button>

                      {order.status !== 'delivered' && order.status !== 'cancelled' && (
                        <button
                          className="update-status-btn"
                          onClick={() => updateOrderStatus(order.id, getNextStatus(order.status))}
                        >
                          {order.status === 'pending' && 'Process'}
                          {order.status === 'processing' && 'Ship'}
                          {order.status === 'shipped' && 'Deliver'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan="6" className="no-results">No orders found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Order Details Modal */}
          {isDetailModalOpen && selectedOrder && (
            <div className="order-modal-overlay">
              <div className="order-modal">
                <div className="order-modal-header">
                  <h3>Order Details</h3>
                  <button className="close-btn" onClick={closeDetailModal}>&times;</button>
                </div>

                <div className="order-details">
                  <div className="order-summary">
                    <div className="order-info">
                      <div className="order-id">
                        <h4>Order {selectedOrder.id}</h4>
                        <span className={`status-badge ${getStatusBadgeClass(selectedOrder.status)}`}>
                          {getStatusIcon(selectedOrder.status)}
                          {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                        </span>
                      </div>
                      <div className="order-dates">
                        <div>
                          <span className="info-label">Order Date:</span>
                          <span>{selectedOrder.orderDate}</span>
                        </div>
                        <div>
                          <span className="info-label">Expected Delivery:</span>
                          <span>{selectedOrder.deliveryDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="order-actions">
                      {selectedOrder.status !== 'delivered' && selectedOrder.status !== 'cancelled' && (
                        <button
                          className="update-status-btn"
                          onClick={() => updateOrderStatus(selectedOrder.id, getNextStatus(selectedOrder.status))}
                        >
                          {selectedOrder.status === 'pending' && 'Process Order'}
                          {selectedOrder.status === 'processing' && 'Mark as Shipped'}
                          {selectedOrder.status === 'shipped' && 'Mark as Delivered'}
                        </button>
                      )}
                      <button
                        className="cancel-order-btn"
                        onClick={() => updateOrderStatus(selectedOrder.id, 'cancelled')}
                        disabled={selectedOrder.status === 'delivered' || selectedOrder.status === 'cancelled'}
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>

                  <div className="order-sections">
                    <div className="order-section">
                      <h4>Customer Information</h4>
                      <div className="customer-info">
                        <p><strong>Name:</strong> {selectedOrder.customer.name}</p>
                        <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
                        <p><strong>Phone:</strong> {selectedOrder.customer.phone}</p>
                      </div>
                    </div>

                    <div className="order-section">
                      <h4>Shipping Address</h4>
                      <p>{selectedOrder.shippingAddress}</p>
                    </div>
                  </div>

                  <div className="order-section">
                    <h4>Order Items</h4>
                    <div className="order-items">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedOrder.items.map(item => (
                            <tr key={item.id}>
                              <td>{item.title}</td>
                              <td>{item.quantity}</td>
                              <td>${item.price.toFixed(2)}</td>
                              <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="order-total">
                    <div className="total-row">
                      <span>Subtotal:</span>
                      <span>${selectedOrder.amount.toFixed(2)}</span>
                    </div>
                    <div className="total-row">
                      <span>Shipping:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="total-row grand-total">
                      <span>Total:</span>
                      <span>${selectedOrder.amount.toFixed(2)}</span>
                    </div>
                    <div className="payment-method">
                      <span>Payment Method:</span>
                      <span>{selectedOrder.paymentMethod}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;