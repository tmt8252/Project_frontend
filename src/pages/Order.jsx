import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiCreditCard, FiDollarSign, FiCheck, FiMapPin, FiUser, FiPhone, FiMail } from "react-icons/fi";
import "./Order.css";
import { useAuth } from "../contexts/AuthContext";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Default values for the form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // Form validation states
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Get cart data from location state or use empty defaults
  const cartItems = location.state?.cartItems || [];
  const totalAmount = location.state?.total || 0;

  // Redirect to cart if no items
  if (cartItems.length === 0 && !orderComplete) {
    navigate("/cart");
    return null;
  }

  // Check authentication
  if (!isAuthenticated && !orderComplete) {
    navigate("/login");
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    }

    // Card validation only if payment method is 'card'
    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Card number should be 16 digits";
      }

      if (!formData.cardName.trim()) {
        newErrors.cardName = "Name on card is required";
      }

      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Use MM/YY format";
      }

      if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV should be 3 or 4 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate order processing
      setTimeout(() => {
        // Generate a random order number
        const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
        setOrderNumber(randomOrderNumber);
        setOrderComplete(true);
        setIsProcessing(false);
      }, 2000);
    }
  };

  if (orderComplete) {
    return (
      <div className="order-success-container">
        <div className="order-success">
          <div className="success-icon">
            <FiCheck />
          </div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your purchase.</p>
          <div className="order-details">
            <p>
              <strong>Order Number:</strong> #{orderNumber}
            </p>
            <p>
              <strong>Total Amount:</strong> ₹{totalAmount}
            </p>
            <p>A confirmation email has been sent to {formData.email}.</p>
          </div>
          <div className="success-actions">
            <button className="primary-button" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button
              className="secondary-button"
              onClick={() => navigate("/profile")}
            >
              View My Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-container">
      <h1>Checkout</h1>
      <div className="order-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h2>
              <FiUser className="section-icon" />
              Customer Information
            </h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && (
                  <span className="error-message">{errors.fullName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-icon-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
                  />
                </div>
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-icon-wrapper">
                <FiPhone className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? "error" : ""}
                />
              </div>
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="form-section">
            <h2>
              <FiMapPin className="section-icon" />
              Shipping Address
            </h2>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? "error" : ""}
              />
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? "error" : ""}
                />
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={errors.state ? "error" : ""}
                />
                {errors.state && (
                  <span className="error-message">{errors.state}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={errors.zipCode ? "error" : ""}
                />
                {errors.zipCode && (
                  <span className="error-message">{errors.zipCode}</span>
                )}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <div className="payment-method">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleInputChange}
                />
                <label htmlFor="card">
                  <FiCreditCard />
                  Credit / Debit Card
                </label>
              </div>
              <div className="payment-method">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleInputChange}
                />
                <label htmlFor="cod">
                  <FiDollarSign />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="card-details">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className={errors.cardNumber ? "error" : ""}
                  />
                  {errors.cardNumber && (
                    <span className="error-message">{errors.cardNumber}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className={errors.cardName ? "error" : ""}
                  />
                  {errors.cardName && (
                    <span className="error-message">{errors.cardName}</span>
                  )}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      className={errors.expiryDate ? "error" : ""}
                    />
                    {errors.expiryDate && (
                      <span className="error-message">{errors.expiryDate}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength="4"
                      className={errors.cvv ? "error" : ""}
                    />
                    {errors.cvv && (
                      <span className="error-message">{errors.cvv}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`place-order-button ${isProcessing ? "processing" : ""}`}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div className="summary-item" key={item.id}>
                <div className="item-image">
                  <img src={item.coverImage} alt={item.title} />
                  <span className="item-quantity">{item.quantity}</span>
                </div>
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p className="author">by {item.author}</p>
                </div>
                <div className="item-price">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
