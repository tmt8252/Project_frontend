import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const loginNavigate = useNavigate()

  const NavigateLogin = () => {
    loginNavigate('/login')
  }
  
  return (
    <div className="registerBackground">
        <div className="registerContainer">
          <h1 className='registerH1'>Register</h1>
          <form>
            <label className='label'>Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
            
            <label className='label'>Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
            
            <label className='label'>Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
            
            <label className='label'>Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
            
            <label className='label'>Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            
            <label className='label'>Contact Number</label>
            <input type="tel" id="contact-no" placeholder="Enter your contact number" required />
            
            <button className='submitBtn' type="submit">Register</button>
          </form>
          <p>Already have an account? <button className='loginNavigation' onClick={NavigateLogin}>Login</button></p>
        </div>
      </div>
  )
}

export default Registration