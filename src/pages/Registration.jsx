import React from 'react'
const Registration = () => {
  return (
    <div className="registerBackground">
        <div className="registerContainer">
          <h1 className='registerH1'>Register</h1>
          <form>
            <label>Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
            
            <label>Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
            
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
            
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
            
            <label>Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            
            <label>Contact Number</label>
            <input type="tel" id="contact-no" placeholder="Enter your contact number" required />
            
            <label>Address</label>
            <textarea id="address" placeholder="Enter your address" required />
            
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
  )
}

export default Registration