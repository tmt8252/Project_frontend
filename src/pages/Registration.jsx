import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiPhone, FiArrowRight } from "react-icons/fi";
import backgroundImage from "../Assets/books.jpg";
import "../pages/Registration.css";
import { useAuth } from "../contexts/AuthContext";

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();
  const { register } = useAuth();

  const NavigateLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register({ username, email, password, number });
      navigate("/login");
    } catch (err) {
      console.log(err);
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

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <div className="input-icon-wrapper">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setNumber(e.target.value)}
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
