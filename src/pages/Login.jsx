import React from 'react'

const Login = () => {
    return (
        <div className="loginBackground">
            <div className="loginContainer">
                <h1 className='loginH1'>Login</h1>
                <p>hii</p>
                <form>
                    <label>Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />

                    <label>Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />

                    <button type="submit">Login</button>
                </form>
                <p>Note: If you are not a user, please click on <a href="/">Register</a></p>
            </div>
        </div>
    )
}

export default Login