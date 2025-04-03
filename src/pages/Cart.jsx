import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2, FiArrowRight, FiShoppingBag } from "react-icons/fi";
import "./Cart.css";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { cart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setLoading(false);
  }, [isAuthenticated, navigate]);

  const handleQuantityChange = (id, change) => {
    updateQuantity(id, change);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return total + (price * quantity);
    }, 0);
  };

  const calculateDiscount = () => {
    return discountApplied ? Math.round(calculateSubtotal() * 0.1) : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "book10") {
      setDiscountApplied(true);
      setError("");
    } else {
      setError("Invalid coupon code");
      setDiscountApplied(false);
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    navigate("/checkout-options");
  };

  if (loading) {
    return (
      <div className="cart-container loading">
        <div className="loader"></div>
        <p>Loading your cart...</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-container empty">
        <div className="empty-cart-icon">
          <FiShoppingBag />
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any books to your cart yet.</p>
        <button className="continue-shopping" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="author">by {item.author}</p>
                <p className="price">₹{item.price}</p>
                <div className="item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      <FiPlus />
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
              <div className="item-subtotal">
                <p>₹{parseFloat(item.price) * (parseInt(item.quantity) || 1)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{calculateSubtotal()}</span>
          </div>
          {discountApplied && (
            <div className="summary-row discount">
              <span>Discount (10%)</span>
              <span>-₹{calculateDiscount()}</span>
            </div>
          )}
          <div className="summary-row delivery">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{calculateTotal()}</span>
          </div>

          <div className="coupon-section">
            <h3>Apply Coupon</h3>
            <div className="coupon-input">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={handleApplyCoupon}>Apply</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {discountApplied && (
              <p className="success-message">Coupon applied successfully!</p>
            )}
          </div>

          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
