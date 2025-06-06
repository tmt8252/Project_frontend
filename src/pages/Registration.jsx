import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiPhone, FiArrowRight } from "react-icons/fi";
import backgroundImage from "../Assets/books.jpg";
import "../pages/Registration.css";
import { useAuth } from "../contexts/AuthContext";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const navigate = useNavigate();
  const { register } = useAuth();

  const NavigateLogin = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setPassword(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match!' });
      setIsLoading(false);
      return;
    }

    try {
      await register({ username, email, password, number });
      setMessage({ type: 'success', text: 'Registration successful! Redirecting to login...' });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Registration failed. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="registerBackground"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="register-container">
        <div className="register-box">
          <div className="register-header">
            <div className="avatar">
              <FiUser />
            </div>
            <h2>Create Account</h2>
            <p>Join our community today</p>
          </div>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <div className="input-icon-wrapper">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon-wrapper">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon-wrapper">
                <input
                  type="tel"
                  id="contact"
                  placeholder="Enter your contact no"
                  value={number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              className={`register-button ${isLoading ? "loading" : ""}`}
              type="submit"
              disabled={isLoading}
            >
              {!isLoading && (
                <>
                  Create Account
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          <div className="register-footer">
            <p>Already have an account?</p>
            <button className="login-link" onClick={NavigateLogin}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
