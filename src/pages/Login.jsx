import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        console.log("login working");
        console.log('Logging in with:', { email, password });
    };

    const handleRegisterNavigation = () => {
        navigate('/register');
    }

    return (
        <div className="loginBackground">
            <div className="loginContainer">
                <h1 className='loginH1'>Login</h1>
                <form>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />

                    {error && <p className="error">{error}</p>}

                    <button className='submitBtn' type="submit" onClick={handleSubmit}>Login</button>
                </form>
                <p>Note: If you are not a user, please click on <button className='registerNavigation' onClick={handleRegisterNavigation}>Register</button></p>
            </div>
        </div>
    );
};

export default Login;