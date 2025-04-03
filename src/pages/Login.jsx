import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight, FiUser } from "react-icons/fi";
import backgroundImage from "../Assets/books.jpg";
import "../pages/Login.css";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
      setError("Invalid email or password");
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
              <div className="input-icon-wrapper">
                <input
                  type="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
