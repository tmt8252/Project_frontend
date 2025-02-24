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
            <label className='label'>UserName</label>
            <input type="text" id="name" placeholder="Enter your username" required />
            
            <label className='label'>Email</label>
            <input type="email" id="email" placeholder="Enter your email or phone no." required />
                        
            <button className='submitBtn' type="submit">Register</button>
          </form>
          <p>Already have an account? <button className='loginNavigation' onClick={NavigateLogin}>Login</button></p>
        </div>
      </div>
  )
}

export default Registration