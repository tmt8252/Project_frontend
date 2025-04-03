import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight, FiUser } from "react-icons/fi";
import backgroundImage from "../Assets/books.jpg";
import "../pages/Login.css";
import { useAuth } from "../contexts/AuthContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await login(email, password);
      setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.log(err.response?.data);
      setError("Invalid email or password");
      setMessage({ 
        type: 'error', 
        text: err.response?.data?.message || 'Failed to login. Please check your credentials.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterNavigation = () => {
    navigate("/registration");
  };

  return (
    <div
      className="loginBackground"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login-container">
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        <div className="login-box">
          <div className="login-header">
            <div className="avatar">
              <FiUser />
            </div>
            <h2>Welcome Back!</h2>
            <p>Please sign in to continue</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`login-button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {!isLoading && (
                <>
                  Sign In
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>Don't have an account?</p>
            <button
              className="register-link"
              onClick={handleRegisterNavigation}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
