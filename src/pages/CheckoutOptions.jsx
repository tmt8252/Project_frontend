import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import "./CheckoutOptions.css";

const CheckoutOptions = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { isAuthenticated } = useAuth();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      navigate("/cart");
      return;
    }

    // Initialize selected options for each book
    const initialOptions = {};
    cart.forEach((item) => {
      initialOptions[item.id] = {
        type: "firsthand",
        rentalPeriod: "day",
      };
    });
    setSelectedOptions(initialOptions);
  }, [cart, isAuthenticated, navigate]);

  useEffect(() => {
    // Calculate total amount based on selected options
    const total = cart.reduce((sum, item) => {
      const option = selectedOptions[item.id];
      if (!option) return sum;

      let price = item.price;
      if (option.type === "secondhand") {
        price = price * 0.7; // 70% of original price
      } else if (option.type === "rental") {
        switch (option.rentalPeriod) {
          case "day":
            price = price * 0.05; // 5% per day
            break;
          case "week":
            price = price * 0.2; // 20% per week
            break;
          case "month":
            price = price * 0.5; // 50% per month
            break;
          default:
            break;
        }
      }

      return sum + price * (item.quantity || 1);
    }, 0);

    setTotalAmount(total);
  }, [cart, selectedOptions]);

  const handleOptionChange = (bookId, type, rentalPeriod = null) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [bookId]: {
        type,
        rentalPeriod: rentalPeriod || prev[bookId]?.rentalPeriod || "day",
      },
    }));
  };

  const handleCheckout = () => {
    // Prepare order data
    const orderData = {
      items: cart.map((item) => ({
        ...item,
        purchaseType: selectedOptions[item.id].type,
        rentalPeriod: selectedOptions[item.id].rentalPeriod,
        price: calculateItemPrice(item, selectedOptions[item.id]),
      })),
      total: totalAmount,
      paymentMethod: "Cash On Delivery",
    };

    // Navigate to order page with order data
    navigate("/order", { state: { orderData } });
  };

  const calculateItemPrice = (item, option) => {
    let price = item.price;
    if (option.type === "secondhand") {
      price = price * 0.7;
    } else if (option.type === "rental") {
      switch (option.rentalPeriod) {
        case "day":
          price = price * 0.05;
          break;
        case "week":
          price = price * 0.2;
          break;
        case "month":
          price = price * 0.5;
          break;
        default:
          break;
      }
    }
    return price * (item.quantity || 1);
  };

  return (
    <div className="checkout-options-container">
      <h1>Choose Purchase Options</h1>
      <div className="checkout-options-content">
        {cart.map((item) => (
          <div key={item.id} className="book-option-card">
            <div className="book-info">
              <img src={item.image} alt={item.title} className="book-image" />
              <div className="book-details">
                <h3>{item.title}</h3>
                <p className="author">by {item.author}</p>
                <p className="quantity">Quantity: {item.quantity || 1}</p>
              </div>
            </div>

            <div className="purchase-options">
              <div className="option-group">
                <h4>Purchase Type</h4>
                <div className="option-buttons">
                  <button
                    className={`option-button ${
                      selectedOptions[item.id]?.type === "firsthand"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleOptionChange(item.id, "firsthand")}
                  >
                    Firsthand
                  </button>
                  <button
                    className={`option-button ${
                      selectedOptions[item.id]?.type === "secondhand"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleOptionChange(item.id, "secondhand")}
                  >
                    Secondhand (30% off)
                  </button>
                  <button
                    className={`option-button ${
                      selectedOptions[item.id]?.type === "rental"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleOptionChange(item.id, "rental")}
                  >
                    Rent
                  </button>
                </div>
              </div>

              {selectedOptions[item.id]?.type === "rental" && (
                <div className="option-group">
                  <h4>Rental Period</h4>
                  <div className="option-buttons">
                    <button
                      className={`option-button ${
                        selectedOptions[item.id]?.rentalPeriod === "day"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleOptionChange(item.id, "rental", "day")
                      }
                    >
                      Per Day (5%)
                    </button>
                    <button
                      className={`option-button ${
                        selectedOptions[item.id]?.rentalPeriod === "week"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleOptionChange(item.id, "rental", "week")
                      }
                    >
                      Per Week (20%)
                    </button>
                    <button
                      className={`option-button ${
                        selectedOptions[item.id]?.rentalPeriod === "month"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleOptionChange(item.id, "rental", "month")
                      }
                    >
                      Per Month (50%)
                    </button>
                  </div>
                </div>
              )}

              <div className="price-summary">
                <p>Price: ₹{calculateItemPrice(item, selectedOptions[item.id])}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
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
          <div className="checkout-actions">
            <button
              className="secondary-button"
              onClick={() => navigate("/cart")}
            >
              Back to Cart
            </button>
            <button className="primary-button" onClick={handleCheckout}>
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOptions; 