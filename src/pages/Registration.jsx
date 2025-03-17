import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiPhone, FiArrowRight } from 'react-icons/fi'
import backgroundImage from '../Assets/books.jpg'
import '../pages/Registration.css'

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginNavigate = useNavigate()

  const NavigateLogin = () => {
    loginNavigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  }
  
  return (
    <div className="registerBackground" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
                <FiUser className="input-icon" />
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon-wrapper">
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon-wrapper">
                <FiLock className="input-icon" />
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Enter your password" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-icon-wrapper">
                <FiPhone className="input-icon" />
                <input 
                  type="tel" 
                  id="contact" 
                  placeholder="Enter your contact no" 
                  required 
                />
              </div>
            </div>

            <button 
              className={`register-button ${isLoading ? 'loading' : ''}`} 
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
  )
}

export default Registration