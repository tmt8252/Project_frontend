import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import backgroundImage from '../Assets/books.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Logging in with:', { email, password });
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterNavigation = () => {
        navigate('/registration');
    }

    return (
        <div className="loginBackground" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-card">
                <div className="login-content">
                    <div className="login-header">
                        <div className="logo-container">
                            📚 BookHaven
                        </div>
                        <h1 className="loginH1">Welcome Back</h1>
                        <p className="login-subtitle">Your literary journey continues here</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <label className="label" htmlFor="email">
                                <FiMail className="input-icon" />
                                <span>Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label className="label" htmlFor="password">
                                <FiLock className="input-icon" />
                                <span>Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="/forgot-password" className="forgot-link">
                                Forgot Password?
                            </a>
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button 
                            className={`login-button ${isLoading ? 'loading' : ''}`} 
                            type="submit" 
                            disabled={isLoading}
                        >
                            {!isLoading && (
                                <>
                                    Sign In 
                                    <FiArrowRight className="button-icon" />
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