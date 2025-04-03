import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { FaArrowLeft } from "react-icons/fa";
import "./CheckoutOptions.css";

const CheckoutOptions = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (!isAuthenticated) {
      setMessage({ type: 'error', text: 'Please login to access checkout options.' });
      setTimeout(() => {
        setMessage({ type: '', text: '' });
        navigate('/login');
      }, 2000);
      return;
    }

    if (!cart || cart.length === 0) {
      setMessage({ type: 'error', text: 'Your cart is empty.' });
      setTimeout(() => {
        setMessage({ type: '', text: '' });
        navigate('/cart');
      }, 2000);
      return;
    }

    // Initialize selected options for each book
    const initialOptions = {};
    cart.forEach((item) => {
      initialOptions[item.id] = {
        purchaseType: "firsthand",
        rentalPeriod: "day",
      };
    });
    setSelectedOptions(initialOptions);
  }, [cart, isAuthenticated, navigate]);

  useEffect(() => {
    calculateTotal();
  }, [selectedOptions, cart]);

  const calculateItemPrice = (item) => {
    const basePrice = parseFloat(item.price) || 0;
    const option = selectedOptions[item.id] || { purchaseType: "firsthand", rentalPeriod: "day" };

    switch (option.purchaseType) {
      case "secondhand":
        return basePrice * 0.7;
      case "rental":
        switch (option.rentalPeriod) {
          case "day":
            return basePrice * 0.05;
          case "week":
            return basePrice * 0.2;
          case "month":
            return basePrice * 0.5;
          default:
            return basePrice * 0.05;
        }
      default:
        return basePrice;
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, item) => {
      const itemPrice = calculateItemPrice(item);
      const quantity = parseInt(item.quantity) || 1;
      return sum + (itemPrice * quantity);
    }, 0);
    setTotalAmount(total.toFixed(2));
  };

  const handleOptionChange = (bookId, field, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [bookId]: {
        ...prev[bookId],
        [field]: value,
      },
    }));
  };

  const handleCheckout = () => {
    try {
      const orderData = {
        items: cart.map((item) => ({
          ...item,
          purchaseType: selectedOptions[item.id].purchaseType,
          rentalPeriod: selectedOptions[item.id].rentalPeriod,
          price: calculateItemPrice(item),
        })),
        totalAmount,
        paymentMethod: "cod",
      };

      navigate("/order", { state: { orderData } });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to process checkout. Please try again." });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  return (
    <div className="checkout-options-container">
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
      <div className="checkout-options-header">
        <h1>Choose Purchase Options</h1>
        <button onClick={() => navigate("/cart")} className="back-to-cart">
          <FaArrowLeft /> Back to Cart
        </button>
      </div>
      <div className="checkout-options-content">
        {cart.map((item) => (
          <div key={item.id} className="book-option-card">
            <img src={item.image} alt={item.title} className="book-image" />
            <div className="book-details">
              <h3>{item.title}</h3>
              <p className="author">by {item.author}</p>
              <p className="original-price">Original Price: ₹{parseFloat(item.price).toFixed(2)}</p>
              <div className="purchase-options">
                <button
                  className={`option-button ${selectedOptions[item.id]?.purchaseType === "firsthand" ? "selected" : ""}`}
                  onClick={() => handleOptionChange(item.id, "purchaseType", "firsthand")}
                >
                  Buy New (₹{parseFloat(item.price).toFixed(2)})
                </button>
                <button
                  className={`option-button ${selectedOptions[item.id]?.purchaseType === "secondhand" ? "selected" : ""}`}
                  onClick={() => handleOptionChange(item.id, "purchaseType", "secondhand")}
                >
                  Buy Used (₹{(parseFloat(item.price) * 0.7).toFixed(2)})
                </button>
                <button
                  className={`option-button ${selectedOptions[item.id]?.purchaseType === "rental" ? "selected" : ""}`}
                  onClick={() => handleOptionChange(item.id, "purchaseType", "rental")}
                >
                  Rent
                </button>
              </div>
              {selectedOptions[item.id]?.purchaseType === "rental" && (
                <div className="rental-period">
                  <button
                    className={`period-button ${selectedOptions[item.id]?.rentalPeriod === "day" ? "selected" : ""}`}
                    onClick={() => handleOptionChange(item.id, "rentalPeriod", "day")}
                  >
                    Day (₹{(parseFloat(item.price) * 0.05).toFixed(2)})
                  </button>
                  <button
                    className={`period-button ${selectedOptions[item.id]?.rentalPeriod === "week" ? "selected" : ""}`}
                    onClick={() => handleOptionChange(item.id, "rentalPeriod", "week")}
                  >
                    Week (₹{(parseFloat(item.price) * 0.2).toFixed(2)})
                  </button>
                  <button
                    className={`period-button ${selectedOptions[item.id]?.rentalPeriod === "month" ? "selected" : ""}`}
                    onClick={() => handleOptionChange(item.id, "rentalPeriod", "month")}
                  >
                    Month (₹{(parseFloat(item.price) * 0.5).toFixed(2)})
                  </button>
                </div>
              )}
              <p className="selected-price">
                Selected Price: ₹{calculateItemPrice(item).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>Total Amount: ₹{totalAmount}</p>
          <p className="payment-method">Payment Method: Cash On Delivery</p>
        </div>
        <button onClick={handleCheckout} className="proceed-btn">
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutOptions; 