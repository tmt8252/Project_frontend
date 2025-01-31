import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to validate email
    const validateEmail = (email) => {
        // Check if email contains '@' and ends with '.com'
        const emailPattern = /^[a-zA-Z0-9\-\.]+[@][a-z]+[\.][a-z]{2,3}+$/; // Basic email validation
        return emailPattern.test(email) && email.endsWith('.com');
    };

    // Function to validate password
    const validatePassword = (password) => {
        // Check for at least one uppercase letter, one number, one special character, and minimum length of 15
        const passwordPattern = /^(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordPattern.test(password);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error message
console.log("login working");

        // Validate email
        if (!validateEmail(email)) {
            setError('Please enter a valid email that ends with .com');
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.');
            return;
        }

        // If validation passes, proceed with login logic
        console.log('Logging in with:', { email, password });
        // Perform login action (e.g., API call)
    };

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

                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
                <p>Note: If you are not a user, please click on <a href="/">Register</a></p>
            </div>
        </div>
    );
};

export default Login;